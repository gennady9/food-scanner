import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonItem,
  IonButton,
  IonImg,
  IonInput,
} from "@ionic/react";
import "./Home.css";
// import { pin, wifi, wine, warning, walk } from "ionicons/icons";

const Tab1: React.FC = () => {
  const [vendorID, setVendorID] = useState<number>();

  return (
    <IonPage>
      {/* <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
          
        </IonToolbar>
      </IonHeader> */}

      {/* <IonMenu side="start" menuId="custom" contentId="content" className="my-custom-menu">
      <IonHeader>
        <IonToolbar color="tertiary">
          <IonTitle>Custom Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent id="content">
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu> */}

      <IonContent>
        <div className="wrapper">
          <IonImg className="logo-img" src="assets/better-life_logo_3.png" />
          <IonTitle>Barcode scanner</IonTitle>
          <IonItem>
            <IonInput
              className="text-input"
              type="number"
              value={vendorID}
              placeholder="Enter vendor ID"
              onIonChange={(e) =>
                setVendorID(parseInt(e.detail.value!, 10))
              }
            ></IonInput>
          </IonItem>
          <IonButton className="login-button" routerLink="/menu">
            SIGN IN
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
