import React, { createContext, useEffect, useReducer } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Menu from "./pages/Menu";
import Scan from "./pages/Scan";
import Manual from "./pages/Manual";
import Home from "./pages/Home";
import Report from "./pages/Report";
import FetchData from "./pages/FetchData";
import Display from "./pages/Display";
import LastScanned from "./pages/LastScanned";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Global CSS */
import "./global.css";
import { useLocalStorage } from './useLocalStorage';

localStorage.clear(); // TODO: remove before deploy

const initialState = {
  last_scanned: [12,34,56,78]
}
export const AppContext = React.createContext(initialState as any);

const reducer = (state : any, action : any) => {
  if (action.type === 'setLastScanned') {
    return { ...state, last_scanned: action.last_scanned }
  }
  return state;
}

const AppContextProvider = (props : any) => {
  const [data, setData ] = useLocalStorage('data', initialState);
  let [state, dispatch] = useReducer(reducer, data);

  let value = { state, dispatch };

  useEffect(() => {
    setData(state);
  }, [state, setData]);


  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

const App: React.FC = () => (
  <IonApp>
    <AppContextProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/menu" component={Menu} exact={true} />
          <Route path="/scan" component={Scan} exact={true} />
          <Route path="/last-scanned" component={LastScanned} exact={true} />
          <Route path="/manual" component={Manual} exact={true} />
          <Route path="/fetch/:id" component={FetchData} />
          <Route path="/fetch" component={FetchData} />
          <Route path="/display/:id" component={Display} />
          <Route path="/display" component={Display} />
          <Route path="/report/:id" component={Report} />
          <Route path="/report" component={Report} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
      </IonReactRouter>
    </AppContextProvider>
  </IonApp>
);

export default App;
