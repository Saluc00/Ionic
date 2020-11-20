import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import "firebase/auth";
import "firebase/firestore";
import AppContext from "../data/app-context";
import { IonAlert, IonButton, IonContent, IonInput, IonItem, IonLabel, IonList, IonPage, IonToast } from "@ionic/react";

interface FormItems {
  username: string;
  email: string;
  password: string;
}
const SignUp = () => {
  const appCtx = useContext(AppContext);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [showToast, setShowToast] = useState<boolean>(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  } as FormItems);

  const history = useHistory();
  const handleClick = () => {
    history.push('login')
  }

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    console.log(values, 'values');
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential: firebase.auth.UserCredential) => {
        appCtx.setUser(userCredential);
        const db = firebase.firestore();
        db.collection("Users")
          .doc(userCredential.user!.uid)
          .set({
            email: values.email,
            username: values.username
          })
          .then(() => {
            setShowToast(true)
          })
          .catch(error => {
            setErrorMessage(error.message)
            setShowAlert(true)
          });
      })
      .catch(error => {
        setErrorMessage(error.message)
        setShowAlert(true)
      });
  }

  const handleChange = (event: CustomEvent) => {
    const tar = (event.target as HTMLInputElement)
    setValues(values => ({
      ...values,
      [tar.name]: tar.value
    }));
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <div style={{ flexGrow: 1 }} />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flexGrow: 1 }} />
            <div style={{ textAlign: 'center' }}>
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <IonList>
                  <IonItem>
                    <IonLabel position="floating">Username</IonLabel>
                    <IonInput type="text" name="username" value={values.username} onIonChange={handleChange}></IonInput>
                  </IonItem>
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
                  <IonButton expand="full" onClick={handleSubmit}>Sign Up</IonButton>
                </div>

                <div>
                  <p style={{ margin: "0", marginTop: "2em" }}>
                    Already have account?
                  </p>
                  <IonButton onClick={handleClick} fill="clear">Login</IonButton>
                </div>
                <p></p>
              </form>
            </div>
            <div style={{ flexGrow: 1 }} />
          </div>
          <div style={{ flexGrow: 1 }} />
        </div>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        header={errorMessage}
        onDidDismiss={() => { setErrorMessage(""); setShowAlert(false) }}
        buttons={[
          {
            text: 'Ok'
          }
        ]}
      />
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Your account is created."
        duration={2000}
      />
    </IonPage>
  );
}
export default SignUp;