import React from 'react';
import coursesData from '../data/courses.json';
import { CourseCard } from '../components/CourseCard';
import { GraduationCap } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MotivationalQuote } from '../components/MotivationalQuote';
import { Course } from '../types';

export function HomePage() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3">
            <GraduationCap className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Engineering in Kannada
            </h1>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            ಎಲ್ಲರಿಗೂ ಉತ್ತಮ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣ. Quality technical education in Kannada, 
            accessible to everyone. Start your learning journey today with our 
            carefully curated content.
          </p>
        </div>

        <div className="mt-8">
          <MotivationalQuote />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white">Available Courses</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {(coursesData.courses as Course[]).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}