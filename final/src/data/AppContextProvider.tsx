import React, { useState, useEffect, useRef } from 'react';
import AppContext, { Profile, defaultProfile } from './app-context';
import firebase from "../firebase";

import { Plugins } from '@capacitor/core'

const { Storage, Filesystem } = Plugins;

const AppContextProvider: React.FC = (props) => {
    const [profile, setProfile] = useState<Profile>(defaultProfile)

    // Auth state
    const [user, setUser] = useState(null as firebase.User | null);
    const [loadingAuthState, setLoadingAuthState] = useState(true);

    const didMountRef = useRef(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user: any) => {
          setUser(user);
          setLoadingAuthState(false);
       });
    }, []);
    
    useEffect(() => {
        if (didMountRef.current) {
            console.log(profile)
            Storage.set({ key: 'profile', value: JSON.stringify(profile) })
        } else {
            didMountRef.current = true;
        }
    }, [profile])
    

    const updateProfile = (updateProfile: Profile) => {
        setProfile(updateProfile)
    }

    const initContext = async () => {
        const profileData = await Storage.get({ key: 'profile' })
        const storedProfile = profileData.value ? JSON.parse(profileData.value) : defaultProfile;
        didMountRef.current = false;
        setProfile(storedProfile)
    }

    return <AppContext.Provider value={{
        initContext,
        profile,
        updateProfile,

        user,
        authenticated: user !== null,
        setUser,
        loadingAuthState
    }}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider