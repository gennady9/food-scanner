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
  IonToast,
  IonToolbar,
} from "@ionic/react";
import "./Manual.css";

const Manual: React.FC = (props: any) => {
  const [barcodeNum, setBarcodeNum] = useState<string>('');
  const [showError, setShowError] = useState(false);

  // useEffect(() => {
  //   setBarcodeNum('');
  // }, []);

  

  const handleSubmit = () => {
    if (barcodeNum) {
      let targetUrl = `/fetch/${parseInt(barcodeNum, 10)}`;
      setBarcodeNum('');
      props.history.replace(targetUrl);
    } else {
      setShowError(true);
    }
  };
  // routerLink={`/fetch/${parseInt(barcodeNum, 10)}`}

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
          <IonButton type="submit" onClick={handleSubmit}>Submit</IonButton>
        </div>
        <IonToast
          isOpen={showError}
          onDidDismiss={() => setShowError(false)}
          message="Barcode can't be empty"
          position="middle"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Manual;
