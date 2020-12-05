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
  IonAlert,
} from "@ionic/react";
import "./Report.css";
import { cameraOutline } from "ionicons/icons";

const Report: React.FC = (props: any) => {
  const [text, setText] = useState<string>();
  const [showDoneMsg, setShowDoneMsg] = useState(false);

  const handleSubmit = () => {
    setShowDoneMsg(true);

    setTimeout(() => {
      setShowDoneMsg(false);
      props.history.push("/scan");
    }, 2000);
  };

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
        <IonAlert
          isOpen={showDoneMsg}
          // onDidDismiss={() => setShowAlert1(false)}
          cssClass="my-custom-class"
          header={"Thanks!"}
          subHeader={"data sent successfully."}
          message={"You will now be redirected to scan page"}
        />
        <div className="report-wrapper">
          <IonTitle>Product not found</IonTitle>
          <IonText className="ion-margin-top">Please fill in details</IonText>
          <IonItem className="description">
            <IonLabel position="floating">Ingredients description</IonLabel>
            <IonTextarea
              value={text}
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonTextarea>
          </IonItem>
          <IonButton color="dark" className="picture-button" routerLink="/menu">
            <IonIcon slot="start" icon={cameraOutline} />
            Picture front
          </IonButton>
          <IonButton color="dark" className="picture-button" routerLink="/menu">
            <IonIcon slot="start" icon={cameraOutline} />
            Picture back
          </IonButton>
          <IonButton color="dark" className="picture-button" routerLink="/menu">
            <IonIcon slot="start" icon={cameraOutline} />
            Picture label
          </IonButton>
          <IonButton className="report-button" onClick={handleSubmit}>
            Send to better life food
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Report;
