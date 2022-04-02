import 'dotenv/config';

import express from 'express';

import cors from 'cors';

const app = express();

app.use(cors());

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
