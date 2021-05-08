/**
 * GoF Definition:
 * Compose objects into tree structures to represent part-whole hierarchies.
 * Composite lets clients treat individual objects and compositions of objects uniformly.
 */

var CatalogItem = require('./CatalogItem');
var CatalogGroup = require ('./CatalogGroup')

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);

var group_food = new CatalogGroup("Yummy FOod ",[
    new CatalogItem("Milkshake", 5,99),
    new CatalogItem("French Fries", 3.99)
])

var keychain = new CatalogItem("Key Chain", .99);

var catalog = new CatalogGroup("Clothes and Food", [keychain, group_shoes, group_food])

console.log(`$${catalog.total}`)

catalog.print()
