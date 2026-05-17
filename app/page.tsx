'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [matchs, setMatchs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/matches')
      .then(res => res.json())
      .then(data => {
        setMatchs(data.matches ? data.matches : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main style={{ backgroundColor: "#ffffff", minHeight: "100vh", fontFamily: "sans-serif", display: "flex", flexDirection: "column" }}>
      <nav style={{ backgroundColor: "#00A550", padding: "1.2rem 1.5rem" }}>
        <h1 style={{ color: "white", fontSize: "2rem", margin: 0, fontFamily: "Comic Sans MS, cursive" }}>
          A la mi-temps
        </h1>
        <p style={{ color: "white", margin: "0.3rem 0 0 0", fontSize: "1rem", fontStyle: "italic", fontFamily: "Comic Sans MS, cursive" }}>
          Jouez intelligemment !
        </p>
      </nav>
      <div style={{ padding: "1.5rem", flex: 1 }}>
        <h2 style={{ color: "#00A550", marginBottom: "1.5rem", fontSize: "1.3rem", borderBottom: "2px solid #00A550", paddingBottom: "0.5rem" }}>
          Matchs du jour
        </h2>
        {loading ? (
          <p style={{ color: "#00A550", textAlign: "center", fontSize: "1.2rem" }}>
            Chargement des matchs...
          </p>
        ) : matchs.length === 0 ? (
          <p style={{ color: "gray", textAlign: "center" }}>
            Aucun match trouve.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            {matchs.map((match, index) => (
              <div key={index} style={{ backgroundColor: "#f9f9f9", borderRadius: "16px", padding: "1.5rem", borderLeft: "5px solid #00A550", textAlign: "center" }}>
                <div style={{ marginBottom: "1.2rem" }}>
                  <div style={{ color: "black", fontWeight: "bold", fontSize: "1.3rem", marginBottom: "0.4rem" }}>
                    {match.home ? match.home.name : "Domicile"}
                  </div>
                  <div style={{ color: "#00A550", fontWeight: "bold", fontSize: "1rem", marginBottom: "0.4rem" }}>VS</div>
                  <div style={{ color: "black", fontWeight: "bold", fontSize: "1.3rem" }}>
                    {match.away ? match.away.name : "Exterieur"}
                  </div>
                </div>
                <div style={{ backgroundColor: "#00A550", borderRadius: "25px", padding: "0.6rem 1.5rem", display: "inline-block" }}>
                  <span style={{ color: "white", fontSize: "0.95rem", fontWeight: "bold" }}>
                    Pronostic en cours...
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <footer style={{ backgroundColor: "#00A550", padding: "1rem", textAlign: "center", marginTop: "auto" }}>
        <p style={{ color: "white", margin: 0, fontFamily: "Comic Sans MS, cursive" }}>
          A la mi-temps - Jouez intelligemment !
        </p>
      </footer>
    </main>
  );
}