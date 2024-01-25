import React from 'react';
import {Link}from 'react-router-dom'

function Header() {
  return (
    <header>
      <nav>
        <div>
          <p>
            {/* "/" ルートへのリンク */}
            <Link to="/">Home</Link> 
          </p>
          <p>
            {/* "/login" ルートへのリンク */}
            <Link to="/api/v1/auth">Login</Link> 
          </p>
          <p>
            {/* "/form" ルートへのリンク */}
            <Link to="/api/v1/users">Signin</Link> 
          </p>
          {/* 必要に応じて他のリンクを追加 */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
