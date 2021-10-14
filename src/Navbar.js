import React, { useState, useRef, useEffect } from 'react';
import logo from './fav.svg';

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const links = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const linksHeight = links.current.getBoundingClientRect().height;

    if (showList) {
      container.current.style.height = `${linksHeight}px`;
    } else {
      container.current.style.height = `0px`;
    }
  }, [showList]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button
            className='hamburger'
            onClick={() => {
              setShowList(!showList);
            }}
          >
            <i className='fa fa-bars'></i>
          </button>
        </div>
        <div className='nav-links' ref={container}>
          <ul className='links' ref={links}>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Product</a>
            </li>
          </ul>
        </div>
        <ul className='social-link'>
          <li>
            <a href='http://twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='http://twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='http://twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>{' '}
          <li>
            <a href='http://twitter.com'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
