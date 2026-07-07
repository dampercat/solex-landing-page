import "./HowItWorks.css";
import { UserPlus, Calendar, TrendingUp } from "lucide-react";

function HowItWorks() {
  return (
    <section className="howitworks" id="how-it-works">
      <div className="container howitworks-content">
        <div className="howitworks-header">
          <h2>Get started in minutes.</h2>

          <p>
            No setup stress. No complicated onboarding.
            Just open, plan, and stay on track.
          </p>

        </div>

        <div className="steps">

          <div className="step">

            <div className="icon">
              <UserPlus />
            </div>

            <h3>Create your account</h3>
            <p>Sign up and set up your student profile in seconds.</p>

          </div>

          <div className="step">

            <div className="icon">
              <Calendar />
            </div>

            <h3>Plan your schedule</h3>
            <p>Add assignments, classes, and study sessions in one place.</p>

          </div>

          <div className="step">

            <div className="icon">
              <TrendingUp />
            </div>

            <h3>Stay on track</h3>
            <p>Get reminders, track progress, and avoid last-minute stress.</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;