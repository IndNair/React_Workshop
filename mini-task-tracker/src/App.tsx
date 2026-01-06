export default function App() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Mini Task Tracker</h1>
      </header>

      <main style={styles.main}>
        {/* Task Input Section (placeholder for now) */}
        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>Add a task</h2>

          <div style={styles.row}>
            <input
              type="text"
              placeholder="Type a task..."
              style={styles.input}
              aria-label="Task title"
            />
            <button style={styles.button}>Add</button>
          </div>

          <p style={styles.helpText}>
            (We’ll make this work in the next step.)
          </p>
        </section>

        {/* Task List Section (placeholder for now) */}
        <section style={styles.card}>
          <h2 style={styles.sectionTitle}>Your tasks</h2>
          <p style={styles.emptyState}>No tasks yet. Add one above.</p>
        </section>
      </main>

      <footer style={styles.footer}>Mini Task Tracker • v1</footer>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    fontFamily: "system-ui, Arial, sans-serif",
    background: "#f6f7fb",
  },
  header: {
    padding: "20px",
    borderBottom: "1px solid #e6e6e6",
    background: "white",
  },
  title: {
    margin: 0,
    fontSize: "24px",
  },
  main: {
    width: "100%",
    maxWidth: "720px",
    margin: "0 auto",
    padding: "20px",
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
  },
  card: {
    background: "white",
    border: "1px solid #e6e6e6",
    borderRadius: "12px",
    padding: "16px",
  },
  sectionTitle: {
    marginTop: 0,
    marginBottom: "12px",
    fontSize: "16px",
  },
  row: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #333",
    background: "#333",
    color: "white",
    cursor: "pointer",
  },
  helpText: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#666",
  },
  emptyState: {
    margin: 0,
    color: "#666",
  },
  footer: {
    padding: "14px 20px",
    textAlign: "center" as const,
    borderTop: "1px solid #e6e6e6",
    background: "white",
    fontSize: "12px",
    color: "#666",
  },
};
