import React, { useContext, useEffect, useState } from "react";
// import { IonLoading } from "@ionic/react";
import { Redirect } from "react-router-dom";
import { AppContext } from "../App";
import { getProductInfo } from "../api-hide";
import { IonLoading } from "@ionic/react";

const FetchData: React.FC = (props: any) => {
  const tempFound = true;
  const barcodeNumber = props.match.params.id;
  const { state, dispatch } = useContext(AppContext);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // adding barcode to last scanned
    let updated_last_scanned = state.last_scanned;
    if (state.last_scanned.length >= 8) {
      updated_last_scanned.pop();
    }
    updated_last_scanned.unshift(barcodeNumber);
    dispatch({
      type: "setLastScanned",
      last_scanned: updated_last_scanned
    });

    // fetching data from api
    async function fetchData(this: any){
      let response = await getProductInfo(barcodeNumber);
      if(response.data){
        let { name, category, ingredients, allergenOverview, productCodes } = response.data;
        let productDetails = {
          name,
          category,
          ingredients,
          allergenOverview,
          productCodes,
          barcode: barcodeNumber
        }
        dispatch({
          type: "setCurrentProduct",
          productDetails
        });
        setShowLoading(false);
        props.history.replace(`/display/${barcodeNumber}`);
      }else{
        props.history.replace(`/report/${barcodeNumber}`);
      }
      console.log(response);
    }

    fetchData();

    // let productInfo = getProductInfo(barcodeNumber);
    // // console.log(productInfo.data);
    // if(productInfo && productInfo.data){
    //   // found product
    //   console.log("found")
    //   // props.history.replace(`/fetch/${data.text}`);
    // }else{
    //   // failed to fetch
    //   console.log("not found")
    // }
    // // console.log(FetchAPI());


  }, [barcodeNumber]);

  return ( 
<>
  <IonLoading
    cssClass="my-custom-class"
    isOpen={showLoading}
    onDidDismiss={() => console.log("loading ended")}
    message={"Loading product"}
    // duration={10000}
  />
</>)
  // return tempFound ? (
  //   <Redirect to={`/display/${barcodeNumber}`} />
  // ) : (
  //   <Redirect to={`/report/${barcodeNumber}`} />
  // );
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
