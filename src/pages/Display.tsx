import React, { useContext } from "react";
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
import { AppContext } from "../App";

const Display: React.FC = (props : any) => {
  const { state, dispatch } = useContext(AppContext);
  let { name, category, ingredients, allergenOverview, productCodes } = state.productDetails;
  // console.log(ingredients);
  let barcodeType = productCodes[0].type;
  const tempImage = ''; //"assets/placeholder.png";
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
        <IonTitle>Category: {category}</IonTitle>
          <IonTitle>{name}</IonTitle>
          { tempImage? <IonImg
            className="product-img"
            src={tempImage}
          /> : null}
          <IonText className="ion-margin-top">Barcode type:{barcodeType ? barcodeType : "----"}</IonText>
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
            Suggest a fix
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
