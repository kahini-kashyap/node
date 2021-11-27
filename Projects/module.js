function circarea(number){
    return Math.PI*number*number;
}

let answer = circarea(20);
console.log(answer);

var a = "kahini";

function simple_interest(p, t,r)
{
  return (p*t*r)/100;
}


function compound_interest(p, t, r, n)
{
 
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;

}


module.exports = {simple_interest, compound_interest};

