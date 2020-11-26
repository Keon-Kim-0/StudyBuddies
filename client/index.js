const button1 = document.getElementById('testButton');
const inputBox = document.getElementById('textInput');

button1.addEventListener('click', () => {
  console.log(inputBox.value);
  console.log('deploying fetch');
  fetch('/insert', {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify({ query: inputBox.value }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('returned data: ', data);
    })
    .catch((err) => console.log(err));
});

// button1.onclick = ((e) => {
//   alert(e.target.innerText);
// })
