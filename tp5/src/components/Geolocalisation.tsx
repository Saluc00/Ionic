import { IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react'
import React, { useContext, useState } from 'react'
import { Plugins } from '@capacitor/core'
import AppContext from '../data/app-context';
import { save } from 'ionicons/icons';
const { Geolocation } = Plugins;

const Geolocalisation: React.FC = () => {
    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0)
    const appCtx = useContext(AppContext)
    
    const test = () => {
        const oui = {...appCtx.user}
        oui.lastLatitude = latitude
        oui.lastLongitude = longitude
        appCtx.updateUser(oui)
        console.log(oui.username, appCtx.user.username)
    }
    
    const getPosition = () => {
        Geolocation.getCurrentPosition().then(
            e => {
                setLatitude(e.coords.latitude)
                setLongitude(e.coords.longitude)
            }
        )
    }
    
    return (
        <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Live positions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>
          <h1 className="titre">Your current position is:</h1>
          <p className="latLong"><b>Latitude</b>: {latitude}</p>
          <p className="latLong"><b>Longitude</b>: {longitude}</p>
        </IonText>
        <IonItem  className="user">
            <IonGrid className="ion-no-padding">
                <IonRow className="ion-justify-content-between">
                    <IonButton fill="outline" size="small" color="secondary" onClick={getPosition}>
                        <IonLabel>Get my position</IonLabel>
                    </IonButton>   
                    <IonButton fill="outline" size="small" color="primary" onClick={test}>
                        <IonIcon icon={save} slot="icon-only" />
                        <IonLabel> Save!</IonLabel>
                    </IonButton>
                </IonRow>
            </IonGrid>
        </IonItem>

      </IonContent>
    )
}

export default Geolocalisation;