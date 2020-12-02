import {IonCard, IonAlert, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import React, { useContext, useState } from 'react'
import AppContext, { Profile } from "../data/app-context";
import './profile.css'
import firebase from '../firebase'
import "firebase/auth";
import "firebase/firestore";

const Profiles: React.FC = () => {
    const appCtx = useContext(AppContext) 
    const [showAlert, setShowAlert] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState<string>();
  
    const changeUsername = (e: Profile) => {
        const newUser = {...appCtx.profile}
        newUser.username = e.username
        const db = firebase.firestore();
        db.collection('Users').doc(appCtx.user?.uid).set(newUser)
        appCtx.updateProfile(newUser)
        setToastMessage('Your username is changed!')
        setShowToast(true)
    } 

    return (
    <IonPage>
        <IonToast
            isOpen={showToast}
            color='primary'
            onDidDismiss={() => { setShowToast(false) }}
            message={toastMessage}
            duration={2000}
        />
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Rename username'}
        inputs={[
            {
              name: 'username',
              type: 'text',
              value: appCtx.profile.username,
              placeholder: 'Username'
            }
          ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary'
          },
          {
            text: 'Change',
            cssClass: 'secondary',
            handler:(test) => changeUsername(test),
            
          }
        ]}/>
        <IonHeader>
            <IonToolbar color="primary">
            <IonTitle>Profile</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonItem className="user first">
                <IonGrid className="ion-no-padding">
                <IonRow className="ion-justify-content-between" onClick={() => setShowAlert(true)}>
                    <IonCol size="auto"><IonLabel color="secondary">Username:</IonLabel></IonCol>
                    <IonCol size="auto" ><IonLabel color="medium">{appCtx.profile.username}</IonLabel></IonCol>
                </IonRow>
                </IonGrid>
            </IonItem>
            <IonItem className="user">
                <IonGrid className="ion-no-padding">
                <IonRow className="ion-justify-content-between">
                    <IonCol size="auto"><IonLabel color="secondary">Email</IonLabel></IonCol>
                    <IonCol size="auto"><IonLabel color="medium">{appCtx.profile.email}</IonLabel></IonCol>
                </IonRow>
                </IonGrid>
            </IonItem>

            {/*-- Statistique Profil --*/}
            <IonCard >
              <IonTitle size="large">Statistique Profil</IonTitle>
              <IonItem lines="none">
                <IonLabel color="secondary">Nombre de photo pris:{}</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel color="secondary">Nombre de lieux:{}</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel color="secondary">Lieux favoris:{}</IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel color="secondary">Nombre d'amis:{}</IonLabel>
              </IonItem>
            </IonCard>
            
            <div style={{ marginTop: "1em", paddingTop: "1em", borderTop: "1px solid grey" }}>
                <IonButton expand="block" color="danger" >Disconnect</IonButton>
            </div>
        </IonContent>
      
    </IonPage>
    );
}

export default Profiles;