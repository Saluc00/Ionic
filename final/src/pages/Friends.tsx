import {IonContent, IonIcon, IonButton, IonSearchbar, IonModal, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react'
import {personAddSharp} from 'ionicons/icons';

const Friends: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    const [searchText, setSearchText] = useState('')

    return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
            <IonTitle>Friends</IonTitle>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                <p>Ajouter un ami</p>
                <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
                <IonButton onClick={() => setShowModal(false)}>Fermer</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}><IonIcon icon={personAddSharp} /></IonButton>
            </IonToolbar>
            <IonContent fullscreen>
                <p>• Voire « Statistique » ami</p>
                <p>• Ajouter ami</p>
                <p>• Accéder à la map d’un ami</p>
                <p>• Accepter/refuser l’accès a notre map/photo a un ami</p>
                <p>• Nombre d’amis</p>
            </IonContent>
        </IonHeader>
    </IonPage>
    );
}

export default Friends;