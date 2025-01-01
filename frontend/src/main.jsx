import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import {BrowserRouter} from "react-router";
import LoaderProvider from "./context/LoaderProvider.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LoaderProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </LoaderProvider>
    </StrictMode>,
)
