import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

interface ContainerProps { }

const Menu: React.FC<ContainerProps> = () => {
  return (
      <><IonHeader>
      <IonToolbar>
        <IonButton slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButton>
        <IonTitle>Investment Mockup</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonMenu side="start"contentId="first" menuId="main-menu">

        <IonContent>
          <IonList>
          <IonItem href="/">
            <IonLabel>
              Liste des appartements
            </IonLabel>
          </IonItem>
          <IonItem href="/profil">
            <IonLabel>
              Mon profil
            </IonLabel>
          </IonItem>
        </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="first"></IonRouterOutlet></>
  );
};

export default Menu;
