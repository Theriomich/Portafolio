import "./App.css";
import Subtitle from "./Components/Home/SubTitle";
import Header from "./Components/Home/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import AboutMe from "./Components/Aboutme/Aboutme";
import Proyects from "./Components/Proyects/Proyects";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header title="Portafolio" />,
    },
    { path: "/About/", element: <AboutMe /> },
    { path: "/Contact/", element: <Contact /> },
    { path: "/Proyects/", element: <Proyects /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
