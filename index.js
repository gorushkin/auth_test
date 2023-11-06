import express, { json } from 'express';
import cors from 'cors';
const app = express();

const port = 4000;
app.use(cors());
app.use(json());

const list = [
  { id: '1', name: 'favorite', count: 5, description: 'my favorite list' },
  { id: '2', name: 'wish list', count: 15, description: 'asdfasdf' },
  { id: '3', name: 'something els', count: 35, description: 'asdf' },
  { id: '4', name: 'fffffffffffff', count: 25, description: 'dd3333' },
  { id: '5', name: 'dddddddddds', count: 25, description: 'dd' },
];

app.get('/test', (req, res) => {
  res.status(200).send('qwerqwer');
});

app.post('/login', (req, res) => {
  console.log('req: ', req.body);

  res
    .status(200)
    .cookie('colikeeeee')
    .send({ name: req.body.email, login: req.body.email, token: '454564', address: 'pr-Truda' });
});

app.post('/login', (req, res) => {
  console.log('req: ', req.body);

  res
    .status(200)
    .cookie('colikeeeee')
    .send({ name: req.body.email, login: req.body.email, token: '454564', address: 'pr-Truda' });
});

app.post('/remind', (req, res) => {
  console.log('req: ', req.body);

  res.status(200).cookie('colikeeeee').send({ message: 'i will get an email' });
});

app.post('/forgot', (req, res) => {
  console.log('req: ', req.body);

  res.status(200).cookie('colikeeeee').send({ message: 'ok' });
});

app.get('/list', (req, res) => {
  console.log('req: ', req.body);

  res.status(200).cookie('colikeeeee').send({ list });
});

app.post('/addList', (req, res) => {
  console.log(req.body);
  list.push({ id: req.body.name, name: req.body.name, count: 0 });

  res.status(200).cookie('colikeeeee').send({ id: req.body.name, name: req.body.name, count: 0 });
});

app.listen(port, () => {
  console.log('app started');
});
