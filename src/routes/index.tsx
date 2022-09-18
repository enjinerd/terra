import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, NotFound } from "pages/public";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
