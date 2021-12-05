import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./User/User";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/*" element={<User />}></Route>
        <Route path="/dashboard/*" element={<div>dashboard</div>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
