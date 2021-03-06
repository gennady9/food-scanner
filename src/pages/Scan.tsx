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
  IonToast,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import "./Scan.css";

const Scan: React.FC = (props: any) => {
  const [showError, setShowError] = useState(false);
  const openScanner = async () => {
    try{
      const data = await BarcodeScanner.scan();
      if(data.text){
        props.history.replace(`/fetch/${data.text}`);
      }
    } catch(e) {
      setShowError(true);
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

        <IonToast
          isOpen={showError}
          onDidDismiss={() => setShowError(false)}
          message="Camera scanning only available in mobile version."
          position="middle"
          duration={4000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Scan;
