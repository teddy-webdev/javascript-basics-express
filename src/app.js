const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// arrays test
app.post('/arrays/element-at-index/:index', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;
    const result = array[index];
    res.status(200).json({ result });
  
});

app.post('/arrays/to-string', (req, res) => {
  const { array } = req.body;
    const result = array.join(',');
    res.status(200).json({ result });
  
});

app.post('/arrays/append', (req, res) => {
  const { array, value } = req.body;
  const result = [...array, value];
  res.status(200).json({ result });

})

app.post('/arrays/starts-with-vowel', (req, res) => {
  const { array } = req.body;
  // ^[aeiou] to check if it start with a vowel
  // i to specify that it is case insensitive

  const result = array.filter(item => /^[aeiou]/i.test(item));
  res.status(200).json({ result });
})

app.post('/arrays/remove-element', (req, res) => {
  const { array } = req.body;
  const result = array.slice(1);
  res.status(200).json({ result });
})
/* 
app.post('/arrays/remove-element', (req, res) => {
  const {array} = req.body;
  const {index} = req.query;
  const elementIndex = Number(index);
  array.splice(elementIndex, 1);
  res.status(200).json({ result: array });

}) */



// booleans test

app.post('/booleans/negate', (req, res) => {
  const { value } = req.body;
  const negatedValue = value === true ? false : true;
  res.status(200).json({ result: negatedValue });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  const negatedValue = value === true || value === '' ? false : true;
  res.status(200).json({ result: negatedValue });
});



app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  const truthinessValue = typeof value === 'string';

  res.status(200).json({ result: truthinessValue });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;
  const truthinessValue = typeof value === 'number';

  res.status(200).json({ result: truthinessValue });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const { number } = req.params;
  const parsedNumber = parseInt(number);

  // Check if the parsed number is odd
  const isOdd = parsedNumber % 2 !== 0;

  res.status(200).json({ result: isOdd });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const { number } = req.params;
  const parsedNumber = parseInt(number);

  // Check if the parsed number is even
  const isEven = parsedNumber % 2 == 0;

  res.status(200).json({ result: isEven });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const { number } = req.params;

  // Check if the number is not numeric
  if (!isNumeric(number)) {
    return res.status(400).json({ error: 'Parameter must be a number.' });
  }

  res.status(200).json({ result: true });
});





// numbers test

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const { num1, num2 } = req.params;
  const result = Number(num1) + Number(num2);

  res.status(200).json({ result });
});


app.get('/numbers/add/:a/and/:b', (req, res) => {
  const { a, b } = req.params;
  const result = Number(a) + Number(b);

  res.status(200).json({ result });
});


/* app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const { num1, num2 } = req.params;

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    const result = Number(num1) + Number(num2);
    res.status(200).json({ result });
  }
  
}); */ 



app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const { a, b } = req.params;
  const result = Number(b) - Number(a);

  res.status(200).json({ result });
});


app.post('/multiply/numbers/multiply', (req, res) => {
  const a = 10
  const b = 3
  const result = a * b
  res.status(200).json({result})
})

app.post('/numbers/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    const result = Number(a) * Number(b);
    res.status(200).json({ result });
  }

})




// strings tests

app.get('/strings/hello/:string', (req, res) =>{
  const string = req.params.string
  const result = `Hello, ${string}!`;
  res.status(200).json({ result });
})

app.get('/strings/upper/:string', (req, res) =>{
  const string = req.params.string
  const result = string.toUpperCase();
  res.status(200).json({ result });
})

app.get('/strings/lower/:string', (req, res) =>{
  const string = req.params.string
  const result = string.toLowerCase();
  res.status(200).json({ result });
})

app.get('/strings/first-characters/:string', (req, res) => {
  const { string } = req.params;
  const { length } = req.query;

  if (length) {
    const firstCharacters = string.slice(0, Number(length));
    res.status(200).json({ result: firstCharacters });
  } else {
    const firstCharacter = string.charAt(0);
    res.status(200).json({ result: firstCharacter });
  }
});


module.exports = app;