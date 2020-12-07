import React, { useContext } from 'react'
import { Redirect, Route} from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, useIonViewDidEnter } from '@ionic/react'
import { person, map, chatbubbles, settingsSharp,scanCircleOutline } from 'ionicons/icons';
import Friends from '../pages/Friends';
import Maps from '../pages/Map';
import Profiles from '../pages/Profile';
import Options from '../pages/Options';
import AppContext , {Profile} from "../data/app-context";
import firebase from '../firebase'
import "firebase/auth";
import "firebase/firestore";

const Tabs: React.FC = () => {
    return (
    <IonTabs>
        <IonRouterOutlet>
            <Route path={'/tabs/friends'} component={Friends} exact />
            <Route path={'/tabs/map'} component={Maps} exact />
            <Route path={'/tabs/profile'} component={Profiles} exact />
            <Route path={'/tabs/Options'} component={Options} exact />
            <Redirect path={'/tabs'} exact to={'/tabs/map'} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="friends" href="/tabs/friends">
                <IonIcon icon={chatbubbles} />
                <IonLabel>Friends</IonLabel>
            </IonTabButton>
            <IonTabButton tab="map" href="/tabs/map">
                <IonIcon icon={map} />
                <IonLabel>Map</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/tabs/profile">
                <IonIcon icon={person} />
                <IonLabel>Profile</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Options" href="/tabs/Options">
                <IonIcon icon={settingsSharp} />
                <IonLabel>Option</IonLabel>
            </IonTabButton>
        </IonTabBar>
    </IonTabs>
    )}

export default Tabs;