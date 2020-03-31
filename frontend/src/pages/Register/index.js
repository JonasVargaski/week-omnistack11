import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { injectIntl } from 'react-intl';
import { toast } from 'react-toastify';

import "./styles.css";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";

function Register({ intl }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post("/ongs", data);
      const id = response.data.id;
      toast.success(`${intl.formatMessage({ id: 'register.toast-your-id-acess' })}: ${id}`,
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false
        })

      history.push('/');
    } catch (error) { }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>{intl.formatMessage({ id: 'register' })}</h1>
          <p>
            {intl.formatMessage({ id: 'register.description' })}
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            {intl.formatMessage({ id: 'register.already-have-registration' })}
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder={intl.formatMessage({ id: 'register.input.name-ong' })}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder={intl.formatMessage({ id: 'register.input.city' })}
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            {intl.formatMessage({ id: 'register' })}
          </button>
        </form>
      </div>
    </div>
  );
}

export default injectIntl(Register)