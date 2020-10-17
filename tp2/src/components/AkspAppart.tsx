import React, { useState } from 'react';
import { IonModal, IonButton, IonContent, IonItem, IonLabel, IonInput, IonList } from '@ionic/react';

const AskAppart: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonContent>
      <IonModal isOpen={showModal} cssClass='my-custom-class'>
        <p>This is modal content</p>
        <IonList>
        <IonItem>
          <IonLabel position="floating">
            Adresse
          </IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
            Prix
          </IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
          Surface (m²)
          </IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
          Prix de rénovation
          </IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
          Loyer
          </IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
          Temps de vacances
          </IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">
          Photos
          </IonLabel>
          <IonInput ></IonInput>
        </IonItem>
        <IonButton >Ajouter</IonButton>
        <IonButton onClick={() => setShowModal(false)}>Fermer</IonButton>
        </IonList>
      </IonModal>
      <IonButton onClick={() => setShowModal(true)}>Ajouter Appartement</IonButton>
    </IonContent>
  );
};

export default AskAppart;