import React, { useContext } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Menu.css";
import { AppContext } from '../App';
import { barcodeOutline, layersOutline, personCircleOutline } from "ionicons/icons";

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
          <IonText>Vendor id ---</IonText>
          <IonImg className="logo-img ion-margin-top" src="assets/barcode-scan.webp" />
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

          {/* <IonList className="list-styling">
          <IonListHeader>
          <IonTitle>Last product scans</IonTitle>
          </IonListHeader>
            <IonItem>
              <IonLabel>{state.last_scanned[0]}</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>French fries</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Snickers 320g</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Coca-cola 0.5L</IonLabel>
            </IonItem>
          </IonList> */}


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
