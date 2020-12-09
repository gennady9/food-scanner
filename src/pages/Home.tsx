import React, { useContext, useState } from "react";
import {
  IonContent,
  IonPage,
  IonTitle,
  IonItem,
  IonButton,
  IonImg,
  IonInput,
  IonToast,
  IonLabel,
} from "@ionic/react";
import "./Home.css";
import { AppContext } from "../App";

const Tab1: React.FC = (props: any) => {
  const [vendorId, setVendorID] = useState<string>("");
  const { state, dispatch } = useContext(AppContext);
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (vendorId) {
      dispatch({
        type: "setVendorId",
        vendor_id: vendorId,
      });
      props.history.replace("/menu");
    } else {
      setShowError(true);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <div className="wrapper">
          <IonImg className="logo-img" src="assets/better-life_logo_3.png" />
          <IonTitle>Barcode scanner</IonTitle>
          <IonLabel className="ion-margin-top">Please enter vendor id</IonLabel>
          <IonItem>
            <IonInput
              className="text-input"
              type="number"
              value={vendorId}
              placeholder="Vendor id"
              onIonChange={(e) => setVendorID(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonButton
            className="login-button"
            onClick={handleLogin}
            expand="round"
          >
            SIGN IN
          </IonButton>
        </div>
        <IonToast
          isOpen={showError}
          onDidDismiss={() => setShowError(false)}
          message="Vendor id can't be empty"
          position="middle"
          duration={2000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
