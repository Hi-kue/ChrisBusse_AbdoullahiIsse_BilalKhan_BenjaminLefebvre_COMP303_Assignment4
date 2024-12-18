import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Authentication from "./pages/Authentication";
import DonorDashboard from "./pages/DonorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import "./styles/auth.css";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className='app-container'>
          <Routes>
            <Route path='/authentication' element={<Authentication />} />
            <Route
              path='/donor-dashboard'
              element={
                <ProtectedRoute>
                  <Navbar />
                  <main className='main-content'>
                    <DonorDashboard />
                  </main>
                </ProtectedRoute>
              }
            />
            <Route
              path='/'
              element={<Navigate to='/donor-dashboard' replace />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
