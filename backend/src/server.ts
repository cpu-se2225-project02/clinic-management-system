/* eslint-disable linebreak-style */
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import { PrismaClient } from '@prisma/client';

const app = express();
const PORT = 8001;

app
  .use(cors())
  .use(bodyParser.json())
  .listen(PORT, () => {
    console.log(`Server has started at http:://localhost:${PORT}`);
  });
