import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'

const Friends: React.FC = () => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
            <IonTitle>Friends</IonTitle>
            </IonToolbar>
        </IonHeader>

    </IonPage>
    );
}

export default Friends;