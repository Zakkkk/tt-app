import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import Tasks from "./routes/Tasks/Tasks.tsx";
import Calendar from "./routes/Calendar/Calendar.tsx";
import Profile from "./routes/Profile/Profile.tsx";
import Log from "./routes/Log/Log.tsx";

const App: React.FC = () => {
  return (
    <div className={"sm:select-none-doesnt-work h-screen prose-invert text-slate-400 bg-slate-900"}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tasks" element={<Tasks />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/log" element={<Log />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
