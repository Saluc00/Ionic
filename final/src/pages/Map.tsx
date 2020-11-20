import { IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonTitle, IonToast, IonToolbar, useIonViewDidEnter, useIonViewWillLeave, withIonLifeCycle } from '@ionic/react';
import { add, airplane } from 'ionicons/icons';
import React, { useContext, useState } from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'
import AppContext from "../data/app-context";
import { usePhotoGallery } from '../components/Camera'

import firebase from '../firebase'
import "firebase/auth";
import "firebase/firestore";

export interface AllPhoto {
    content: string;
}

const Map: React.FC = () => {
    const appCtx = useContext(AppContext)
    const [allPhotos, setAllPhotos] = useState<string[]>([]);
    const { toastMessage, toastShow, setToastMessage, setToastShow, photos, takePhoto } = usePhotoGallery();
    
    useIonViewDidEnter(() => {
        getData()
    })

    const getData = () => {
        const db = firebase.firestore();
        db.collection("Photos").doc(appCtx.user?.uid).collection('images').get().then((e) => {      
            setAllPhotos(e.docs.map(doc => doc.data().content))
            console.log('ouidsfisdu');
            
        })
    }

    return (
    <IonPage>
        <IonToast
            isOpen={toastShow}
            color={toastMessage == "Can't send this picture" ? 'danger': 'primary'}
            onDidDismiss={() => { setToastMessage(""); setToastShow(false) }}
            message={toastMessage}
            duration={2000}
        />
        <IonHeader>
            <IonToolbar color="primary">
            <IonTitle>Map</IonTitle>
            </IonToolbar>
        </IonHeader>
         <IonContent>
         <IonGrid>
    <IonRow>
      {allPhotos.map((content, index) => (          
        <IonCol size="6" key={index}>
          <IonImg src={content} />
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
            {/* <div style={{ width: "100vw", height: "100vh" }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    
                />
            </div> */}

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => {
                takePhoto() 
                getData()
                }}>
                <IonIcon icon={add} />
            </IonFabButton>
        </IonFab>
        </IonContent>
    </IonPage>
    );
}

export default Map;