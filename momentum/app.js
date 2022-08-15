const player = {
    name : "Heather",
    points : 10,
    fat : false,
    sayHello : function() {
        console.log("Hi, I'm " + this.name);
    }
};

console.log(player);
console.log(player.name);
player.lastName = "Ryu";
console.log(player);
player.sayHello();
