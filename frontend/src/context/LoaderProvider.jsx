import {createContext, useState} from "react";

/* eslint-disable react/prop-types */
export const LoaderCtx = createContext();

const LoaderProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <LoaderCtx.Provider value={{isLoading, setIsLoading}}>{children}</LoaderCtx.Provider>
    )
}
export default LoaderProvider;