import React, { Suspense, lazy, useEffect } from 'react';

import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import './styles/carousel.css';
import ErrorBoundary from './components/ErrorBoundary';
import Index from './pages/Index';
import Navbar from './components/Navbar';

// Lazy load components
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const PrivateVideo = lazy(() => import("./pages/PrivateVideo"));
const OurCompany = lazy(() => import("./pages/OurCompany"));
const UnitedMedia = lazy(() => import("./pages/UnitedMedia"));
const Events = lazy(() => import("./pages/Events"));

// Create a client instance outside of the component
const queryClient = new QueryClient();

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-portfolio-bg">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-portfolio-accent mx-auto mb-4"></div>
      <p className="text-lg text-muted-foreground">Loading...</p>
    </div>
  </div>
);

// Custom error boundary for routes
const RouteErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ErrorBoundary
    fallback={
      <div className="min-h-screen flex items-center justify-center bg-portfolio-bg p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Page Error</h1>
          <p className="text-xl text-muted-foreground mb-4">
            There was an error loading this page.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-full"
          >
            Return to Home
          </button>
        </div>
      </div>
    }
  >
    {children}
  </ErrorBoundary>
);

// Wrapper component that combines Suspense and ErrorBoundary
const RouteWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <RouteErrorBoundary>
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  </RouteErrorBoundary>
);

const App = () => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>

            <Sonner />
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={
                  <RouteWrapper>
                    <About />
                  </RouteWrapper>
                } />
                <Route path="/contact" element={
                  <RouteWrapper>
                    <Contact />
                  </RouteWrapper>
                } />
                <Route path="/project/:projectId" element={
                  <RouteWrapper>
                    <ProjectDetail />
                  </RouteWrapper>
                } />
                <Route path="/our-company" element={
                  <RouteWrapper>
                    <OurCompany />
                  </RouteWrapper>
                } />
                <Route path="/um" element={
                  <RouteWrapper>
                    <UnitedMedia />
                  </RouteWrapper>
                } />
                <Route path="/events" element={
                  <RouteWrapper>
                    <Events />
                  </RouteWrapper>
                } />
                <Route path="/parisExclusive" element={
                  <RouteWrapper>
                    <PrivateVideo />
                  </RouteWrapper>
                } />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={
                  <RouteWrapper>
                    <NotFound />
                  </RouteWrapper>
                } />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
