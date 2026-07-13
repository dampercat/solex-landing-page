import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Problem from "../../components/Problem/Problem";
import Features from "../../components/Features/Features";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Waitlist from "../../components/Waitlist/Waitlist";
import FAQ from "../../components/FAQ/FAQ"
import Footer from "../../components/Footer/Footer";

import { useEffect, useRef } from "react";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Landing() {

  const startTimeRef = useRef(null);

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);
  
  useEffect(() => {
    const sendSession = async () => {
      const start = startTimeRef.current;
      if (!start) return;

      const duration = Date.now() - start;

      // ignore super short sessions (noise filter)
      if (duration < 3000) return;

      try {
        await addDoc(collection(db, "sessions"), {
          duration,
          startedAt: new Date(start),
          endedAt: new Date(),
          page: "/",
        });
      } catch (err) {
        console.error("Session tracking error:", err);
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === "hidden") {
        sendSession();
      }
    };

    const handleBeforeUnload = () => {
      sendSession();
    };

    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("solexVisited");

    if (hasVisited) return;

    const recordVisit = async () => {
      try {
        await addDoc(collection(db, "visits"), {
          timestamp: serverTimestamp(),
          page: "/",
          userAgent: navigator.userAgent,
        });

        sessionStorage.setItem("solexVisited", "true");
      } catch (err) {
        console.error("Error recording visit:", err);
      }
    };

    recordVisit();
  }, []);
  
  
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <FAQ />
      <Footer />
    </>
  );
}

export default Landing;