import { ReactNode, createContext } from "react";

// Create the context for state
export const State_context = createContext<any[]>([]);

// Define the Provider component for state context and total in value
export const State_component_value = (p: {
  children: ReactNode;
  total: any;
}) => {

  return (
    <State_context.Provider value={p.total}>
      {p.children}
    </State_context.Provider>
  );
};
