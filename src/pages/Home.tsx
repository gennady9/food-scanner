import React, { useState } from "react";
import {
  IonContent,
  IonCardContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonIcon,
  IonItem,
  IonButton,
  IonLabel,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonMenu,
  IonList,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonInput,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";
// import { logo } from "../assets/logo.svg";

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
        {/* <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol className="ion-align-self-center">ion-col</IonCol>
          </IonRow>
        </IonGrid> */}

        <div className="wrapper padder">
          <IonImg className="logo-img" src="assets/better-life_logo_3.png" />
          <IonTitle>Barcode scanner</IonTitle>
          <IonItem>
            {/* <IonLabel position="floating">Vendor ID</IonLabel> */}
            {/* <IonInput value={vendorID}></IonInput> */}
            <IonInput className="text-input" type="number" value={vendorID} placeholder="Enter vendor ID" onIonChange={e => setVendorID(parseInt(e.detail.value!, 10))}></IonInput>

          </IonItem>
          <IonButton className="login-button" routerLink="/menu">SIGN IN</IonButton>
        </div>
      </IonContent>

      {/* 
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            <IonCardTitle>Card Title</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>ion-item in a card, icon left, button right</IonLabel>
            <IonButton fill="outline" slot="end">
              View
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton fill="outline" slot="center">
              Latest scans
            </IonButton>
          </IonItem>
          <IonCardContent></IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem href="#" className="ion-activated">
            <IonIcon icon={wifi} slot="start" />
            <IonLabel>Card Link Item 1 activated</IonLabel>
          </IonItem>

          <IonItem href="#">
            <IonIcon icon={wine} slot="start" />
            <IonLabel>Card Link Item 2</IonLabel>
          </IonItem>

          <IonItem className="ion-activated">
            <IonIcon icon={warning} slot="start" />
            <IonLabel>Card Button Item 1 activated</IonLabel>
          </IonItem>

          <IonItem>
            <IonIcon icon={walk} slot="start" />
            <IonLabel>Card Button Item 2</IonLabel>
          </IonItem>
        </IonCard>
      </IonContent> */}
    </IonPage>
  );
};

export default Tab1;
