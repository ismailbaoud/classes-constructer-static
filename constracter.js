const animal_1 = document.getElementById('animal_1');
const animal_2 = document.getElementById('animal_2');
const animal_3 = document.getElementById('animal_3');
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const name3 = document.getElementById('name3');
const age1 = document.getElementById('age1');
const age2 = document.getElementById('age2');
const age3 = document.getElementById('age3');
const alive1 = document.getElementById('alive1');
const alive2 = document.getElementById('alive2');
const alive3 = document.getElementById('alive3');
const method1 = document.getElementById('method1');
const method2 = document.getElementById('method2');
const method3 = document.getElementById('method3');


function animal(name, age , alive , method){
    this.name = name;
    this.age = age;
    this.alive = alive ;
    this.method = method;

    this.display = function(name,age,alive,method){
        name.textContent = `my name is ${this.name}`;
        age.textContent = `my age is ${this.age}`;
        alive.textContent = `i'm alive ?  ${this.alive}`;
        method.textContent = `i'm ${this.method}`;
    }
}
const animal1 = new animal('rabbit', 12 , true ,"run")
const animal2 = new animal('fish', 2 , false ,"swim")
const animal3 = new animal('howk', 23 , true ,"fly")

animal_1.addEventListener('click', ()=>{
    animal1.display(name1,age1,alive1,method1);
    document.getElementById('div1').classList.toggle('hidden')
});
animal_2.addEventListener('click', ()=>{
    animal2.display(name2,age2,alive2,method2);
    document.getElementById('div2').classList.toggle('hidden')
})
animal_3.addEventListener('click', ()=>{
    animal3.display(name3,age3,alive3,method3);
    document.getElementById('div3').classList.toggle('hidden')
})