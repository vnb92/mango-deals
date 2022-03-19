import express from 'express';
import { v4 as uuid } from 'uuid';
import paginate from 'express-paginate';
import { db } from './db'

const app = express();
const port = 3000

app.listen(port)
console.log('Server was starting on port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(paginate.middleware(10, 10));

app.get('/api/deals', function(req, res) {
  const { limit, page } = req.query as any
  const deals = db.getByPage(page, limit)
  const pagesCount = db.getPagesCount(limit)

  res.send({
    deals,
    hasMore: paginate.hasNextPages(req)(pagesCount),
    pagesCount
  });
});

app.post('/api/deal/:page', function(req, res) {
  const { limit } = req.query as any
  const { page } = req.params
  const deal = req.body

  deal.id = uuid()
  db.push(deal)

  const pagesCount = db.getPagesCount(limit)
  const deals = db.getByPage(Number(page), limit)

  res.send({
    deals,
    hasMore: paginate.hasNextPages(req)(pagesCount),
    pagesCount
  })
});

app.delete('/api/deal/:page/:id', function(req, res) {
  const { limit } = req.query as any
  const { id, page } = req.params
  
  db.remove(id)
  const pagesCount = db.getPagesCount(limit)
  const deals = db.getByPage(Number(page), limit)

  res.send({
    id,
    deals,
    hasMore: paginate.hasNextPages(req)(pagesCount),
    pagesCount
  })
});
