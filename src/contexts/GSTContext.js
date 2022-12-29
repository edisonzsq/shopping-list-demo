import {createContext} from "react";

export const GSTContext = createContext();

export const GSTContextComponent = ({children}) => {

    const getGst = () => {
        // This function should call a backend service to determine a dynamic GST value
        return 0.11;
    }

    return(
        <GSTContext.Provider value={getGst}>
            {children}
        </GSTContext.Provider>
    )

}