import "./Dashboard.css";
import { useEffect, useState } from "react";

import { db } from "../../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function Dashboard() {
    const [visits, setVisits] = useState(0);
    const [signups, setSignups] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const sessionSnapshot = await getDocs(
                query(collection(db, "sessions"), orderBy("startedAt", "desc"))
            );

            const sessionData = sessionSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setSessions(sessionData);

            try {
                const visitSnapshot = await getDocs(
                    collection(db, "visits")
                );
            
                setVisits(visitSnapshot.size);

                const signupQuery = query(
                    collection(db, "waitlist"),
                    orderBy("createdAt", "desc")
                );

                const signupSnapshot = await getDocs(signupQuery);

                const users = signupSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                setSignups(users);

            } catch (err) {
                console.error(err);
            }

            setLastUpdated(new Date());
        };

        fetchData();
    }, []);

    const conversion = visits === 0 ? 0: ((signups.length / visits) * 100).toFixed(1);

    function formatDuration(totalSeconds) {
        if (!totalSeconds || totalSeconds < 0) return "0s";

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = Math.floor(totalSeconds % 60);

        if (hours > 0) {
            return `${hours}h ${minutes}m ${seconds}s`;
        }

        if (minutes > 0) {
            return `${minutes}m ${seconds}s`;
        }

        return `${seconds}s`;
    }

    const avgSessionSeconds = sessions.length === 0 ? 0 : Math.round(sessions.reduce((acc, s) => acc + (s.duration || 0), 0) / sessions.length / 1000);

    const avgSession = formatDuration(avgSessionSeconds);


    return (
    <div className="dashboard">
        <div className="hero-header">
            <div className="hero-left">

                <div className="dashboard-logo">
                    Solex<span>.</span>
                </div>

                <p className="dashboard-label">
                    Internal Analytics
                </p>

                <h1>
                    Good afternoon,
                    <br />
                    Team Solex 👋
                </h1>

                <p className="dashboard-message">
                    <strong>{signups.length}</strong> students are already waiting for
                    what you're building.
                </p>

            </div>

            <div className="hero-right">
                <div className="status-pill">
                    <span className="status-dot"></span>
                    Live
                </div>

                <p className="last-updated">
                    {lastUpdated
                        ? `Updated ${lastUpdated.toLocaleTimeString()}`
                        : "Loading analytics..."}
                </p>

            </div>

        </div>

        <div className="stats">
            <div className="card">
                <h3>Total Visits</h3>
                <h2>{visits}</h2>
            </div>

            <div className="card">
                <h3>Waitlist Signups</h3>
                <h2>{signups.length}</h2>
            </div>

            <div className="card">
                <h3>Conversion Rate</h3>
                <h2>{conversion}%</h2>
            </div>

            <div className="card">
                <h3>Avg Time on Site</h3>
                <h2>{avgSession}</h2>
            </div>

        </div>

        <div className="bottom-grid">
            <div className="insights">
                <h2>Landing Page Performance</h2>

                <p>
                    <strong>{signups.length}</strong> people have joined the waitlist.
                </p>

                <p>
                    Current conversion rate is{" "}
                    <strong>{conversion}%</strong>.
                </p>

                <p>
                    {visits === 0
                        ? "Waiting for visitor data."
                        : `Approximately 1 out of every ${Math.max(
                            1,
                            Math.round(visits / Math.max(signups.length, 1))
                        )} visitors joins the waitlist.`
                    }
                </p>
            </div>

            <div className="recent">
                <h2>Recent Signups</h2>

                {signups.length === 0 ? (
                    <p>No signups yet.</p>
                ) : (
                    <ul>
                        {signups.map(user => (
                            <li key={user.id}>
                                {user.email}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </div>
);
}

export default Dashboard;