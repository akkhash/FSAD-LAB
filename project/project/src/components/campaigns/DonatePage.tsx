import React from 'react';
import { useParams } from 'react-router-dom';

const DonatePage: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Donate to Campaign {id}</h1>
      <p>Here you can add a donation form or payment integration.</p>
    </div>
  );
};

export default DonatePage;
