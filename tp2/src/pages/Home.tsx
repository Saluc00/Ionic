import { IonApp, IonButton, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
import Menu from '../components/Menu'
import AskAppart from '../components/AkspAppart'

const Home: React.FC = () => {
  return (
    <IonApp>
    <Menu />
    <AskAppart />
    </IonApp>
  );
};

export default Home;

