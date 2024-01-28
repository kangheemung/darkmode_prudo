import React from 'react';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <nav>
        <div>
            {/* "/" ルートへのリンク */}
           <Link className = 'header_a' to="/">Home</Link>
           <Link  className = 'header_a' to="/count">count</Link>
           <Link  className = 'header_a' to="/toggle">Toggle</Link>
           <Link  className = 'header_a' to="/ColorSwitcher">ColorSwitcher</Link>

          <Link  className = 'header_a' to="/api/v1/auth">Login</Link>
            {/* "/form" ルートへのリンク */}
          <Link  className = 'header_a' to="/api/v1/users">Signin</Link>
            {/* "/form" ルートへのリンク */}
          <Link  className = 'header_a' to="/api/v1/post">Post</Link>
            {/* "/form" ルートへのリンク */}
          <Link  className = 'header_a' to="/api/v1/postList">PostList</Link>
          {/* 必要に応じて他のリンクを追加 */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
