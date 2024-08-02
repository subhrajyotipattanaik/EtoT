import {BrowserRouter, Routes, Route} from "react-router-dom";
import{ Home} from "./pages/Home.jsx";

const app = () => {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
    );
};

export default app;