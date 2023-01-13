import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Kurao Chat</span>
      <div className="user">
        <img src="" alt="user-profile-picture" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
