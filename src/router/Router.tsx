import { FC, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "../layout/Layout";
const Home = lazy(() => import("../pages/home"));

const RouterComponent: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default RouterComponent;
