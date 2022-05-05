console.log(`🤪 it's working 🤪`);
// const url = 'https://api.adviceslip.com/advice';
const button = document.querySelector('button');
const h1Element = document.querySelector('.adviceId');
const h2Element = document.querySelector('.advice');

window.onload = () => {
  getData();
};
button.addEventListener('click', () => {
  getData();
  console.log('s');
});

// ========get data from the API========

function getData() {
  fetch('https://api.adviceslip.com/advice')
    .then(response => {
      return response.json();
    })
    .then(jsonResult => {
      console.log(jsonResult);
      const object = jsonResult.slip;
      h1Element.innerHTML = `<h1>Advice # ${object.id} </h1>`;
      h2Element.innerHTML = `<h2>"${object.advice}"</h2>`;
    })
    .catch(error => {
      console.log(error);
    });
}

// ================================
