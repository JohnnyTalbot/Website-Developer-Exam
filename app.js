
window.onload = () => {
  fetch('./PRAGMATICPLAY-gamelist.json')
  .then(response => {
      console.log(response);
  })
  .then(json => {
      console.log(json);
  })
  .catch(function (err) {
      console.log(err);
  })
}

