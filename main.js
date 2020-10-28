const main = document.getElementById('main');
const addUserBTN = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//random user and add Money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };

  addData(newUser);
}
//double money yey

function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money*2 };
  });

  updateDOM();
}

//sort by Richest
function sortByRichest(){
  data.sort((a, b) => b.money - a.money);

  updateDOM();
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

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong> ${item.name} </strong> ${formatMoney(item.money)}`;
    main.appendChild(element);

  } );
}

//Money

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//event listeners

addUserBTN.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
