import React, { useState } from "react";

export default function AdminPanel() {
  const [textContent, setTextContent] = useState("");

  const handleSave = () => {
    alert("İçerik başarıyla kaydedildi! 🌟\n\n" + textContent);
    // İleride buraya API çağrısı ekleyebiliriz
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: 600, margin: "auto" }}>
      <h2>MaskedAI Yönetici Paneli</h2>
      <textarea
        style={{ width: "100%", height: 150, fontSize: 16, padding: 10, borderRadius: 8, border: "1px solid #ccc" }}
        placeholder="Buraya içerik yaz..."
        value={textContent}
        onChange={(e) => setTextContent(e.target.value)}
      />
      <button
        onClick={handleSave}
        style={{ marginTop: 15, padding: "10px 20px", fontSize: 16, borderRadius: 8, backgroundColor: "#58a6ff", color: "white", border: "none", cursor: "pointer" }}
      >
        Kaydet
      </button>
    </div>
  );
}
