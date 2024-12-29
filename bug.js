const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Here's where error handling is missing
    console.error(err);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might cause an error
    const randomValue = Math.random();
    if (randomValue < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});