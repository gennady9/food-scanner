import React, { useContext } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Menu.css";
import { AppContext } from "../App";
import { trash } from "ionicons/icons";

const Menu: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleDelete = () => {
    dispatch({
        type: 'setLastScanned',
        last_scanned: []
      })
  }

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
          <IonList className="list-styling">
            <IonListHeader>
              <IonTitle>Last product scans</IonTitle>
            </IonListHeader>

            {state.last_scanned.map((item: number, indx: number) => (
              <IonItem key={indx}>
                <IonLabel>{item}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>

        <IonFab vertical="top" horizontal="end" edge slot="fixed">
          <IonFabButton onClick={handleDelete}>
            <IonIcon icon={trash} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Menu;
