const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/update-status">
      <label>
        Status:
        <input type="text" name="status" />
      </label>
      <button type="submit">Update</button>
    </form>
  `);
});

app.post('/update-status', (req, res) => {
  // Send the update request to the WhatsApp API
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.post('/update-status', (req, res) => {
  const token = 'd56f8ada4ef62a2a0aa383ab4a7899b4';
  const status = req.body.status;

  fetch('https://api.whatsapp.com/v1/account/profile', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: status
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    res.send(`Updated status to: ${status}`);
  })
  .catch(error => {
    console.error(error);
    res.send(error.message);
  });
});
