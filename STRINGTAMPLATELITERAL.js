const firstName='Jonas';
const job='teacher';
const birthYear=1991;
const year=2037;

//FOR STRING LITERAL//
const jonas="I'm " + firstName + ' ,a ' +(year-birthYear) + ' yearold ' + job + ' !  ';
console.log(jonas)

//FOR TAMPLATE LITERAL//
const jonasNew=`I'am ${firstName} a ${year-birthYear} yearold ${job} !`
console.log(jonasNew)


//FOR MULTILINE STRING LITERAL//
console.log('string \n\ multiple\n\ line')


//FOR MULTILINE TAMPLATE LITERAL//
console.log(`string
with
multiple
lines`)