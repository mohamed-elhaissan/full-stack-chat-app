import { Route, Routes } from "react-router";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import Loader from "./components/required-componants/anaimation/Loader.jsx";
import { LoaderCtx } from "./context/LoaderProvider.jsx";

function App() {
  const { isLoading } = useContext(LoaderCtx);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader/>}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
