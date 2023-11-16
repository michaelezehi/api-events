import app from './app';

const port = process.env.PORT || 8080;
const hostname = 'localhost';  

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Access the API at http://${hostname}:${port}/api/events`);
});
