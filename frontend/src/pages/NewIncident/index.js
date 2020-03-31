import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { injectIntl } from 'react-intl'

import "./styles.css";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";

function NewIncident({ intl }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("/incidents", data, {
        headers: { Authorization: ongId }
      });

      history.push("/profile");
    } catch (error) { }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>{intl.formatMessage({ id: 'profile.register-new-case' })}</h1>
          <p>
            {intl.formatMessage({ id: 'incident.default.description' })}
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            {intl.formatMessage({ id: 'incident.back-to-home' })}
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            placeholder={intl.formatMessage({ id: 'incident.input.title-case' })}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder={intl.formatMessage({ id: 'common.description' })}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder={intl.formatMessage({ id: 'common.value' })}
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            {intl.formatMessage({ id: 'register' })}
          </button>
        </form>
      </div>
    </div>
  );
}

export default injectIntl(NewIncident)