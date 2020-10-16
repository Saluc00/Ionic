import { IonButton, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

interface ContainerProps { }

const Menu: React.FC<ContainerProps> = () => {
  return (
      <><IonHeader>
      <IonToolbar>
        <IonButton slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButton>
        <IonTitle>Start Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonMenu side="start"contentId="first" menuId="main-menu">

        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonRouterOutlet id="first"></IonRouterOutlet></>
  );
};

export default Menu;
