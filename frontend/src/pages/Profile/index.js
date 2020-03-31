import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { injectIntl } from 'react-intl';

import "./styles.css";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";
import formatCurrency from '../../utils/formatCurrency';

function Profile({ intl }) {
  const [incidents, setIncidents] = useState([]);

  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  useEffect(() => {
    async function loadIncidents() {
      const { data } = await api.get("/profile", {
        headers: { Authorization: ongId }
      })

      const incidentsMap = data.map(incident => ({
        ...incident,
        formattedValue: formatCurrency(incident.value, intl.locale)
      }))

      setIncidents(incidentsMap);
    }
    loadIncidents()
  }, [ongId, intl.locale]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (error) { }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>{intl.formatMessage({ id: 'profile.welcome' })}, {ongName}</span>

        <Link to="/incidents/new" className="button">
          {intl.formatMessage({ id: 'profile.register-new-case' })}
        </Link>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1> {intl.formatMessage({ id: 'profile.register-cases' })}</h1>

      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>{intl.formatMessage({ id: 'common.case' })}:</strong>
            <p>{incident.title}</p>

            <strong>{intl.formatMessage({ id: 'common.description' })}:</strong>
            <p>{incident.description}</p>

            <strong>{intl.formatMessage({ id: 'common.value' })}:</strong>
            <p>
              {incident.formattedValue}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={23} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default injectIntl(Profile);