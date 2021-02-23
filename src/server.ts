import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello NLW #04' })
})

app.post('/', (request, response) => {
  return response.json({ message: 'Your data has already been saved!' })
})

app.listen(3333, () => console.log('🚀 Server is running!'));