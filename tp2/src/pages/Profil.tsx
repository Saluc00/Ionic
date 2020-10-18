import { IonApp, IonButton, IonContent, IonImg, IonInput, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import React, { useState } from 'react';
import Menu from '../components/Menu'
import profilData from '../data/profilData'

interface ContainerProps { }

const Profil: React.FC<ContainerProps> = () => {
       const [nom, setNom] = useState<string>();
       const [photo, setPhoto] = useState<string>();
       const [apport, setApport] = useState<string>();
       const [tauxEmprunt, setTauxEmprunt] = useState<string>();
       const [tauxAssurance, setTauxAssurance] = useState<string>();
       const [dureeEmprunt, setDureeEmprunt] = useState<string>();
       const [fraisNotaire, setFraisNotaire] = useState<string>();
       const modifierProfil = () => {              
              typeof(nom) == 'string' ? profilData.nom = nom : profilData.nom = profilData.nom
              typeof(photo) == 'string' ? profilData.img = photo : profilData.img = profilData.img
              typeof(apport) == 'string' ? profilData.apport = apport : profilData.apport = profilData.apport
              typeof(tauxEmprunt) == 'string' ? profilData.tauxEmprunt = tauxEmprunt : profilData.tauxEmprunt = profilData.tauxEmprunt
              typeof(tauxAssurance) == 'string' ? profilData.tauxAssurance = tauxAssurance : profilData.tauxAssurance = profilData.tauxAssurance
              typeof(dureeEmprunt) == 'string' ? profilData.tempsEmprunt = dureeEmprunt : profilData.tempsEmprunt = profilData.tempsEmprunt
              typeof(fraisNotaire) == 'string' ? profilData.fraisNotaire = fraisNotaire : profilData.fraisNotaire = profilData.fraisNotaire
       }
  return (
       <IonApp>
       <Menu />
       <IonContent>
       <IonList>
              <IonItem>
                     <IonImg src={`assets/${profilData.img}`} />
                     <IonLabel>{profilData.nom}</IonLabel>
              </IonItem>
              <IonItem>
                     <IonLabel position="stacked">Nom</IonLabel>
                     <IonInput value={nom} placeholder={profilData.nom} onIonChange={e => setNom(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                     <IonLabel position="stacked">Photo de profil</IonLabel>
                     <IonInput value={photo} placeholder={profilData.img} onIonChange={e => setPhoto(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                     <IonLabel position="stacked">Apport</IonLabel>
                     <IonInput value={apport} placeholder={profilData.apport} onIonChange={e => setApport(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                     <IonLabel position="stacked">Taux emprunt</IonLabel>
                     <IonInput value={tauxEmprunt} placeholder={profilData.tauxEmprunt} onIonChange={e => setTauxEmprunt(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                     <IonLabel position="stacked">Taux assurance</IonLabel>
                     <IonInput value={tauxAssurance} placeholder={profilData.tauxAssurance} onIonChange={e => setTauxAssurance(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                     <IonLabel position="stacked">Durée de l'emprunt</IonLabel>
                     <IonInput value={dureeEmprunt} placeholder={profilData.tempsEmprunt} onIonChange={e => setDureeEmprunt(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem>
                     <IonLabel position="stacked">Frais de notaire</IonLabel>
                     <IonInput value={fraisNotaire} placeholder={profilData.fraisNotaire} onIonChange={e => setFraisNotaire(e.detail.value!)}></IonInput>
              </IonItem>
              
       <IonButton expand="full" onClick={() => modifierProfil()}>Ajouter Appartement</IonButton>
       </IonList>
     </IonContent>
       </IonApp>  
  );
};

export default Profil;
