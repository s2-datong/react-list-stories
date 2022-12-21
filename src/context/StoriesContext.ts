import { createContext, useContext } from "react";
import { Story } from "../types";


const storiesContext = createContext<Story[]>([]);
export const Provider = storiesContext.Provider;
export const useStoriesContext = () => useContext(storiesContext)