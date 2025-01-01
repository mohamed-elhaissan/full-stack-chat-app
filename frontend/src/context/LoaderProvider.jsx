import {createContext, useState} from "react";

/* eslint-disable react/prop-types */
const LoaderCtx = createContext();

const LoaderProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <LoaderCtx.Provider value={{isLoading, setIsLoading}}>{children}</LoaderCtx.Provider>
    )
}
export default LoaderProvider;