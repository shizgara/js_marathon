/*Через DOM підключились до кнопки */
const $btn = document.getElementById("btn-kick");

/*Створили обєкт з його характеристиками: імя, початкове значення здоровя,
здоровя після удра, через dom підключились до лічильника здоровя і прогресбара
здоровя на сторінці яка відображається користувачу */
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

/*Створили подію по кліку і запуск функцій */
$btn.addEventListener("click", function () {
  console.log("kick");
  changeHP(random(20),character);
  changeHP(random(20),enemy);
  });

  /*функція яка запускає функції renderHP підставляючи в параметри 
  дані з обєктів */
function init() {
  console.log("Strat Game!");
  renderHP(character);
  renderHP(enemy);
};

/*Функція які запускає функції renderHPLife і renderProgressbarHP 
і передає параметр person(обєкт) */
function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
};

/*Функція через параметр якої передається назва обєкта,а вже
по його ключу elProgressbar(привязаний через dom) відбувається зміна 
значенняключа damageHP і це рендериться на сторінці для користувача */
function renderHPLife(person) {
  person.elHP.innerHTML = person.damageHP + "/" + person.defaulHP;
};

/*Функція через параметр якої передається назва обєкта і застосовується
метод style.width(зміна параметра ширини) до ключа elProgressbar
і цим самим зменшуються(переприсвоюється) значення клюса elProgressbar
, тобто йому присвоється значення ключа damageHP і це впливає статусбар
здоровя обєкта яке відображається користувачу */
function renderProgressbarHP(person){
    person.elProgressbar.style.width = person.damageHP + "%";
};

/* Функція яка передає 2 параметра(число і назву обєкта). Проходить перевірка,
якщо ключ  damageHP менше параметра count(це очки удара(damage)), то статусбару
здоровя,який відображається користувачу через ключ damageHP присвоюється значення
0, через alert виводить повідомлення що персонаж програв і кнопка стає не 
активної для натискання, тобто при натисканні на неї ніякі дії не відбуваються.
У іншому випадку від значення ключа damageHP віднімається значення удару(damage) 
Потім зміни в ключі damageHP за допомогою функції renderHP візуалізуються на
сторінці для користувача */
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

/*Функція random, яка приємає за параметр число і воно множиться на заокругленне
випадкове число від 0 до 1 */
function random(num){
    return Math.ceil(Math.random()*num);
}

/*Запуск функції init */
init();
