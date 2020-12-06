import React from "react";
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
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import "./Scan.css";

const Scan: React.FC = (props: any) => {

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    if(data.text){
      props.history.push(`/fetch/${data.text}`);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/menu"/>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle className="ion-text-center ion-margin-top">Scan a Barcode</IonTitle>
        <IonImg className="phone-img" src="assets/phone.png" onClick={openScanner}/>

        <div className="scan-wrapper">
          <IonButton className="ion-text-center" color="light" routerLink="/manual"> Type barcode manually</IonButton>
        </div>
        
        <IonFab vertical="center" horizontal="center" slot="fixed">
          <IonFabButton color="light" onClick={openScanner}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Scan;
