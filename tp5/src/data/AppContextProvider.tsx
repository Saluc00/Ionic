import React, { useState } from 'react';
import AppContext, { User, defaultUser } from './app-context';


const AppContextProvider: React.FC = (props) => {
    const [user, setUser] = useState<User>(defaultUser)

    const updateUser = (updateUser: User) => {
        setUser(updateUser)
    }

    return <AppContext.Provider value={{ user, updateUser }}>
        {props.children}
    </AppContext.Provider>
}
export default AppContextProvider;