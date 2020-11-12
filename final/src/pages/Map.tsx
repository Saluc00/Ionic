import { IonPage } from '@ionic/react';
import React, { useContext } from 'react'
import AppContext from "../data/app-context";


const Map: React.FC = () => {
    const appCtx = useContext(AppContext) 
    console.log(appCtx.user)
    return (
    <IonPage>

    </IonPage>
    );
}

export default Map;