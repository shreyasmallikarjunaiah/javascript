
// FAT ARROW FUNCTION IS (=>)  
//IT IS USED RATHER THAN ('FUNCTION') WORD
const calAge = age => 2023-age;

console.log(calAge(2003))

//FOR MORE THAN ONE PARAMETER//
/* HERE WE NEED 2 VARIABLES 
1.age1
2.retirAge*/ 

const retirnment =  birthYear =>{
    const age1 = 2037-birthYear;
    const retirAge = 65-age1;
    return retirAge;
}
console.log(retirnment(1991))//output is 19

//by using two datas//
const retirage1=(birth,firstname)=>{
    const age2 = 2037-birth;
    const retirage2= 65-age2;
    return `my slef ${firstname} and my retirnment age is ${retirage2}`;
}

console.log(retirage1(1991,'shreyi'))

//output is my slef shreyi and my retirnment age is 19//