//definition of class with name "Grocery"
//attributes: name, quantity, price, department
//- add some grocery items
//- display items as html

interface Item {
    name: string;
    quantity: number;
    price: number;
    department: string;
}

class Grocery {
    name: string;
    quantity: number;
    price: number;
    department: string;

    constructor(name: string, quantity: number, price: number, department: string){
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.department = department;
    }

}

const eggs: Item = new Grocery("Eggs", 100, 3, "Dairy");
const bread: Item = new Grocery("Wonder Bread", 74, 2, "Bakery");
const steak: Item = new Grocery("Ribeye Steak", 20, 10, "Meat");
const peppers: Item = new Grocery("Green Peppers", 150, .75, "Produce");