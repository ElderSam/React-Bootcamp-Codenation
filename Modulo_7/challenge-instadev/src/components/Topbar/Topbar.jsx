import React from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvg } from '../../assets/img/instagram-logo.svg';

import './Topbar.scss';

const Topbar = () => (
  <header className="topbar" data-testid="topbar">
    <div className="container">
      <div className="topbar__logo">
        <LogoSvg />
      </div>

      <div className="top-bar__group">
      <Link to="/users">
          <button className="top-bar__icon">
            <i className="fas fa-users" />
            <span>Usuários</span>
          </button>
        </Link>

      </div>
      <div className="topbar__icon">
        <Link to="/">Home</Link>
      </div>
      <div className="topbar__icon">
        <Link to="/users">Usuários</Link>
      </div>
      <div className="topbar__icon">
        <Link to="/users/1">teste Usuário 1</Link>
      </div>
      <div className="topbar__icon">
        <Link to="/newuser">Novo Usuário</Link>
      </div>
      
    </div>
  </header>
);

export default Topbar;
