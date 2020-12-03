import React, { useState } from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonText,
  IonButton,
  IonItem,
  IonTextarea,
  IonLabel,
  IonIcon,
} from "@ionic/react";
import "./Report.css";
import { cameraOutline } from "ionicons/icons";

const Report: React.FC = () => {
  const [text, setText] = useState<string>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/scan" />
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="report-wrapper">
          <IonTitle>Product not found</IonTitle>
          <IonText className="ion-margin-top">Please fill in details</IonText>
          {/* <IonTitle className="ion-margin-top">Ingredients</IonTitle> */}
          <IonItem className="description">
            <IonLabel position="floating">Description</IonLabel>
            <IonTextarea  value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonButton color="dark" className="picture-button" routerLink="/menu">
          <IonIcon slot="start" icon={cameraOutline} />Picture front
          </IonButton>
          <IonButton color="dark" className="picture-button" routerLink="/menu">
          <IonIcon slot="start" icon={cameraOutline} />Picture back
          </IonButton>
          <IonButton color="dark" className="picture-button" routerLink="/menu">
          <IonIcon slot="start" icon={cameraOutline} />Picture label
          </IonButton>
          <IonButton className="report-button" routerLink="/menu">
            Send to better life food
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Report;
