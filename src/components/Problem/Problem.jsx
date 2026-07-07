import "./Problem.css";

function Problem() {
  return (
    <section className="problem" id="about">
      <div className="container problem-content">

        <div className="problem-header">
          <h2>
            University shouldn't feel like
            constant catch-up.
          </h2>

          <p>
            But for most students, managing deadlines, assignments,
            and study time feels overwhelming and unstructured.
          </p>
        </div>

        <div className="problem-grid">

          <div className="problem-card">
            <h3>📚 Missed deadlines</h3>
            <p>
              Tasks pile up across different platforms and notes,
              making it easy to forget important work.
            </p>
          </div>

          <div className="problem-card">
            <h3>⏳ Poor time visibility</h3>
            <p>
              Students often don’t know how much work they actually
              have until it becomes overwhelming.
            </p>
          </div>

          <div className="problem-card">
            <h3>🔥 Burnout risk</h3>
            <p>
              No system helps students recognize when their workload
              is becoming unhealthy.
            </p>
          </div>

          <div className="problem-card">
            <h3>🧠 Disorganized tools</h3>
            <p>
              Calendars, notes, and reminders are scattered across apps
              that don’t talk to each other.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Problem;