import React, { useContext } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Menu.css";
import { barcodeOutline, layersOutline, personCircleOutline } from "ionicons/icons";
import { AppContext } from "../App";

const Menu: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="wrapper padder">
          <IonTitle>Welcome Scanner!</IonTitle>
          <IonTitle className="ion-margin-top">Vendor: {state.vendor_id}</IonTitle>
          <IonImg className="logo-img ion-margin-top" src="assets/barcode-menu.png" />
          <IonButton
            className="scan-button"
            routerLink="/scan"
          >
            <IonIcon slot="start" icon={barcodeOutline} />
            Scan
          </IonButton>

          <IonButton
            className="menu-button"
            routerLink="/last-scanned"
          >
            <IonIcon slot="start" icon={layersOutline} />
            Scan history
          </IonButton>
          <IonButton
            className="menu-button"
            routerLink="/home"
          >
            <IonIcon slot="start" icon={personCircleOutline} />
            Change vendor Id
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

// document.addEventListener('ionBackButton', (ev : any) => {
//   ev.detail.register(10, () => {
//     Plugins.App.exitApp();
//   });
// });

export default Menu;
