import {useContext} from "react";
import {GSTContext} from "../contexts/GSTContext";
 
const Bill = ({totalPrice}) => {

    const getGst = useContext(GSTContext);

    return(
        <div id="billContainer">
            <div id="totalPrice">Total Price: <span style={{paddingLeft:"10px"}}>${totalPrice}</span></div>
            <div id="gst">GST: <span style={{paddingLeft:"10px"}}>{getGst()}%</span></div>
            <div id="payable">Payable: <span style={{paddingLeft:"10px"}}>${totalPrice + (totalPrice * getGst())}</span></div>
        </div>
    )
}

export default Bill;