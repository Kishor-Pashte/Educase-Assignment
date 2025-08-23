import App from "./App.jsx";
import { Routes, Route, BrowserRouter } from "react-router";
import {Registration, Login, Home, AcountSettings} from "./pages"


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Registration />} />
          <Route path="profile" element={<AcountSettings />} />
          <Route path="*" element={<div>Not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}