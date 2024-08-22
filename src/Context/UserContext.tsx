import { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";
import supabaseClient from "../lib/supabaseClient";

interface IUserContext {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
const UserContext = createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionResponse = await supabaseClient.auth.getSession();
      if (sessionResponse.error) {
        return;
      }

      if (sessionResponse.data.session) {
        setUser(sessionResponse.data.session.user);
      }
    };

    fetchSession();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
