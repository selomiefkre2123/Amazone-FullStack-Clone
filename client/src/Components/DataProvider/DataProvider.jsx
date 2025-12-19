import React, { createContext, useReducer } from "react";

// DataContext create global state.
export const DataContext = createContext();

// DataProvider uses useReducer to provides both state and dispatch function to all components,to share and update basket items and user information without prop drilling.

export const DataProvider = ({ children, reducer, initialState }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContext.Provider>
  );
};
