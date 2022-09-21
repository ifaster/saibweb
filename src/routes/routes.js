import { Routes, Route } from "react-router-dom";

import { Main } from "../pages/Main";
import { Search } from "../pages/Search";
import { Result } from "../pages/Result";

export function Router() {
  return (
    <Routes>
      <Route path="/saibweb" index element={<Main />} />
      <Route path="/saibweb/Search" element={<Search />} />
      <Route path="/saibweb/Result" element={<Result />} />
    </Routes>
  );
}
