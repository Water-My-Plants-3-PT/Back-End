const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets.js');
const Users = require("../users/users-model.js");
const { isValid } = require("../users/users-service.js");

