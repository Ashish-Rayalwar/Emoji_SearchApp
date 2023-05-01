import React, { useState, useEffect } from "react";
import emojiList from "emoji-datasource";
import { emojiData } from "./emoji";
import "./emoji.css";

function EmojiSearch() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
    console.log(data);
  }, [search]);

  return (
    <div>
      <div>
        <center>
          <h1> 😺 Emoji Search 🐺 </h1>
          <input
            style={{ width: "30%", height: "30px" }}
            placeholder="Serach Emoji"
            size="30"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </center>
        <div className="container">
          {data.map((emoji) => (
            <div className="card" key={emoji.title}>
              {emoji.symbol} {emoji.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmojiSearch;
