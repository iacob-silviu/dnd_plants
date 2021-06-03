import React, { createContext, useContext, useReducer, useEffect } from "react";
import Tabletop from "tabletop";

import { loadData } from "./actions";

const AppStateContext = createContext();
const AppDispatchContext = createContext();

function appReducer(state, action) {
  switch (action.type) {
    case appTypes.loadData:
      return loadData(state, action.data);
    case appTypes.filterData:
      const { filteredData } = action;

      return {
        ...state,
        filteredData,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
const appTypes = {
  loadData: "loadData",
  filterData: "filterData",
};

const initialState = {
  isLoading: true,
  data: [],
  filteredData: [],
  climates: ["All"],
  locales: ["All"],
};

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    Tabletop.init({
      key: "1joq6oGR_nb_mHa4-w2r-EC50qWim7mWvqiN_K1WxGRE",
      simpleSheet: true,
    })
      .then((data) => {
        dispatch({ type: appTypes.loadData, data });
      })
      .catch(console.warn);
  }, []);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error("useAppState must be used within a AppProvider");
  }
  return context;
}

function useAppDispatch() {
  const context = useContext(AppDispatchContext);

  if (context === undefined) {
    throw new Error("useAppDispatch must be used within a AppProvider");
  }
  return context;
}

export { AppProvider, useAppState, useAppDispatch, appTypes };
