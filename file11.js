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

//Example 6

let num1= 7;
let num2= 5;

if(num1>num2)
{
    console.log("Number 1 is greater");
}
else{
    console.log("Number 2 is greater");
}

//Example 7

let Number= 7;

if(Number%2==0)
{
    console.log("Even Number!");
}
else{
    console.log("Odd Number!");
}

//Example 8

let WeekDay= "Thursday";

if(WeekDay==="Saturday" || WeekDay=== "Sunday")
{
    console.log("This is weekend");
}
else{
    console.log("A week Day");
}

//Example 9

let price= 120;

if ( price>100)
{
    console.log("You are eligible for Discount")
}
else{
    console.log("Sorry, You are not eligible for this discount.");
}

//example 10

let password= "Lf345";

if(password.length>=8)
{
    console.log("Your password is Valid");
}
else{
    console.log("Password should be at least 8 characters long!");
}

//Example 10

let LightColor= "red";

if(LightColor==="red")
{
    console.log("Stop!");
}
else if(LightColor==="yellow")
{
    console.log("Slow Down");
}
else if(LightColor==="green")
{
    console.log("Go!");
}
else{
    console.log("Invalid Light Color");
}

//Example 11

let Num= 15;

if(Num>=5 && Num<=20)
{
    console.log("Number is in range");
}
else{
    console.log("Number is not in range");
}

//Example 12

let start= 1;

for(let i=1 ; i<=10 ; i++)
{
    console.log(`${i}`);
}
