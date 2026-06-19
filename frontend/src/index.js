import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RsvpForm from './RsvpForm';
import RsvpList from './RsvpList';
import WelcomeScreen from './WelcomeScreen';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/rsvp" element={<RsvpForm />} />
      <Route path="/rsvps" element={<RsvpList />} />
      <Route path="/" element={<WelcomeScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
