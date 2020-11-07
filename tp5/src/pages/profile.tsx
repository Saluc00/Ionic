import React, { useContext, useState } from 'react';
import { IonAlert, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import AppContext, { User } from '../data/app-context';
import './profile.css'
import { cpuUsage } from 'process';

const Profile: React.FC = () => {
  const appCtx = useContext(AppContext)
  const [showAlert, setShowAlert] = useState(false);
  const [value, setValue] = useState<any>();

  const changeUsername = (e: User) => {
      const newUser = {...appCtx.user}
      newUser.username = e.username
      appCtx.updateUser(newUser)
  } 
  
  return (
    <IonPage>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Rename username'}
        inputs={[
            {
              name: 'username',
              type: 'text',
              value: appCtx.user.username,
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
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonItem className="user first">
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-justify-content-between" onClick={() => setShowAlert(true)}>
              <IonCol size="auto"><IonLabel color="secondary">Username:</IonLabel></IonCol>
              <IonCol size="auto" ><IonLabel color="medium">{appCtx.user.username}</IonLabel></IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
        <IonItem className="user">
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-justify-content-between">
              <IonCol size="auto"><IonLabel color="secondary">Latidude</IonLabel></IonCol>
              <IonCol size="auto"><IonLabel color="medium">{appCtx.user.lastLatitude}</IonLabel></IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
        <IonItem className="user">
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-justify-content-between">
              <IonCol size="auto"><IonLabel color="secondary">Longitude:</IonLabel></IonCol>
              <IonCol size="auto"><IonLabel color="medium">{appCtx.user.lastLongitude}</IonLabel></IonCol>
            </IonRow>
          </IonGrid>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
