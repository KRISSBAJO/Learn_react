import React from 'react';
import './ErrorPages.css';

function ErrorPage() {
  return (
    <div className="error-page">
      <h2>404 - Page Not Found</h2>
      <p>We're sorry, but the page you were looking for doesn't exist.</p>
      <p>You might have followed a bad link or mistyped the address, feel free to try again.</p>
    </div>
  );
}

export default ErrorPage;
