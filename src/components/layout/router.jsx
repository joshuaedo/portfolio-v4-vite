import { About } from '@/app/pages/about';
import { Home } from '@/app/pages/home';
import { NotFound } from '@/app/pages/not-found';
import { Slug } from '@/app/pages/project';
import { Projects } from '@/app/pages/projects';
import { Route, Routes } from 'react-router-dom';

export const Router = () => (
  <Routes>
    <Route path={'/'} element={<Home />} />
    <Route path={'/about'} element={<About />} />
    <Route path={'/projects'} element={<Projects />} />
    <Route path={'/projects/:slug'} element={<Slug />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
);
