import "./Hero.css";
import { Calendar, Bell, TrendingUp, BookOpen } from "lucide-react";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        {/* Left Side */}
        <div className="hero-text">
          <span className="hero-badge">
            Student Productivity Reimagined
          </span>

          <h1>
            Plan Smarter.
            <br />
            Beat Burnout Before It Begins.
          </h1>

          <p>
            Solex helps students organize assignments,
            manage their workload,
            and build healthier study habits —
            all from one simple platform!
          </p>

          <div className="hero-buttons">
            <button className="secondary-btn">
              <a href="#about" className="secondary">Learn More</a>
            </button>
          </div>

          <div className="hero-highlights">

            <div>
              <Calendar size={18} />
              Smart Planning
            </div>

            <div>
              <Bell size={18} />
              Reminders
            </div>

            <div>
              <TrendingUp size={18} />
              Progress Tracking
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="hero-image">
            <div className="phone">

            <div className="phone-notch"></div>
            <div className="phone-content">
                <div className="phone-header">
                
                <div>
                    <p className="greeting">Good Afternoon 👋</p>
                    <h3>Alex</h3>
                </div>

                <div className="avatar">
                    A
                </div>
            </div>

            <div className="summary-card">
                <small>Today's Focus</small>
                <h2>3 Tasks</h2>
                <span>2 Assignments • 1 Study Session</span>
            </div>

            <div className="card">
                <div className="card-top">
                    <BookOpen size={18}/>
                    <span>Math Assignment</span>
                </div>

                <div className="progress-bar">
                    <div className="progress assignment"></div>
                </div>

                <small>Due Tomorrow</small>

            </div>

            <div className="card">
                <div className="card-top">
                    <Bell size={18}/>
                    <span>Study Session</span>
                </div>

                <p>Today • 6:00 PM</p>

            </div>

            <div className="card">
                <div className="card-top">
                    <TrendingUp size={18}/>
                    <span>Workload Balance</span>
                </div>

                <div className="progress-bar">
                    <div className="progress workload"></div>
                </div>

                <small>Looking good — remember to rest tonight.</small>

            </div>

            <div className="bottom-nav">
                <Calendar size={20}/>
                <BookOpen size={20}/>
                <TrendingUp size={20}/>
            </div>

            </div>

            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;