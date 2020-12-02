import { useState, useEffect, useContext } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";
import firebase from '../firebase'
import "firebase/auth";
import "firebase/storage";
import AppContext , {Profile} from "../data/app-context";

import { Plugins } from '@capacitor/core'  
const { Geolocation } = Plugins;

export interface Photo {
  filepath: string;
  webviewPath?: string;
}

export interface AllPhoto {
  content: string;
}

export function usePhotoGallery() {
  const [latitude, setLatitude] = useState<number>(0)
  const [longitude, setLongitude] = useState<number>(0)
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
    
    await Geolocation.getCurrentPosition().then(
      e => {
          setLatitude(e.coords.latitude)
          setLongitude(e.coords.longitude)
          console.log(e.coords.latitude, typeof(e.coords.longitude), latitude, typeof(longitude))
      }
    )
      console.log(3, latitude, longitude);
      
    const base64 = await base64FromPath(cameraPhoto.webPath!)
    
    const db = firebase.storage().ref(appCtx.user?.uid + '/' + base64);
                
    db.putString(base64, "data_url")
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
    setToastShow,
    latitude,
    longitude
  };
}