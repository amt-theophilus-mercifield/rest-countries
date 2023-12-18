import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Countries } from "./components/Countries";
import { Header } from "./components/Header";
import { Error } from "./components/Error";
import { SingleCountry } from "./components/SingleCountry";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/:name" element={<SingleCountry />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
