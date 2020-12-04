import React from "react";
import {
  IonButton,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
} from "@ionic/react";
import "./Menu.css";

const Menu: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome [Vendor Name]</IonTitle>
        </IonToolbar>
      </IonHeader> */}
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

export default Menu;
