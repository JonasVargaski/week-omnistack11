import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { injectIntl } from 'react-intl';

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

import "./styles.css";

function Logon({ intl }) {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const { data } = await api.post("/sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", data.name);

      history.push("/profile");
    } catch (error) { }
  }
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1> {intl.formatMessage({ id: 'login.message' })}</h1>
          <input
            placeholder={intl.formatMessage({ id: 'login.input.placeholder' })}
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            {intl.formatMessage({ id: 'login.button.enter' })}
          </button>
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color="#e02041" />
            {intl.formatMessage({ id: 'login.button.register' })}
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}

export default injectIntl(Logon);