import React, { useState } from 'react';
import {IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonModal,IonButton } from '@ionic/react';

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
            <h1>Crédits</h1>
            <p>Cette application a était crée par Arthur Fourfooz et Lucas Userau lors d'un projet à Ynov campus</p>
            <IonButton onClick={() => setShowModal(false)}>fermer</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>Crédits</IonButton>
        </IonItem>

        {/*-- HELP --*/}
        <IonItem className="Help">
            <IonModal isOpen={showsecondModal} cssClass='my-custom-class'>
            <h1>"AIDEZ-MOI"</h1>
            <p>MDR FAUDRAS REMPLIR ICI MAIS GROSSE FLEMME</p>
            <IonButton onClick={() => setShowsecondModal(false)}>fermer</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowsecondModal(true)}>"AIDEZ-MOI"</IonButton>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Option;