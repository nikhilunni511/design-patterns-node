/**
 * GoF definition:
 * Defone a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
 */
var Store = require('./Store');
var Shopper = require('./Shopper');
var Mall = require('./Mall');

var catsAndThings = new Store("Cats & Things");
var insAndOuts = new Store("Ins and Outs");

var alex = new Shopper("Alex");
var eve = new Shopper("Eve");
var sharon = new Shopper("Sharon");
var mike = new Shopper("Mike");

var valleyMall = new Mall();

catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(sharon);
catsAndThings.subscribe(valleyMall);

insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

catsAndThings.sale(20);
insAndOuts.sale(50);

console.log(valleyMall.sales)
