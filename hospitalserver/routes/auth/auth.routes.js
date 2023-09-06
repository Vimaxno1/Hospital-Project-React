const express = require('express');
const authController = require('../../controllers/auth/auth.controllers');
const router = express.Router();

/* SIGN-IN SECTION */
router.get('/sign-in', authController.getSignin);
router.get('/sign-out', authController.getLogout);
