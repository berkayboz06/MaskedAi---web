import React, { useState } from "react";

export default function ContentManager() {
  const [contents, setContents] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addContent = () => {
    if (!title.trim() || !desc.trim()) return;
    setContents([...contents, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteContent = (index) => {
    const updated = [...contents];
    updated.splice(index, 1);
    setContents(updated);
  };

  return (
    <div>
      <h3>📄 Yeni İçerik Ekle</h3>
      <input
        type="text"
        placeholder="Başlık"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "6px" }}
      />
      <textarea
        placeholder="Açıklama"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        rows={4}
        style={{ width: "100%", padding: "10px", borderRadius: "6px" }}
      />
      <button
        onClick={addContent}
        style={{ marginTop: "10px", padding: "10px 20px", borderRadius: "6px
