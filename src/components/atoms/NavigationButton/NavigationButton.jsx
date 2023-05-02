import React from 'react';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

const NavigationButton = ({ text, location }) => {
  const navigate = useNavigate();

  const handleLocationChange = () => {
    navigate('/todos');
  };

  return <Button color='purple' text={text} action={handleLocationChange} />;
};

export default NavigationButton;
