import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import PreLoader from "./layouts/preloader/Index";

import "./App.css";

const Home1 = lazy(() => import("./pages/home-1"));
const Home2 = lazy(() => import("./pages/home-2"));
const Projects = lazy(() => import("./pages/projects"));
const Projects2 = lazy(() => import("./pages/projects-2"));
const Projects3 = lazy(() => import("./pages/projects-3"));
const Projects4 = lazy(() => import("./pages/projects-4"));
const Projects5 = lazy(() => import("./pages/projects-5"));
const Services = lazy(() => import("./pages/services"));
const ServiceDetails = lazy(() => import("./pages/serviceDetails"));
const Contact = lazy(() => import("./pages/contact"));
const Story = lazy(() => import("./pages/story"));
const E404 = lazy(() => import("./pages/404"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PreLoader />}>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/home-2" element={<Home2 />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-2" element={<Projects2 />} />
          <Route path="/projects-3" element={<Projects3 />} />
          <Route path="/projects-4" element={<Projects4 />} />
          <Route path="/projects-5" element={<Projects5 />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/projects/:id" element={<ProjectDetail />} />
           */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/story" element={<Story />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
