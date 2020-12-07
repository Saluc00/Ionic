import {  IonButton,  IonContent,  IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import AppContext, { Profile } from "../data/app-context";
import React, { useContext, useState } from 'react'
import firebase from '../firebase'
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from 'react-router';

interface UserData {
    email: string;
    password: string;
}



const Connexion: React.FC = () => {
    const appCtx = useContext(AppContext);
    const history = useHistory();
    const [toastMessage, setToastMessage] = useState<string>();
    const [showToast, setShowToast] = useState<boolean>(false);
    const [values, setValues] = useState<UserData>({
        email: "",
        password: ""
    });

    const handleChange = (event: CustomEvent) => {
        const tar = (event.target as HTMLInputElement)
        setValues(values => ({
            ...values,
            [tar.name]: tar.value
        }));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();        
        firebase
            .auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(res => {
                appCtx.setUser(res);
                
                const db = firebase.firestore();                
                db.collection("Users").doc(res.user!.uid).get()
                .then(e  => {
                    const profile: Profile = {
                        username: e.data()!.username,
                        email: e.data()!.email,
                        lat: 0,
                        long: 0,
                        conn: true
                    }          
                    db.collection('Users').doc(res.user!.uid).get().then( e => {
                        const newProfile: Profile = {
                            username: e.data()!.username,
                            email: e.data()!.email,
                            lat: appCtx.profile.lat,
                            long: appCtx.profile.long,
                            conn: true
                        }
                        appCtx.updateProfile(newProfile)
                    })          
                    
                    setToastMessage(`Hi ${profile.username} !`)
                    appCtx.updateProfile(profile)
                    setShowToast(true)
                    history.push('tabs')
                })
                .catch(error => {
                    setToastMessage(error.message)
                    setShowToast(true)
                });
            })
            .catch(error => {
                setToastMessage(error.message)
                setShowToast(true)
            });
    }

    const handleClick = () => {
        console.log('test')
        history.push('signup');
    }
    
    const handleWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
    }


    return (
    <IonPage>
        <IonHeader>
            <IonToolbar color="primary">
            <IonTitle>Welcome</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
                <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
                    <div style={{ flexGrow: 1 }} />
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ flexGrow: 1 }} />
                        <div style={{ textAlign: 'center' }}>
                            <h1>Login</h1>
                            <form onSubmit={handleSubmit}>
                                <IonList>
                                    <IonItem>
                                        <IonLabel position="floating">Email</IonLabel>
                                        <IonInput type="text" name="email" value={values.email} onIonChange={handleChange}></IonInput>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating">Password</IonLabel>
                                        <IonInput type="password" name="password" value={values.password} onIonChange={handleChange} ></IonInput>
                                    </IonItem>
                                </IonList>
                                <div style={{ marginTop: "1em" }}>
                                    <IonButton expand="full" onClick={handleSubmit}>Login</IonButton>
                                </div>
                                <div>
                                    <p style={{ margin: "0", marginTop: "2em" }}>
                                        Not logged in yet?
                                    </p>
                                    <IonButton onClick={handleClick} fill="clear">SignUp</IonButton>
                                </div>
                            </form>
                        </div>
                        <div style={{ flexGrow: 1 }} />
                    </div>
                    <div style={{ flexGrow: 1 }} />
                </div>
            </IonContent>
            <IonToast
                isOpen={showToast}
                color='primary'
                onDidDismiss={() => { setToastMessage(""); setShowToast(false) }}
                message={toastMessage}
                duration={2000}
            />
    </IonPage>
    );
}

export default Connexion;