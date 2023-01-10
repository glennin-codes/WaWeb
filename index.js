const form = document.createElement('form');
form.innerHTML = `
  <label>
    Status:
    <input type="text" name="status" />
  </label>
  <button type="submit">Update</button>
`;
form.addEventListener('submit', event => {
  event.preventDefault();
  const status = event.target.elements.status.value;
  fetch('http://localhost:3000/update-status', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      status: status
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert(`Updated status to: ${status}`);
  })
  .catch(error => {
    console.error(error);
    alert(error.message);
  });
});

document.body.appendChild(form);