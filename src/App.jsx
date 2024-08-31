import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import ErrorPage from "./Components/ErrorPage";
import "./styles/Main.scss";
import Faqs from "./Pages/Faqs";
import Pricings from "./Pages/Pricings";
import Contacts from "./Pages/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/pricing" element={<Pricings />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
