import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications";
import Questions from "./pages/Questions";
import Skills from "./pages/Skills";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="applications" element={<Applications />} />
          <Route path="questions" element={<Questions />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;