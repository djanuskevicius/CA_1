import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8000/users')
      .then(({ data }) => {
        console.log(data);
        setUserId(data[0].id);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  const storedUserId = localStorage.UserId;
  console.log('Stored user ID:', storedUserId);
  const isAuthenticated = userId !== null && parseInt(storedUserId) === userId;
  console.log('Is authenticated:', isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
