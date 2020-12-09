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
import { cameraOutline, cloudUploadOutline } from "ionicons/icons";
import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

const Report: React.FC = (props: any) => {
  const [text, setText] = useState<string>();
  const [frontPhoto, setFrontPhoto] = useState(false);
  const [backPhoto, setBackPhoto] = useState(false);
  const [labelPhoto, setLabelPhoto] = useState(false);
  const [showDoneMsg, setShowDoneMsg] = useState(false);

  const handleSubmit = () => {
    setShowDoneMsg(true);

    setTimeout(() => {
      setShowDoneMsg(false);
      props.history.replace("/scan");
    }, 2000);
  };

  const handleFrontPhoto = async () => {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    setFrontPhoto(true);
  }

  const handleBackPhoto = async () => {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    setBackPhoto(true);
  }

  const handleLabelPhoto = async () => {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri, 
      source: CameraSource.Camera, 
      quality: 100 
    });
    setLabelPhoto(true);
  }

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
          // cssClass="my-custom-class"
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
          <IonButton color={frontPhoto? "success" : "dark"} className="picture-button" onClick={handleFrontPhoto}>
            <IonIcon slot="start" icon={cameraOutline} />
            Picture front
          </IonButton>
          {/* { frontPhoto? "Front picture taken" : null} */}
          <IonButton color={backPhoto? "success" : "dark"} className="picture-button" onClick={handleBackPhoto}>
            <IonIcon slot="start" icon={cameraOutline} />
            Picture back
          </IonButton>
          <IonButton color={labelPhoto? "success" : "dark"} className="picture-button" onClick={handleLabelPhoto}>
            <IonIcon slot="start" icon={cameraOutline} />
            Picture label
          </IonButton>
          <IonButton className="report-button" onClick={handleSubmit}>
          <IonIcon slot="start" icon={cloudUploadOutline} />
            Send to company
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Report;
