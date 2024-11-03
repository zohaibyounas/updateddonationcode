import React from 'react';
import { useToken } from './context/TokenSecret';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const DonateBtn = () => {
  const { token } = useToken();
  const navigate = useNavigate();

  const handleDonateClick = (event) => {
    if (!token) {
      event.preventDefault(); // Prevents the default link behavior
      toast.error("Please Log In to Donate");
      navigate("/login");
      return;
    }
  };

  return (
    <div>
      <Link to='https://donate.stripe.com/test_7sIaHX6ha62j6w8aEE'>
        <button 
          onClick={handleDonateClick} 
          className="font-bold text-lg rounded text-black bg-yellow-500 px-4 mx-4 p-2 font-sans hover:text-black hover:bg-white hover:scale-110">
          Donate Now
        </button>
      </Link>
    </div>
  );
};

export default DonateBtn;
