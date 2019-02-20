// Buttons
let peopleButton = document.getElementById("people");
let filmsButton = document.getElementById("films");
let planetsButton = document.getElementById("planets");
let speciesButton = document.getElementById("species");
let starshipsButton = document.getElementById("starships");
let vehiclesButton = document.getElementById("vehicles");

// Info elements
let error = document.getElementById("error");
let title = document.getElementById("title");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let option5 = document.getElementById("option5");

// Show an error
const showError = () => {
  error.innerText = "Something whent wrong! Please, try again!";
  title.innerText = ``;
  option1.innerText = ``;
  option2.innerText = ``;
  option3.innerText = ``;
  option4.innerText = ``;
  option5.innerText = ``;
};

// People
const getPeopleInfo = () => {
  showLoadingPeople();

  let randomNumber = Math.floor(Math.random() * 87 + 1);
  let apiUrl = `https://swapi.co/api/people/${randomNumber}`;

  axios
    .get(apiUrl)
    .then(recive => setPeopleInfo(recive.data))
    .then(() => hideLoadingPeople())
    .catch(() => showError());
};

const setPeopleInfo = data => {
  title.innerText = data.name;
  error.innerText = ``;
  option1.innerText = `Gender: ${data.gender}`;
  option2.innerText = `Birth year: ${data.birth_year}`;
  option3.innerText = `Height: ${data.height}`;
  option4.innerText = `Mass: ${data.mass}`;
  option5.innerText = `Hair color: ${data.hair_color}`;
};

// Show loading status
const showLoadingPeople = () => {
  peopleButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
};
// Hide loading status
const hideLoadingPeople = () => {
  peopleButton.innerText = "Find a hero";
};

// Films
const getFilmsInfo = () => {
  showLoadingFilms();

  let randomNumber = Math.floor(Math.random() * 7 + 1);
  let apiUrl = `https://swapi.co/api/films/${randomNumber}`;

  axios
    .get(apiUrl)
    .then(recive => setFilmsInfo(recive.data))
    .then(() => hideLoadingFilms())
    .catch(() => showError());
};

const setFilmsInfo = data => {
  title.innerText = data.title;
  error.innerText = ``;
  option1.innerText = `Episod: ${data.episode_id}`;
  option2.innerText = `Director: ${data.director}`;
  option3.innerText = `Producers: ${data.producer}`;
  option4.innerText = `Date of the relize: ${data.release_date}`;
  option5.innerText = `About: ${data.opening_crawl}`;
};

// Show loading status
const showLoadingFilms = () => {
  filmsButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
};
// Hide loading status
const hideLoadingFilms = () => {
  filmsButton.innerText = "Find a movie";
};

// Planet
const getPlanetsInfo = () => {
  showLoadingPlanets();

  let randomNumber = Math.floor(Math.random() * 61 + 1);
  let apiUrl = `https://swapi.co/api/planets/${randomNumber}`;

  axios
    .get(apiUrl)
    .then(recive => setPlanetsInfo(recive.data))
    .then(() => hideLoadingPlanets())
    .catch(() => showError());
};

const setPlanetsInfo = data => {
  title.innerText = data.name;
  error.innerText = ``;
  option1.innerText = `Climate: ${data.climate}`;
  option2.innerText = `Gravity: ${data.gravity}`;
  option3.innerText = `Diameter: ${data.diameter}`;
  option4.innerText = `Terrain: ${data.terrain}`;
  option5.innerText = `Population: ${data.population}`;
};

// Show loading status
const showLoadingPlanets = () => {
  planetsButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
};
// Hide loading status
const hideLoadingPlanets = () => {
  planetsButton.innerText = "Find a planet";
};

//Species
const getSpeciesInfo = () => {
  showLoadingSpecies();

  let randomNumber = Math.floor(Math.random() * 37 + 1);
  let apiUrl = `https://swapi.co/api/species/${randomNumber}`;

  axios
    .get(apiUrl)
    .then(recive => setSpeciesInfo(recive.data))
    .then(() => hideLoadingSpecies())
    .catch(() => showError());
};

const setSpeciesInfo = data => {
  title.innerText = data.name;
  error.innerText = ``;
  option1.innerText = `Classification: ${data.classification}`;
  option2.innerText = `Вesignation: ${data.designation}`;
  option3.innerText = `Average height: ${data.average_height}`;
  option4.innerText = `Skin colors: ${data.skin_colors}`;
  option5.innerText = `Language: ${data.language}`;
};

// Show loading status
const showLoadingSpecies = () => {
  speciesButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
};
// Hide loading status
const hideLoadingSpecies = () => {
  speciesButton.innerText = "Find species";
};

//Starships
const getStarshipsInfo = () => {
  showLoadingStarships();

  let randomNumber = Math.floor(Math.random() * 37 + 1);
  let apiUrl = `https://swapi.co/api/starships/${randomNumber}`;

  axios
    .get(apiUrl)
    .then(recive => setStarshipsInfo(recive.data))
    .then(() => hideLoadingStarships())
    .catch(() => showError());
};

const setStarshipsInfo = data => {
  title.innerText = data.name;
  error.innerText = ``;
  option1.innerText = `Model: ${data.model}`;
  option2.innerText = `Mnufacturer: ${data.manufacturer}`;
  option3.innerText = `Cost in credits: ${data.average_height}`;
  option4.innerText = `Crew: ${data.crew}`;
  option5.innerText = `Max atmosphering speed: ${data.max_atmosphering_speed}`;
};

// Show loading status
const showLoadingStarships = () => {
  starshipsButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
};
// Hide loading status
const hideLoadingStarships = () => {
  starshipsButton.innerText = "Find species";
};

//Vehicles
const getVehiclesInfo = () => {
  showLoadingVehicles();

  let randomNumber = Math.floor(Math.random() * 39 + 1);
  let apiUrl = `https://swapi.co/api/vehicles/${randomNumber}`;

  axios
    .get(apiUrl)
    .then(recive => setVehiclesInfo(recive.data))
    .then(() => hideLoadingVehicles())
    .catch(() => showError());
};

const setVehiclesInfo = data => {
  title.innerText = data.name;
  error.innerText = ``;
  option1.innerText = `Model: ${data.model}`;
  option2.innerText = `Mnufacturer: ${data.manufacturer}`;
  option3.innerText = `Cost in credits: ${data.average_height}`;
  option4.innerText = `Crew: ${data.crew}`;
  option5.innerText = `Max atmosphering speed: ${data.max_atmosphering_speed}`;
};

// Show loading status
const showLoadingVehicles = () => {
  vehiclesButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
};
// Hide loading status
const hideLoadingVehicles = () => {
  vehiclesButton.innerText = "Find species";
};

peopleButton.addEventListener("click", getPeopleInfo);
filmsButton.addEventListener("click", getFilmsInfo);
planetsButton.addEventListener("click", getPlanetsInfo);
speciesButton.addEventListener("click", getSpeciesInfo);
starshipsButton.addEventListener("click", getStarshipsInfo);
vehiclesButton.addEventListener("click", getVehiclesInfo);
