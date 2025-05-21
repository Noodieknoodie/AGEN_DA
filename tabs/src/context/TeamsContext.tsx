import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import * as teams from "@microsoft/teams-js";

type Ctx = { getToken: () => Promise<string>; theme: string };
const TeamsCtx = createContext<Ctx>({ getToken: async () => "", theme: "default" });

export function TeamsProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    teams.app.initialize().then(() => {
      teams.app.getContext().then(c => setTheme(c.app?.theme ?? "default"));
      teams.app.registerOnThemeChangeHandler(t => setTheme(t ?? "default"));
    });
  }, []);

  const getToken = async () => {
    try {
      return await teams.authentication.getAuthToken();
    } catch {
      return "";
    }
  };

  return <TeamsCtx.Provider value={{ getToken, theme }}>{children}</TeamsCtx.Provider>;
}

export const useTeams = () => useContext(TeamsCtx);