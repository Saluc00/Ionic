import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';

const AskAppart: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <p>This is modal content</p>
        <IonButton onClick={() => setShowModal(false)}>Fermer</IonButton>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Ajouter Appartement</IonButton>
    </IonContent>
  );
};

export default AskAppart;