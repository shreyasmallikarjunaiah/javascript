
console.log(Boolean(0));    //0
console.log(Boolean(undefined));    // UNDEFINED
console.log(Boolean('shreyi'));   //NAN
console.log(Boolean({}));  //NULL
console.log(Boolean(''));  //''

//EXAMPLE FOR THIS USING IF AND ELSE//


//FOR 0//
const money=0;
if(money){
	console.log('save the money')}
else{
	console.log('you should get a money')
}

//FOR UNDEFINED//
const thing=undefined;
if(thing){
	console.log('save the money')}
else{
	console.log('you should get a money')
}

//FOR NAN//
const name='shreyi';
if(name){
	console.log('save the money')}
else{
	console.log('you should get a money')
}


//FOR NULL//

const num={};
if(num){
	console.log('save the money')}
else{
	console.log('you should get a money')
}

//FOR EMPTY//
const why='';
if(why){
	console.log('save the money')}
else{
	console.log('you should get a money')
}
