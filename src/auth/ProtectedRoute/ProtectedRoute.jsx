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
        setUserId(data.map((x) => x.id));
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const storedUserId = localStorage.userId;
  const isAuthenticated =
    userId !== null && userId.includes(parseInt(storedUserId));

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
