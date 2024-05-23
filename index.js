import express from'express';
import cors from "cors"
import bodyParser from "body-parser";

import sdk from '@api/render-api';
const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json());

const renderApiKey = 'rnd_psicWurWzAv0UktCJEC8MPliiDEY'; 

app.get('/', async (req, res) => {
    sdk.auth(renderApiKey);
sdk.getServices({limit: '20'})
  .then(({ data }) => res.json(data))
  .catch(err => console.error(err));
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
