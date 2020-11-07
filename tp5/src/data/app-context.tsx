import React from 'react';

export interface User {
    username: String,
    lastLatitude: number,
    lastLongitude: number
}

export const defaultUser: User = {
    username: "Unknown",
    lastLatitude: 0,
    lastLongitude: 0
}

interface AppContext {
    user: User,
    updateUser: (updatedUser: User) => void
}

const AppContext = React.createContext<AppContext>({
    user: defaultUser,
    updateUser: () => { }
})

export default AppContext