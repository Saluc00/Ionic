import { useState, useEffect, useContext } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform, useIonViewDidEnter } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

import firebase from '../firebase'
import "firebase/auth";
import "firebase/firestore";

import AppContext , {Profile} from "../data/app-context";

export interface Photo {
  filepath: string;
  webviewPath?: string;
}

export interface AllPhoto {
  content: string;
}

export function usePhotoGallery() {
  const appCtx = useContext(AppContext) 
  const [toastShow, setToastShow] = useState(false)
  const [toastMessage, setToastMessage] = useState<string>()
  const [photos, setPhotos] = useState<Photo[]>([]);
  const { getPhoto } = useCamera();  
         
  const takePhoto = async () => {
    const cameraPhoto = await getPhoto({
            quality: 60,
            resultType: CameraResultType.Uri,
            source: CameraSource.Prompt,
            width: 500,
    });
    
    const base64 = await base64FromPath(cameraPhoto.webPath!)
    
    const db = firebase.firestore();
                
    db.collection("Photos").doc(appCtx.user?.uid).collection('images').add({
      content: base64,
    })
    .then(() => {
      setToastMessage('Picture saved!')
      setToastShow(true)
    })
    .catch(()=> {
      setToastMessage('Can\'t send this picture')
      setToastShow(true)
    })

    const fileName = new Date().getTime() + '.jpeg';
    const newPhotos = [{
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    }, ...photos];
    console.log(newPhotos);
    setPhotos(newPhotos)    
  };

  return {
    photos,
    takePhoto,
    toastShow,
    toastMessage,
    setToastMessage,
    setToastShow
  };
}