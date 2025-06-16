import React, { useState } from "react";

export default function AdminPanel() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  const addEntry = () => {
    if (newEntry.trim() === "") return;
    setEntries([...entries, newEntry]);
    setNewEntry("");
  };

  const deleteEntry = (index) => {
    const updated = [...entries];
    updated.splice(index, 1);
    setEntries(updated);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: 600, margin: "auto", fontFamily: "Arial" }}>
      <h2>MaskedAI - İçerik Yönetimi</h2>
      <input
        type="text"
        placeholder="Yeni içerik başlığı..."
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />
      <button onClick={addEntry} style={{
        padding: "10px 20px",
        borderRadius: "8px",
        backgroundColor: "#58a6ff",
        color: "#fff",
        border: "none",
        marginBottom: "20px",
        cursor: "pointer"
      }}>
        Ekle
      </button>

      <ul>
        {entries.map((entry, index) => (
          <li key={index} style={{ marginBottom: "10px", background: "#f5f5f5", padding: "10px", borderRadius: "6px" }}>
            {entry}
            <button onClick={() => deleteEntry(index)} style={{
              marginLeft: "10px",
              backgroundColor: "#ff4d4f",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer"
            }}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
