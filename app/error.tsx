'use client';

import React from 'react';
import EmptyState from './components/EmptyState';

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return <EmptyState title="Sheesh" subtitle="Something sussy happened" />;
};

export default ErrorState;
