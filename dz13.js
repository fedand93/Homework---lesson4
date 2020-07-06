
function print(el) {
    return console.log(el);
}
const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
    for (let i = 0; i < names.length; i++) {
    print(names[i]);
  }
names.forEach(print);