import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const TopBar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <Link to="/" className="topbar__logo">
        <LogoSvg alt="Instagram logo" />
      </Link>

      <div className="topbar__group">
        <Link to="/users">
          <button className="topbar__icon">
            <i className="fas fa-users" />
            <span>Usuários</span>
          </button>
        </Link>

        <Link to="/newuser">
          <button className="topbar__icon">
            <i className="fas fa-user-plus" />
            <span>Nova Conta</span>
          </button>
        </Link>
      </div>
    </div>
  </header>
);

export default TopBar;