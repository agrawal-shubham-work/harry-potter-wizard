import { Suspense, lazy } from "react";
import "./App.scss";
import RouterComponent from "./router/Router";

const ErrorBoundary = lazy(() => import("./pages/error"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary>
        <RouterComponent />
      </ErrorBoundary>
    </Suspense>
  );
}

export default App;
