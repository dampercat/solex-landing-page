import "./Waitlist.css";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

function Waitlist() {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async () => {
    if (!email) {
      setStatus("Please enter an email.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus("Enter a valid email.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      console.log("Submitting...");

      const q = query(
        collection(db, "waitlist"),
        where("email", "==", email.toLowerCase())
      );

      const existing = await getDocs(q);

      if (!existing.empty) {
        setStatus("You're already on the list 👍");
        return;
      }

      await addDoc(collection(db, "waitlist"), {
        email: email.toLowerCase(),
        createdAt: new Date(),
        source: "landing-page"
      });

      try {
        await fetch("/api/sendWelcomeEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.toLowerCase(),
          }),
        });
      } catch (err) {
        console.error("Failed to send welcome email:", err);
      }

      setEmail("");
      setStatus("You're on the list 🚀");

    } catch (err) {
      console.error("WAITLIST ERROR:", err);
      setStatus("Something went wrong. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="waitlist" id="waitlist">

      <div className="container waitlist-content">

        <h2>Join the early access list.</h2>

        <p>
          Be among the first students to try Solex.
        </p>

        <div className="form">

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Joining..." : "Join Waitlist"}
            <ArrowRight size={18} />
          </button>

        </div>

        {status && <p className="status">{status}</p>}

        <small>No spam. Just launch updates and early access info.</small>

      </div>

    </section>
  );
}

export default Waitlist;