import express from 'express';
import { v4 as uuid } from 'uuid';

const app = express();
const port = 3000

app.listen(port)
console.log('Server was starting on port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/deals', function(_, res) {
  res.send(Deals);
});

app.post('/api/deal', function(req, res) {
  const deal = req.body  
  deal.id = uuid()
  Deals.push(deal)
  res.send(deal)
});

app.delete('/api/deal/:id', function(req, res) {
  const id = req.params.id
  Deals = Deals.filter(deal => deal.id !== id)
  res.send(id)
});

let Deals = [
  { id: uuid(), date: new Date(), value: 100.1 },
  { id: uuid(), date: new Date(), value: 50 },
]
