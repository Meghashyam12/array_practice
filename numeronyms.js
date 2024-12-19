const mapper = function (element) {
  if (element.length < 3) {
    return element;
  }

  return element.at(0) + (element.length - 2) + element.at(-1);
};

function toNumeronymns(string) {
  const stringInArray = string.split(' ');
  const numeronym = stringInArray.map(mapper);

  return numeronym.join(' ');
}


console.log("Every developer likes to mix a kubernetes and javascript");
console.log(toNumeronymns("Every developer likes to mix a kubernetes and javascript"));