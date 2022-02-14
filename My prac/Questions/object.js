let info = {
    // Strings
    name:'Paul',

    // Numbers
    age : 28,

    // Boolean values
    isMale : true,

    // Arrays
    marks : [23,45,14,35],
    reverse:
                    function revSTR(str){
                        let reversed = ''
                        for(let i = str.length - 1; i >= 0; i--){
                        reversed =reversed + str[i]
                        }
                        return reversed
                    }
}
console.log(info.name);
console.log(info.marks);
console.log(info.age);
console.log(info.isMale);
console.log(info.marks[1]);
console.log(info.marks[info.marks.length - 1]);
console.log(info.name.charAt(info.name.length -1));
info.secondname = 'Bwayo'
console.log(info);
info.email = 'bwayopaul@gmail.com'
console.log(info);
console.log(info.reverse('Bwayo')); 

let car = {
    name: 'ferrari',
    wheels: 3,
    cost: '35 kenya million',

    numberOfWheels: function(){
      return this.wheels + 1
    }
  }
  info.car = car
  console.log(car.wheels);
  console.log(car.numberOfWheels());

//   This(

) function in objects
let car = {
    name: 'ferrari',
    wheels: 4,
    cost: '35 kenya million',
    ferrariInfo: function(){
       console.log(`name is  ${this.name} and the cost is ${this.cost}`);
    }
  }
  info.car = car
  console.log(car.wheels);
  console.log(car.ferrariInfo());