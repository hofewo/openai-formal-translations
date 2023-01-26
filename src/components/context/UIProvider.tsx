import React, { useState } from "react";

export const UIContext = React.createContext('');

export default function UIProvider({ children }) {
    const [notification, setNotification] = useState('')
    return <UIContext.Provider value={{
        notification
    }}>
        {children}
    </UIContext.Provider>
}