import "./Features.css";
import {
  Calendar,
  Bell,
  LayoutGrid,
  Flame,
  Zap,
  BarChart3,
} from "lucide-react";

function Features() {
  return (
    <section className="features" id="features">
      <div className="container features-content">

        <div className="features-header">
          <h2>
            Everything you need to stay on track.
          </h2>

          <p>
            Solex combines planning, reminders, and progress tracking
            into one simple system built for students.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <Calendar />
            <h3>Smart Calendar & Planner</h3>
            <p>
              Manage assignments and study schedules in one unified timeline.
            </p>
          </div>

          <div className="feature-card">
            <Bell />
            <h3>Smart Notifications</h3>
            <p>
              Never miss deadlines or study sessions with intelligent reminders.
            </p>
          </div>

          <div className="feature-card">
            <LayoutGrid />
            <h3>Integrated Workspace</h3>
            <p>
              Replace scattered apps with one streamlined productivity hub.
            </p>
          </div>

          <div className="feature-card">
            <Flame />
            <h3>Burnout Awareness</h3>
            <p>
              Understand workload balance and avoid overloading yourself.
            </p>
          </div>

          <div className="feature-card">
            <Zap />
            <h3>Fast & Simple Interface</h3>
            <p>
              Built for speed—no complexity, just what you need.
            </p>
          </div>

          <div className = "feature-card">
            <BarChart3 />
            <h3>Progress Tracking</h3>
            <p>
              Stay motivated with visible progress and completed tasks.
            </p>
          </div>
          
        </div>

      </div>

    </section>
  );
}

export default Features;