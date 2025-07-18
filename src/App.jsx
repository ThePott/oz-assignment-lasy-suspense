import { lazy, Suspense } from "react";
import "./App.css";
// import TestComponent from "./TestComponent";

const TestComponent = lazy(() => import("./TestComponent"))

const App = () => {
  return (
    <div className="App">
      <h1>
        lazy와 Suspense
        <br /> 사용해보기
      </h1>
      <Suspense fallback={<h1>... 로딩 중 ...</h1>}>
        <TestComponent />
      </Suspense>
    </div>
  );
}

export default App;
