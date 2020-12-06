import React, { useEffect, useState } from "react";
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
  const [barcodeNum, setBarcodeNum] = useState<string>('');

  useEffect(() => {
    setBarcodeNum('');
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/scan"/>
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
              onIonChange={(e) => setBarcodeNum(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonButton type="submit" routerLink={`/fetch/${parseInt(barcodeNum, 10)}`}>Submit</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Manual;
