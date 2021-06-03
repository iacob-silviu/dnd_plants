import React, { useRef, useState } from "react";

import { useAppState } from "app-context";
import { Items } from "components";
import "./Roll.css";

export function Roll() {
  const [items, setItems] = useState([]);
  const { filteredData } = useAppState();
  const myDialog = useRef(null);

  const handleClick = () => {
    const loot = [...filteredData].reduce((acc, item) => {
      const rand = Math.floor(Math.random() * 100 + 1);

      if (rand <= +item.rarity) acc.push(item);

      return acc;
    }, []);

    setItems(loot);
    myDialog.current.showModal();
  };

  return (
    <>
      <button className="roll-button" onClick={() => handleClick()}>
        🎲 Roll
      </button>
      <dialog className="roll-dialog" ref={myDialog}>
        <header className="dialog-header">
          <h2>Rolled plants</h2>
          <button
            className="btn-close"
            onClick={() => myDialog.current.close()}
          >
            &times;
          </button>
        </header>
        <main className="dialog-content">
          {items.length ? <Items items={items} /> : "Empty Loot... 🤕"}
        </main>
      </dialog>
    </>
  );
}
