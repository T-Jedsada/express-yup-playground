require('dotenv').config();
import express, { Application } from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 4000;
const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});
