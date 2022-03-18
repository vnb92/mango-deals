import express from 'express';

const app = express();
const port = 3000

app.listen(port)
console.log('Server was starting on port', port);

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/api/deals', function(_, res) {
  res.send(Deals);
});

// app.post('/api/add-deal', function(req, res) {
//   const deal = (req.params as any).deal
//   Deals.push(deal as any);
//   res.send(deal)
// });

const Deals = [
  { id: '1', date: new Date(), value: 100.1 },
  { id: '2', date: new Date(), value: 50 }
]
