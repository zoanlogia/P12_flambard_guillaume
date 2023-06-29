import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "@/App.jsx";
import Error from "@/pages/Error.jsx";

/* The code is defining a functional component called `Router`. This component is responsible for
setting up the routing configuration for a React application using the `react-router-dom` library. */
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
