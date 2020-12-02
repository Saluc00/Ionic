import React, { useContext } from 'react'
import { Redirect, Route} from 'react-router-dom';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { person, map, chatbubbles } from 'ionicons/icons';
import Friends from '../pages/Friends';
import Maps from '../pages/Map';
import Profiles from '../pages/Profile';
import AppContext , {Profile} from "../data/app-context";
import firebase from '../firebase'
import "firebase/auth";
import "firebase/firestore";

const Tabs: React.FC = () => {
    const appCtx = useContext(AppContext) 
    const userCredential = firebase.auth().currentUser;
    let i = 0

    if (userCredential && appCtx.profile.username != 'Unknow' && i ==0) {
        const db = firebase.firestore();
        db.collection('Users').doc(appCtx.user?.uid).get().then( e => {
            const newProfile: Profile = {
                username: e.data()!.username,
                email: e.data()!.email,
                lat: appCtx.profile.lat,
                long: appCtx.profile.long,
                conn: true
            }
            appCtx.updateProfile(newProfile)
            i+=1
        })
    }

    return (
    <IonTabs>
        <IonRouterOutlet>
            <Route path={'/tabs/friends'} component={Friends} exact />
            <Route path={'/tabs/map'} component={Maps} exact />
            <Route path={'/tabs/profile'} component={Profiles} exact />
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
        </IonTabBar>
    </IonTabs>
    )}

export default Tabs;