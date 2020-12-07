import React, { useState } from 'react';
import {IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonModal,IonButton, IonLabel } from '@ionic/react';
import './option.css'

const Option: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showsecondModal, setShowsecondModal] = useState(false);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Option</IonTitle>
        </IonToolbar>
      </IonHeader>

      
      <IonContent>

        {/*-- Crédits --*/}
        <IonItem className="Credits">
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
            <IonLabel className="titre">Crédits</IonLabel>
            <IonLabel className="text">Cette application a était crée par Arthur Fourfooz et Lucas Userau lors d'un projet à Ynov campus</IonLabel>
            <IonButton onClick={() => setShowModal(false)}>fermer</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Crédits</IonButton>
        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default Option;