import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./User/User";
import Dashboard from "./Dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/*" element={<User />}></Route>
        <Route path="/dashboard/*" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
