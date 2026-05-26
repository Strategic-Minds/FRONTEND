"use client";

const prompts = [
  "CREATE A SYSTEM",
  "CREATE A WORKFLOW",
  "CREATE AN AGENT"
];

const stages = [
  "Executive intake",
  "Self reflection",
  "Discovery",
  "Branding",
  "Sandbox build",
  "Promotion",
  "Validation",
  "Audit",
  "Improve"
];

export default function HomePage() {
  return (
    <main
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "28px 18px 64px",
        display: "grid",
        gap: 20
      }}
    >
      <section
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 10,
          padding: 24,
          background: "rgba(15,23,42,0.82)"
        }}
      >
        <div style={{ color: "#14b8a6", textTransform: "uppercase", letterSpacing: 1, fontSize: 12 }}>
          AUTO BUILDER Command Center
        </div>
        <h1 style={{ margin: "10px 0 8px", fontSize: "clamp(2rem, 6vw, 4rem)", lineHeight: 1 }}>
          Build, Promote, Validate
        </h1>
        <p style={{ margin: 0, maxWidth: 860, color: "#cbd5e1", lineHeight: 1.6, fontSize: 18 }}>
          This frontend is the delivery surface for the AUTO BUILDER loop. It is designed for mobile
          and desktop, and it is ready to become the launch surface for prompts, workflow status, and
          validation proof.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16
        }}
      >
        {prompts.map((prompt) => (
          <article
            key={prompt}
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10,
              padding: 18,
              background: "rgba(15,23,42,0.82)"
            }}
          >
            <div style={{ color: "#f59e0b", fontSize: 12, textTransform: "uppercase", letterSpacing: 1 }}>
              Start Here
            </div>
            <h2 style={{ margin: "8px 0 0", fontSize: 24 }}>{prompt}</h2>
          </article>
        ))}
      </section>

      <section
        style={{
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 10,
          padding: 20,
          background: "rgba(15,23,42,0.82)"
        }}
      >
        <h3 style={{ marginTop: 0 }}>Loop Stages</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12
          }}
        >
          {stages.map((stage, index) => (
            <div
              key={stage}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 8,
                padding: 14,
                background: "rgba(2,6,23,0.55)"
              }}
            >
              <div style={{ color: "#14b8a6", fontSize: 12 }}>Step {index + 1}</div>
              <div style={{ marginTop: 8 }}>{stage}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
