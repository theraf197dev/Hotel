import {Routes, Route, BrowserRouter as Router, Navigate} from 'react-router-dom'
import React, { lazy, Suspense } from "react";
import './App.css';

const MainPage = lazy(() => import("./pages/MainPage"));
const ReservationDetail = lazy(() => import("./pages/ReservationDetail"));
const ConfirmationPage = lazy(() => import("./pages/ConfirmationPage"));

function App() {
  return (
    <>
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <Router>
          <Routes>
            <Route path="/reservations" element={ <MainPage/> } />
            <Route path="/reservations/:id" element={<ReservationDetail />} />
            <Route path="/reservations/:id/booked/:res" element={<ConfirmationPage />} />

            <Route path="*" element={<Navigate to="/reservations" />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
