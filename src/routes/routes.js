import { Routes, Route } from "react-router-dom";

import { Main } from "../pages/Main";
import { Search } from "../pages/Search";
import { Result } from "../pages/Result";

export function Router() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Result" element={<Result />} />
    </Routes>
  );
}
