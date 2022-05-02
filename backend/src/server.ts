/* eslint-disable linebreak-style */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import { PrismaClient } from '@prisma/client';

const app = express();
// const db = new PrismaClient();
const PORT = 8000;

app
  .use(cors())
  .use(bodyParser.json())
  .get('/', (req, res) => {
    res.send('Hello World');
  })
  .listen(PORT, () => {
    console.log(`Server has started at http:://localhost:${PORT}`);
  });
