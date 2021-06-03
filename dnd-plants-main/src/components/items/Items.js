import React, { Fragment } from "react";

import "./Items.css";

export function Items({ items }) {

  const getRarity = (rarity) => {
    if (rarity <= 5) return "legendary";
    if (rarity <= 50) return "rare";
    if (rarity <= 80) return "uncommon";
    return "common";
  };

  const renderItem = (item) => (
    <li className={`item item-${getRarity(item.rarity)}`}>
      <h3>{item.name}</h3>
      <p>Rarity: {item.rarity}%</p>
      <p className="detail-container">Season: {item.season.join(", ")}</p>
      <p className="detail-container">Climate: {item.climate.join(", ")}</p>
      <p className="detail-container">Locale: {item.locale.join(", ")}</p>
      <p className="detail-description">{item.description}</p>
    </li>
  );

  return (
    <ul className="items-container">
      {items.map((item, i) => (
        <Fragment key={i}>{renderItem(item)}</Fragment>
      ))}
    </ul>
  );
}
