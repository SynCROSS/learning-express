import express from 'express';

const app = express();
const port = Number(process?.env?.PORT) || 3000;

const KEY_PORT = 'port';

app.set(KEY_PORT, port);

app.get('/', (req, res) => {
  res.send('Hello Express');
});

app.listen(app.get(KEY_PORT), () => {
  global?.console?.log?.(`Listening on Port ${port}`);
});
