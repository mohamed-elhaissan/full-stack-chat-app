import { Route, Routes } from "react-router";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import Loader from "./components/required-componants/anaimation/Loader.jsx";
import { LoaderCtx } from "./context/LoaderProvider.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import NotFound from "./components/NotFound.jsx";
import TalkZone from "./components/TalkZone.jsx";

function App() {
  const { isLoading } = useContext(LoaderCtx);
  return (
    <>
      {isLoading && <Loader />}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<TalkZone />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
