const $btn = document.getElementById("btn-kick");

const character = {
  name: "Pikachu",
  defaulHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-character"),
  elProgressbar: document.getElementById("progressbar-character"),
};

const enemy = {
  name: "Charmander",
  defaulHP: 100,
  damageHP: 100,
  elHP: document.getElementById("health-enemy"),
  elProgressbar: document.getElementById("progressbar-enemy"),
};

$btn.addEventListener("click", function () {
  console.log("kick");
  changeHP(random(20),character);
  changeHP(random(20),enemy);
  });

function init() {
  console.log("Strat Game!");
  renderHP(character);
  renderHP(enemy);
};

function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
};

function renderHPLife(person) {
  person.elHP.innerHTML = person.damageHP + "/" + person.defaulHP;
};

function renderProgressbarHP(person){
    person.elProgressbar.style.width = person.damageHP + "%";
};

function changeHP(count, person){
    if(person.damageHP < count){
        person.damageHP = 0;
        alert("Poor " + person.name + "lose the fight");
        $btn.disabled = true;
    }else{
        person.damageHP -= count;
    }
    
    renderHP(person);
};

function random(num){
    return Math.ceil(Math.random()*num);
}

init();
