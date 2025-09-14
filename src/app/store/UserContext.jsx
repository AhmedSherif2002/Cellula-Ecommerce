"use client"

const { createContext, useState } = require("react");

export const UserContext = createContext();

export function UserContextProvider ({ children }) {
    const [user, setUser] = useState();
    const value = { user, setUser }
    return (
        <>
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        </>
    )
}