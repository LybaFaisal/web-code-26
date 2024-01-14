//Example 1

let health= 75;

console.log("Healthy:" + (health>50 &&  health<100));  //using + method of concatenation

//Example 2

let strength= 15;

console.log(`Medium Strength:  ${strength>10 && strength<20}`);  //string interpolation Method

//Example 3

let weapons=  3;
let armour =  8;

console.log(`Prepared For Encounter:  ${weapons>2 && armour>5}`); //string interpolation Method

//Example 4

MagicSkill= 12;

CombatSkill= 15;

console.log(`Can Upgrade Skills:  ${MagicSkill>10 || CombatSkill>10}`);

//Example 5

let temperature= 25;

if(temperature>=30)
{
    console.log("This is not the right temperature");
}
else{
    console.log("Yes This is the right temperature");
}
