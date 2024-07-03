import { Route, Routes } from "react-router-dom";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import ChatFrame from "./Pages/chatFrame/ChatFrame";
import InfoUser from "./Components/infoUser/InfoUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/chat" element={<ChatFrame />} />
        <Route path="/info" element={<InfoUser />} />
      </Routes>
    </div>
  );
}

export default App;
