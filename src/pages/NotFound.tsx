import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const navigateRef = useRef(navigate);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigateRef.current("/");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};
