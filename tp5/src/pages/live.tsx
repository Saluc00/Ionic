import React, { Suspense, useContext, useState } from 'react';
import { IonContent, IonHeader, IonLabel, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './live.css'
import { Plugins } from '@capacitor/core'
import Geolocalisation from '../components/Geolocalisation';
const { Geolocation } = Plugins;

const Live: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Live position</IonTitle>
        </IonToolbar>
      </IonHeader>

      <Geolocalisation />

    </IonPage>
  );
};

export default Live;
