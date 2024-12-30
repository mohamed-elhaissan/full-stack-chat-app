import {Route, Routes} from "react-router";
import Login from "./components/Login.jsx";


function App() {


    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />

            </Routes>
        </>
    )
}

export default App
