import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonImg,
  IonButtons,
  IonBackButton,
  IonButton,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import { usePhotoGallery, Photo } from "../hooks/usePhotoGallery";
import "./Scan.css";

const Scan: React.FC = () => {
  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<Photo>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg
                  onClick={() => setPhotoToDelete(photo)}
                  src={photo.webviewPath}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid> */}
        <IonTitle className="ion-text-center ion-margin-top">Scan a Barcode</IonTitle>
        <IonImg className="phone-img" src="assets/phone.png" onClick={() => takePhoto()}/>

        <div className="scan-wrapper">
          <IonButton className="ion-text-center" color="light" routerLink="/manual"> type barcode manually</IonButton>
        </div>
        
        <IonFab vertical="center" horizontal="center" slot="fixed">
          <IonFabButton color="light" onClick={() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Scan;
