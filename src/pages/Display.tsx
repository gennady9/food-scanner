import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonButton,
  IonImg,
  IonText,
  IonLabel,
  IonList,
  IonIcon,
} from "@ionic/react";
import "./Display.css";
import { alertCircleOutline, arrowBackCircleOutline, barcodeOutline } from "ionicons/icons";

const Display: React.FC = (props : any) => {
  // const tempImage = "https://via.placeholder.com/200x150?text=Image+Not+Found";
  const tempImage = "assets/placeholder.png";

  const imgPlaceholder =
    "https://via.placeholder.com/200x150?text=Image+Not+Found";
  //console.log(props.match.params.id);
  const barcodeNumber = props.match.params.id;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/menu" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="display-wrapper">
          <IonTitle>Product name</IonTitle>
          <IonImg
            className="product-img"
            src={tempImage ? tempImage : imgPlaceholder}
          />
          <IonText>Barcode type: ----</IonText>
          <IonText>Barcode: {barcodeNumber ? barcodeNumber : "----"}</IonText>
          <IonTitle className="ion-margin-top">Ingredients</IonTitle>
          <IonList>
            <IonItem>
              <IonLabel>Main Ingredient (35%)</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Secret Ingredient (14%)</IonLabel>
            </IonItem>
          </IonList>
          <IonButton className="display-button ion-margin-top" routerLink="/scan">
          <IonIcon slot="start" icon={barcodeOutline} />
          Scan another barcode
          </IonButton>
          <IonButton className="display-button" routerLink={`/report/${barcodeNumber}`}>
          <IonIcon slot="start" icon={alertCircleOutline} />
            Contact us
          </IonButton>
          <IonButton className="display-button" routerLink="/menu">
          <IonIcon slot="start" icon={arrowBackCircleOutline} />
            Back to menu
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Display;
