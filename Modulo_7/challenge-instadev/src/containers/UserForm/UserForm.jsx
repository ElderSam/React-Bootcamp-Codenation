import React, { useState } from 'react';
import profilePlaceholder from '../../assets/img/instagram-logo.svg';
import SuccessMessage from '../../components/SuccessMessage';

import '../UserProfile/UserProfile.scss';
import './UserForm.scss';

const UserForm = () => {
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@email.com');
  const [profileImg, setProfileImg] = useState('');
  const [formStatus, setFormStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus(true);
  };

  return (
    <>
      {formStatus && <SuccessMessage />}
      <div data-testid="user-form">
        <section className="profile">
          <div className="container">
            <div className="profile-data">
              <div className="user">
                <div className="user__thumb">
                  <img src={profileImg || profilePlaceholder} alt={name} />
                </div>
                <p className="user__name">
                  {name} <span>@{username}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="post__form">
          <div className="container">
            <div className="post__form__wrapper">
              <form onSubmit={handleSubmit} className="post__form">
                <label htmlFor="name-text-input">Nome</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  id="name-text-input"
                  type="text"
                  placeholder="Ex.: Fulano da Silva"
                  value={name}
                  required
                />
                <label htmlFor="username-text-input">Usuário</label>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  id="username-text-input"
                  type="text"
                  placeholder="Ex.: fulanodasilva"
                  value={username}
                  required
                />
                <label htmlFor="email-text-input">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-text-input"
                  type="text"
                  placeholder="Ex.: fulanodasilva@email.com"
                  value={email}
                  required
                />
                <label htmlFor="profile-image-text-input">
                  Url da Imagem de Perfil (use a url da imagem do Linkedin)
                </label>
                <input
                  onChange={(e) => setProfileImg(e.target.value)}
                  id="profile-image-text-input"
                  type="text"
                  placeholder="http://...."
                  required
                />
                <button type="submit">Cadastrar</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UserForm;