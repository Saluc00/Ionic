import React from 'react';
import firebase from "../firebase";

export interface Profile {
    username: string,
    email: string,
    lat: number,
    long: number,
    conn: boolean
}

export const defaultProfile: Profile = {
    username: "Unknown",
    email: "Unknown",
    lat: 0,
    long: 0,
    conn: false
}

interface AppContext {
    initContext: () => void,
    profile: Profile,
    updateProfile: (updatedProfile: Profile) => void,

    user: firebase.User | null,
    authenticated: boolean;
    setUser: any;
    loadingAuthState: boolean;
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    profile: defaultProfile,
    updateProfile: () => { },

    user: null,
    authenticated: false,
    setUser: () => {},
    loadingAuthState: false,
});

export default AppContext