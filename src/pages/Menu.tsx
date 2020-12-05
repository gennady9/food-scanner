import React from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Menu.css";
import { Plugins, Capacitor } from "@capacitor/core";

const Menu: React.FC = () => {
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
          <IonButton
            className="scan-button"
            routerLink="/scan"
          >
            SCAN
          </IonButton>
          <IonList className="list-styling">
          <IonListHeader>
          <IonTitle>Last product scans</IonTitle>
          </IonListHeader>
            <IonItem>
              <IonLabel>Pringles</IonLabel>
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
          </IonList>
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
