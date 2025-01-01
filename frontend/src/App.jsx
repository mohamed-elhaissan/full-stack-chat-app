import { Route, Routes } from "react-router";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { AnimatePresence } from "framer-motion";


function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
