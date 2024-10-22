import React from "react";
import Home from "./components/home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import AllDeals from "./components/allDeals";
import TermsAndConditions from "./components/termsAndConditions";
import PrivacyPolicy from "./components/privacyPolicy";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/alldeals" element={<AllDeals />} />
          <Route exact path="/terms" element={<TermsAndConditions />} />
          <Route exact path="/policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
