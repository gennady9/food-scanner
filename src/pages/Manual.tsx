import React, { useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Manual.css";

const Manual: React.FC = () => {
  const [barcodeNum, setBarcodeNum] = useState<number>();

  const handleClick = (e : any) => {
    // Fetching item
    console.log(e);
  }

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
        <div className="manual-wrapper">
          <IonTitle>Type barcode</IonTitle>
          <IonImg className="barcode-img" src="assets/barcode.png" />
          <IonItem>
            <IonInput
              className="text-input"
              type="number"
              value={barcodeNum}
              placeholder="Enter barcode"
              onIonChange={(e) => setBarcodeNum(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>
          <IonButton onClick={(e) => handleClick(e)}>Submit</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Manual;
