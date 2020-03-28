const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const ongsValidator = require("./validators/ongsValidator");
const profileValidator = require("./validators/profileValidator");
const incidentValidator = require("./validators/incidentValidator");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", ongsValidator.create, OngController.create);

routes.get("/incidents", incidentValidator.index, IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", incidentValidator.delete, IncidentController.delete);

routes.get("/profile", profileValidator.index, ProfileController.index);

module.exports = routes;
