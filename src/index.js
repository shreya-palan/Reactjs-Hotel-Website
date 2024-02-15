import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Components/About/About';
import Gallery from './Components/gallery/Gallery';
import Destination from './Components/Destinations/Destination';
import SinglePage from './Components/SinglePage/SinglePage';
import Blog from './Components/Blog/Blog';
import BlogSinglePage from './Components/Blog/blog-single-page/BlogSinglePage';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/destination",
    element: <Destination />
  },
  {
    path: "/singlepage/:id",
    element: <SinglePage />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/blogsinglepage/:id",
    element: <BlogSinglePage />
  },
  {
    path: "/testimonial",
    element: <Testimonial />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

