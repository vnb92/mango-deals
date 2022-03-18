import express from 'express';
import { v4 as uuid } from 'uuid';
import paginate from 'express-paginate';

const app = express();
const port = 3000

app.listen(port)
console.log('Server was starting on port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(paginate.middleware(10, 10));

app.get('/api/deals', function(req, res) {
  const { limit, page } = req.query as any
  const dealsCount = Deals.length
  const pageCount = Math.ceil(dealsCount / limit)
  const leftHandDeals = page === 1 ? 0 : (page - 1) * limit
  
  const limitedDeals = Deals.slice(leftHandDeals, leftHandDeals+limit)  

  res.send({ deals: limitedDeals, hasMore: paginate.hasNextPages(req)(pageCount) });
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
  { id: uuid(), date: new Date(), value: 1 },
  { id: uuid(), date: new Date(), value: 2 },
  { id: uuid(), date: new Date(), value: 3 },
  { id: uuid(), date: new Date(), value: 4 },
  { id: uuid(), date: new Date(), value: 5 },
  { id: uuid(), date: new Date(), value: 6 },
  { id: uuid(), date: new Date(), value: 7 },
  { id: uuid(), date: new Date(), value: 8 },
  { id: uuid(), date: new Date(), value: 9 },
  { id: uuid(), date: new Date(), value: 10 },
  { id: uuid(), date: new Date(), value: 11 },
  { id: uuid(), date: new Date(), value: 12 },
]
