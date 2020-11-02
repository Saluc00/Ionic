import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import Menu from '../components/Menu'
import AskAppart from '../components/AkspAppart'
import ProfilData from '../data/profilData'

const Home: React.FC = () => {
  return (
    <IonApp>
    <Menu />
    <IonItem>
    <IonLabel>
    </IonLabel></IonItem>
    <AskAppart />
    </IonApp>
  );
};

export default Home;

