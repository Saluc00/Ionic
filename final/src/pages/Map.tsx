import { IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonImg, IonLabel, IonPage, IonRow, IonTitle, IonToast, IonToolbar, useIonViewDidEnter, useIonViewWillLeave, withIonLifeCycle } from '@ionic/react';
import { add, airplane } from 'ionicons/icons';
import React, { useContext, useState } from 'react'
import AppContext from "../data/app-context";
import { usePhotoGallery } from '../components/Camera'
//import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import firebase from '../firebase'
import "firebase/auth";
import "firebase/firestore";
import MapContainer from '../components/Map';

export interface AllPhoto {
    content: string;
}

// API KEY : AIzaSyA81xE8FtWW1Via90bxw-9rc9YcPsgmetw

const Maps: React.FC = () => {
    const appCtx = useContext(AppContext)
    const [allPhotos, setAllPhotos] = useState<string[]>([]);
    const { toastMessage, toastShow, setToastMessage, setToastShow, photos, takePhoto, getPhotos } = usePhotoGallery();
    
    useIonViewDidEnter(() => {
        getData()
    })

    const getData = () => {
        const db = firebase.firestore();
        db.collection("Photos").doc(appCtx.user?.uid).collection('images').get().then((e) => {      
            setAllPhotos(e.docs.map(doc => doc.data().content))
            
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
      {/* {allPhotos.map((content, index) => (          
        <IonCol size="6" key={index}>
          <IonImg src={content} />
        </IonCol>
      ))} */}
    </IonRow>
  </IonGrid>
    
    <MapContainer />

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

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA81xE8FtWW1Via90bxw-9rc9YcPsgmetw'
  }) (Maps);