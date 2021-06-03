import React from "react";

import { Filters, Items, Loader } from "components";
import { useAppState } from "app-context";
import "./App.css";

function App() {
  const { isLoading, filteredData } = useAppState();

  if (isLoading) {
    return (
      <div className="loading-container">
        <h1>Loading Plants...</h1>
        <Loader />
      </div>
    );
  }
  return (
    <>
      <Filters />
      <Items items={filteredData} />
    </>
  );
}

export default App;
