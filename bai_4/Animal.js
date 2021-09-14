class Animal {
    name;
    weight;
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getWeight(){
        return this.weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
    toString(){
        return "Name: " + this.name + " weight: " + this.weight;
    }
}