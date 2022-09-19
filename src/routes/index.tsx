import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from "pages/public";
import { Login } from "pages/public/auth";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
