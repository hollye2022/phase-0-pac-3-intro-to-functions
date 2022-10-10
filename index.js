// Follow along with the examples here
function doNothing () {}
function sayHello () {
    console.log("Hello!");
}
sayHello();
function sayHelloToIsabel () {
    console.log("Hello, Isabel!");
}
sayHelloToIsabel();
function doSomething(thing) {
    console.log(thing);
}
doSomething("Mike");
function sayHelloTo(firstname) {
    console.log(`Hello ${firstname} !`);
}
sayHelloTo("Isabel");
sayHelloTo("Holly");
function say(greeting, firstName) {
    console.log(`${greeting},${firstName}!`);
}
say("Goodbye","Brandon");
function add(x,y) {
    return x + y;
}
add(1,2)
console.log(add(1,2));
function say(greeting, firstName) {
    return `${greeting} , ${firstName}!`
}
console.log(say("Hello","Sophia"));

function say(greeting , firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
}
console.log(say("Hello", "Mia"));
function say(greeting,firstName) {
    return `${greeting}, ${firstName}!`
}
console.log(say("Bye","Mike"));