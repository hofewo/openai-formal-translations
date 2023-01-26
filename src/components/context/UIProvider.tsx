import React, { useState } from "react";

export const UIContext = React.createContext(null);

export default function UIProvider({ children }) {
    const [notification, setNotification] = useState('')
    return <UIContext.Provider value={{
        notification: notification
    }}>
        {children}
    </UIContext.Provider>
}