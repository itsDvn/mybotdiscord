const express = require('express');
const app = express();
app.use(express.json());

let commands = [];

app.post('/add-command', (req, res) => {
  const { name, reply } = req.body;
  commands.push({ name, reply });
  res.json({ message: `Command ${name} added!` });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
