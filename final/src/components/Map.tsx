import React, { useContext, useState } from 'react'
import AppContext , {Profile, Photo} from "../data/app-context";
import {
    GoogleMapProvider,
    HeatMap,
    InfoWindow,
    MapBox,
    Marker,
    OverlayView,
    Polygon,
  } from '@googlemap-react/core'
import { Plugins } from '@capacitor/core'
import { useIonViewDidEnter } from '@ionic/react';
import { navigate } from 'ionicons/icons';
import { usePhotoGallery } from './Camera';

const { Geolocation } = Plugins;
  

// Documentation : https://github.com/googlemap-react/googlemap-react

const MapContainer = () => {
    const appCtx = useContext(AppContext)
    const [latitude, setLatitude] = useState<number>(0)
    const [longitude, setLongitude] = useState<number>(0)
    const [all, setAll] = useState<number>(0)
    const {getPhotos } = usePhotoGallery();

    const getPosition = () => {
        Geolocation.getCurrentPosition().then(
            e => {
                setLatitude(e.coords.latitude)
                setLongitude(e.coords.longitude)
                const newProfile = {...appCtx.profile}
                newProfile.lat = latitude
                newProfile.long = longitude
                appCtx.updateProfile(newProfile)
            }
        )
    }
    
    useIonViewDidEnter(() => { 
      getPosition() 
      getPhotos().then(e => {
        setAll(1)
      })
      
    })

    return (
        <GoogleMapProvider>
            <MapBox
                apiKey="AIzaSyC509sJR-rfvKAY8Q8KCn6d5Gg_7v5Vm7c"
                opts={{
                    center: {lat: latitude, lng: longitude},
                    zoom: 14,
            }}
                style={{
                    height: '100vh',
                    width: '100%',
            }}
                useDrawing
                useGeometry
                usePlaces
                useVisualization
            />
    <Marker
      id="marker"
      opts={{
        clickable: true,
        draggable: false,
        position: {lat: latitude, lng: longitude},
      }}
      
      // onClick={ () => console.log('oui')}
    />

      {all != 0 ? appCtx.photos.map( (url, pos) => {
        console.log('oui');
        
       return (<InfoWindow
          opts={{

            content: `<img style="witdh:50px; height:50px;" src="${url}"/>`,
            position: {lat: latitude+0.001, lng: longitude+0.001},
          }}

          visible
      />)
    }): console.log('non')}

    {/* <InfoWindow
      opts={{

        content: '<img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/><img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/><img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/><img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/><img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/>',
        position: {lat: latitude+0.001, lng: longitude+0.001},
      }}

      visible
    />
    <InfoWindow
      opts={{

        content: '<img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/><img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/><img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/><img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/><img style="witdh:50px; height:50px;" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Google_Lens_-_new_logo.png"/>',
        position: {lat: latitude+0.1, lng: longitude+0.01},
      }}

      visible
    /> */}
        </GoogleMapProvider>
    )
}

export default MapContainer 