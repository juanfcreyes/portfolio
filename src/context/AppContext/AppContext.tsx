import React, { createContext, ReactNode, useCallback, useReducer } from "react";
import { POP_NOTIFICATION, PUSH_NOTIFICATION } from "../../constants/config";
import notificationsReducer from "./notificationsReducer";

const AppContext = createContext<any>({
  notifications: [],
});

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [notifications, setNotification] = useReducer(notificationsReducer, []);

  const addNotification = useCallback((message: string) => {
    setNotification({ type: PUSH_NOTIFICATION, payload: message });
  }, []);

  const removeLastNotification = useCallback(() => {
    setNotification({ type: POP_NOTIFICATION });
  }, []);

  return (
    <AppContext.Provider
      value={{
        notifications,
        addNotification,
        removeLastNotification,
      }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
