
import express, { NextFunction, Request, Response } from 'express';
import { query, validationResult } from 'express-validator';
const validateLogin = [
    query('dni').exists().isEmpty(),
    query('password').exists().isEmpty(),
];

export { validateLogin }