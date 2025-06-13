import { lazy } from 'react';

// Project Detail Components
export const ProjectGallery = lazy(() => import('../project/ProjectGallery'));
export const ProjectVideoPlayer = lazy(() => import('../project/ProjectVideoPlayer'));
export const ProjectImageCarousel = lazy(() => import('../project/gallery/ProjectImageCarousel'));
export const ProjectImageGrid = lazy(() => import('../project/gallery/ProjectImageGrid'));

// Our Company Components
export const CompanyVideo = lazy(() => import('../company/CompanyVideo'));
export const CompanyValues = lazy(() => import('../company/CompanyValues'));
export const CompanyAwards = lazy(() => import('../company/CompanyAwards')); 