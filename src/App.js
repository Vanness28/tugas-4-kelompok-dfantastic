import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Restaurant from "./pages/Restaurant";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/destination" element={<Destination/>}/>
      <Route path="/restaurant" element={<Restaurant/>}/>
    </Routes>
  );
}

export default App;