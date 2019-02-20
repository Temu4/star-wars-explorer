let name = document.querySelector("#name");
let gender = document.querySelector("#gender");
let birth_year = document.querySelector("#birth-year");
let mass = document.querySelector("#mass");
let starships = document.querySelector("#starships");
let films = document.querySelector("#films");

const getInfo = () => {
  let randomNumber = Math.floor(Math.random() * 88 + 1);
  let apiUrl = `https://swapi.co/api/people/${randomNumber}`;
  axios.get(apiUrl).then(recive => setInfo(recive.data));
};

const setInfo = data => {
  name.innerText = data.name;
  gender.innerText = data.gender;
  birth_year.innerText = data.birth_year;
  mass.innerText = data.mass;
  starships.innerText = data.starships;
  films.innerText = data.films;
};

window.onload = () => getInfo();
