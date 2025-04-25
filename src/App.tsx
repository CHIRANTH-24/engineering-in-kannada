import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CoursePage } from "./pages/CoursePage";
import { LeaderboardPage } from "./pages/LeaderboardPage";
import BackToTop from "./components/BackToTop";
import {Blogs} from './components/Blogs';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<HomePage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogPost />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
