import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//listen to a port
app.listen(5001, () => {
  console.log("SERVER STARTED ON PORT 5001");
});