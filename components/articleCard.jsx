"use client";
import React from "react";
import "./articleCard.css";

const cards = [
  {
    id: 1,
    title: "aliumpresndtei",
    img: "/images/idk1.jpg",
  },
  {
    id: 2,
    title: "eruul mendiin shiidel",
    img: "/images/mend.jpg",
  },
  {
    id: 3,
    title: "kino toim",
    img: "/images/baatar.jpg",
  },
  {
    id: 4,
    title: "hiimel oyun uhaan",
    img: "/images/ci.jpg",
  },
  {
    id: 5,
    title: "Unpacked 2025",
    img: "/images/tab.jpg",
  },
  {
    id: 6,
    title: "chess 2025",
    img: "/images/chess.jpg",
  },
  {
    id: 7,
    title: "japan 2025",
    img: "/images/japan.jpg",
  },
];

export default function ArticleCard() {
  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.img} alt={card.title} />
          <div className="bottom-overlay">
            <h2>{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
