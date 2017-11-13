import React from 'react';
import {
  Link
} from 'react-router-dom';
import Counter from './Counter';

const Home = () => {

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>
    </header>
  )

}
export default Home;