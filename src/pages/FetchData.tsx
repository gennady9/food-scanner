import React, { useContext, useEffect } from "react";
// import { IonLoading } from "@ionic/react";
import { Redirect } from "react-router-dom";
import { AppContext } from '../App';

const FetchData: React.FC = (props: any) => {
  const tempFound = true;
  const barcodeNumber = props.match.params.id;
  const { state, dispatch } = useContext(AppContext);
  // TODO maybe add spinning icon while trying to fetch data
//   const [showLoading, setShowLoading] = useState(true);

//   setTimeout(() => {
//     setShowLoading(false);
//   }, 2000);

  useEffect(() => {
    // if(state.last_scanned.length >= 4){

    // }
    dispatch({
      type: 'setLastScanned',
      last_scanned: [567]
    })
  }, []);



  return tempFound ? (
    <Redirect to={`/display/${barcodeNumber}`} />
  ) : (
    <Redirect to={`/report/${barcodeNumber}`} />
  );
};

export default FetchData;

// <>
//   <IonLoading
//     cssClass="my-custom-class"
//     isOpen={showLoading}
//     onDidDismiss={() => console.log("loading ended")}
//     message={"Please wait..."}
//     duration={5000}
//   />
// </>
