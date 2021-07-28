

var characters = ["a", "b", "c", "d", "e", "f", "g", "h", "1", "2", "3", "4", "5"];

var random_string = ""

for(let i=0; i<6; i++)
{
    let temp = characters[Math.floor(Math.random()*13)];
    random_string += temp;
}
console.log(random_string);
