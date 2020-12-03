import React, { useState } from "react";
import { IonLoading } from "@ionic/react";
import { Redirect } from "react-router-dom";

const FetchData: React.FC = (props: any) => {
  const tempFound = true;
  const barcodeNumber = props.match.params.id;
  // TODO maybe add spinning icon while trying to fetch data
//   const [showLoading, setShowLoading] = useState(true);

//   setTimeout(() => {
//     setShowLoading(false);
//   }, 2000);

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
