import React, { useState } from "react";
import "./admin.css"; // Basit stiller için ayrı bir dosya

export default function AdminPanel() {
  const [tab, setTab] = useState("content");

  return (
    <div className="admin-container">
      <h1>🔧 MaskedAI Yönetici Paneli</h1>

      <div className="admin-tabs">
        <button onClick={() => setTab("content")}>📄 İçerik</button>
        <button onClick={() => setTab("images")}>🖼 Görseller</button>
        <button onClick={() => setTab("elera")}>🧠 Elera</button>
        <button onClick={() => setTab("settings")}>⚙️ Ayarlar</button>
      </div>

      <div className="admin-content">
        {tab === "content" && <ContentManager />}
        {tab === "images" && <ImageManager />}
        {tab === "elera" && <EleraManager />}
        {tab === "settings" && <SettingsManager />}
      </div>
    </div>
  );
}
