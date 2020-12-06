import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonItem,
  IonButton,
  IonImg,
  IonInput,
} from "@ionic/react";
import "./Home.css";

const Tab1: React.FC = () => {
  const [vendorID, setVendorID] = useState<string>('');

  return (
    <IonPage>
      <IonContent>
        <div className="wrapper">
          <IonImg className="logo-img" src="assets/better-life_logo_3.png" />
          <IonTitle>Barcode scanner</IonTitle>
          <IonItem>
            <IonInput
              className="text-input"
              type="number"
              value={vendorID}
              placeholder="Enter vendor ID"
              onIonChange={(e) =>
                setVendorID(e.detail.value!)
              }
            ></IonInput>
          </IonItem>
          <IonButton className="login-button" routerLink="/menu">
            SIGN IN
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
