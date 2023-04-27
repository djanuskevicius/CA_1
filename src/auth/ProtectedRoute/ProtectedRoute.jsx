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
        setUserId(data.map((x) => x.id));
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const storedUserId = localStorage.userId;
  console.log(storedUserId);
  console.log(userId);
  const isAuthenticated = userId !== null && parseInt(storedUserId) === userId;

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
