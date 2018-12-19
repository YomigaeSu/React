import React from "react";
const person = {
  name: "Mosh",
  walk: function() {},
  talk() {}
};
person.walk();

const targetName = "name";
person[targetName] = "John";

const color = ["red", "yellow", "green"];
color.map(function(color) {
  return "<li>" + color + "</li>";
});

// replace with an arrow function
const color = ["red", "yellow", "green"];
color.map(color => "<li>" + color + "</li>");

// use a template literal to replace concatenation
const color = ["red", "yellow", "green"];
color.map(color => `<li>${color}</li>`);

const address = {
  street: "",
  city: ""
};
const { street, city } = address;
// => const street = address.street

// use alias to rename the property
const { steet: st } = address;

// spread operator '...'
// Use spread operator to combine arrays
const first = [1, 2, 3];
const secont = [4, 5, 6];
// traditional combining method:
const combined = first.concat(secont);
// Use spread
const combined = [...first, ...second];

// Use spread operator to combine Objects
const first = { name: "Mash" };
const second = { location: "Melbourne" };
const second = { ...first, ...second, country: "Australia" };

// Use spread opertaor to copy
const copy = { ...first };
