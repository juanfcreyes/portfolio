import { useContext } from "react";
import AppContext from "../context/AppContext/AppContext";

export const useApp = () => {
  const context = useContext(AppContext);
  return context;
};
