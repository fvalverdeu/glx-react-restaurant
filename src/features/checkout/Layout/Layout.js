import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header>
        My App
        <nav>
          <ul>
            <li>
              <NavLink to='/carrito' className={({ isActive }) => isActive ? 'active' : undefined }>Carrito</NavLink>
            </li>
            <li>
              <NavLink to='/procesar-compra' className={({ isActive }) => isActive ? 'active' : undefined }>Checkout</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        { children ? children : <Outlet />} 
      </main>
      <footer>@copyright 2022</footer>
    </div>
  );
};

export default Layout;
