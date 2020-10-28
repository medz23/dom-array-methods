const main = document.getElementById('main');
const addUserBTN = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser()
//random user and add Money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.rangon() * 10000000)
  };

  addData(newUser);
}

//Add new obj

function addData(obj) {
  data.push(obj);

  updateDOM();
}
//Update DOM

function updateDOM(providedData = data) {
  // clear main div

  main.innerHTML = '<h2><strong>Person </strong>Wealth</h2>';

  // providedData.forEach();
}
