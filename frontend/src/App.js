import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home/Home";
import "./App.css";

const ApodViewer = lazy(() => import("./components/pages/Apod/ApodViewer"));
const MarsViewer = lazy(() => import("./components/pages/Mars/MarsViewer"));
const EpicViewer = lazy(() => import("./components/pages/Epic/EpicViewer"));
const NeoViewer = lazy(() => import("./components/pages/Neo/NeoViewer"));
const MediaSearch = lazy(() => import("./components/pages/MediaSearch/MediaSearch"));

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 text-light">
        <div className="space-bg flex-grow-1 d-flex flex-column">
          <Header />

          <main className="flex-grow-1 container py-3 position-relative z-1">
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apod" element={<ApodViewer />} />
                <Route path="/mars" element={<MarsViewer />} />
                <Route path="/epic" element={<EpicViewer />} />
                <Route path="/neo" element={<NeoViewer />} />
                <Route path="/search" element={<MediaSearch />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
