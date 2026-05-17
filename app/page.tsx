export default function Home() {
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
        <p style={{ color: "gray", textAlign: "center" }}>
          Chargement des matchs en cours...
        </p>
      </div>
      <footer style={{ backgroundColor: "#00A550", padding: "1rem", textAlign: "center", marginTop: "auto" }}>
        <p style={{ color: "white", margin: 0, fontFamily: "Comic Sans MS, cursive" }}>
          A la mi-temps - Jouez intelligemment !
        </p>
      </footer>
    </main>
  );
}