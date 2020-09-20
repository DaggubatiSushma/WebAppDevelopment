sayHi()

// For classes we need to declare first and call next
class Car{
    constructor(doors,engine,colour){
        this.doors=doors;
        this.engine=engine;
        this.colour=colour;
    }
    carStats(){
        return `This car has ${this.doors} doors, a ${this.engine} and a beautiful colour ${this.colour}`;
    }
}

const cx5 = new Car (4,'V1','Red');
console.log(cx5);
console.log(cx5.carStats());

function sayHi(){
    return console.log('Hello this function can be called anywhere!');
}

sayHi()


