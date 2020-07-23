
//........tasks from chap 1 to 20....

//chap#1 Alerts

// task-1

alert("Welcome to the Site");

// task-2

alert("Error! Please enter a valid password.");

// task-3

alert("Welcome to JS Land... \n Happy coding!"  );

//task-4 (pending)

alert("Welcome to JS Land...");
alert("Happy coding!\n prevent this page from creating additional dialogs" ); 

//task-5




//chap-2 Variables for string

//task-1
var username;
//task-2
var myname ="MARIAM RAZA";
//task-3
var message= "Hello World";
alert(message);

//task-4
var name = "Raza Ali";
var age = "15";
var work = "Certified Mobile Application Development";
alert(name);
alert(age + " " +"years old");
alert(work);

//task-5
// for(var i=0; i < 10; i++){
//         for(var j=0; j < i; j++){
//                 document.write("pizza")
//         }
//         document.write("<br>")
// }

//task-6
var email = "mariamraza035@gmail.com"
alert("My Email address is" + " "+ email );
//task-7
var book ="A Smarter Way To Learn JavaScript"
alert("I am trying to learn from the Book" + " " +book);

//task-8
var a = "Yah! I can write Html content through JavaScript";
document.write(a);

//task-9
var b = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(b);
document.write("<br>")
document.write(b);

//chap-3 VARIABLES FOR NUMBERS

//task-1
var age = "19";
alert("I am " + " " + age + " " + "years old");

//task-2
var count = " 14";
 alert("you have visited this website" + " " +count + " " + "times");

//task-3
var birthyear="2000";
document.write("<br>");
document.write(" My birth year is" + " "+ birthyear + "<br> Data type of my declared variable is number");

//task-4
var VisitorName ="John Doe";
var ProductTitle ="T-shirt";
var quantity ="5";
document.write("<br>");
document.write( 
        VisitorName + " " + "ordered" + " " + quantity + " " + ProductTitle + "(s)" + " " + " on XYZ Clothing store"
);

//chap-4 VARIABLE NAMES: LEGAL AND ILLEGAL

//task-1
// var a,c,d;
//task-2 a
// var $one;
// var _two;
// var three;
// var SecondLast;
// var Last;
//task-2 b
// var ?two;
// var GGHHH;
// var on on;
// var ? Ywo;
// var ?COL;

//task-3
// document.write("<br/><h1/> Rules for naming JS variables")
// document.write("<br/> Variable names can only contain numbers,$ and _ .For example $my_1stVariable <br/> Variables must begin with a letter, $ or _. For example $name, _name or name <br/> Variable names are case sensitive
//  <br/>Variable names should not be JS keywords <br/>")


 //chap-5 MATH EXPRESSIONS
 
 //task-1,2
 var a = 3;
 var b = 5;
 var c = a+b;
 document.write("<br><hr> The Summation of " + a + " " + "and" + " " + b + " " + " is" + " " + c);
 var d = a-b;
 var e = a*b;
 var f = a/b;
 var g = a%b;
 document.write("<br> The Subtraction of " + a + " " + "and" + " " + b + " " + " is"+ " " + d);
 document.write("<br> The Multiplication of " + a + " " + "and" + " " + b + " " + " is"+ " " + e);
 document.write("<br> The Division of " + a + " " + "and" + " " + b + " " + " is"+ " " + f);
 document.write("<br> The Modulus of " + a + " " + "and" + " " + b + " " + " is"+ " " + g);


 //task-3
 var h=5;
document.write("<br><hr>Value after variable declaration is undefined");
document.write("<br>intial value:" + " " + h);
i=++h;
document.write("<br/>value after increment:" + " " + i);
j=i+7;
document.write("<br/>value after addition:" + " "+ j);
k=--j;
document.write("<br/>the value after decrement is:" + " " + k);
var l=k/3;
document.write(" <br/>the remainder is:"+ " " + l);

//task-4
var m="600";
var total="3000";
document.write("<br><hr>total cost to buy 5 tickets to a movie is" + " " + total + " PKR");

//task-5
document.write("<hr>Table of 4 <br>");
for(var i=0;i<=10;i++){
    
    document.write("4" + "x"+ i + "=" +4*i + "<br>" );
}

//task-6
var cTemp = 28;
var cToFahr = cTemp * 9 / 5 + 32;
document.write("<br><hr>"+cTemp + "C is " + cToFahr +"F");
var fTemp = 98;
var fToCel = (fTemp - 32) * 5 / 9;
document.write("<br/>"+fTemp + "F is " + fToCel +"C");


//task-7
document.write("<br> <hr>  Shoppping Cart")
var price1=650;
var price2=100;
var quantity1=3;
var quantity2=7;
var shipping=100;
var total= (price1*quantity1) + (price2*quantity2)  + shipping ;

document.write(  "<br> <hr> Price of item 1 is" +" "+ price1 +" " )
document.write(  "<br> Quantity of item 1 is"+" "+ quantity1 +" " )
document.write(  "<br> Price of item 2 is"+" "+ price2 +" " )
document.write(  "<br> Quantity of item 2 is" + " "+ quantity2 +" " )
document.write(  "<br> Shipping Charges" + " "+ shipping +" " )
document.write(  "<br> <br> Total cost of your order is " + " "+ total +" " )

//task-8
var totalMarks=980;
var marksObtained=804;
var percent=(marksObtained/totalMarks)*100;
document.write("<br> <hr>  Mark sheet");
document.write("<br><br> Total marks:" + " " + totalMarks);
document.write("<br> Marks Obtained:" + " " + marksObtained);
document.write("<br> Percentage:" + " " + percent);



//task-9
var dollars=10
var riyals=25
var Rs=(dollars*104.8)+(riyals*28)
document.write("<br> <hr> Total currency in PKR:"+Rs +"<br>")




//task-10
var o=5;
var cal=((o+5)*10)/2
document.write("<br><hr> Arithmetic Calculations:" + " "+ cal);


//task-11
var cy=2020;
var by=1999;


document.write("<br><hr>Age Calculator <br>")
document.write("<br>Current year:"+cy)
document.write("<br>Birth year:"+by)
document.write("<br>your age is:"+(cy-by)+"<br>")







//task-12
document.write("<br> <hr> The Geometrizer")
var radius=20;
var circum=2*3.142*radius;
var area=3.142*(radius*radius);
document.write("<br> <br> The circumference is:" + " " + circum)
document.write("<br> The Area is:" + " " + area)


//task-13
var snack="Oreo"
var CurrentAge=19
var maxAge=80
var perDay=3
var cal=(maxAge-CurrentAge)*365*3;
document.write("<br> <hr>The Lifetime Supply Calculator")
document.write("<br> <br> Favourite snack:"+snack)
document.write("<br>Current Age:"+CurrentAge)
document.write("<br>Maximum Age:"+maxAge)
document.write("<br>Amount of snacks per day:"+perDay)
document.write("<br>you will need"+" "+cal+"  to last Oreo you until the ripe old age of 65")


//chap-6-9

//task-1
 var x=10;
 
document.write("<br> <hr> Result:")

document.write("<br> The value of x is : " + x)

document.write("<br> ................................................")
var preInc= ++x;

document.write("<br> The value of ++x is :"+" "+ preInc)

document.write("<br> Now the value of x is:"+" "+ preInc)
var postInc= x++;
document.write("<br> The value of x++ is:"+" "+ 11)

document.write("<br> Now the value of x is:"+" "+ 12)
var predec= --x;
document.write("<br> The value of --x is :" +" "+11)

document.write("<br> Now the value of x is:"+" "+ 11)
var postdec=x--;
document.write("<br> The value of x-- is:"+" "+ 11)
document.write("<br>Now the value of x is:" +" "+10)


//task-2
var a=2;
var b=1;
var ans= --a - --b + ++b + b-- ;
document.write("<br> <hr>a is:" +" "+a)
document.write("<br> b is:" + " "+b)
document.write("<br>Result:" + " "+ ans)
document.write("<br>EXPLANATION: <br> --a; is pre-decrement so a decreased form 2 to 1. <br> --a - --b; in this stage 1 is subtracted from the already decreased value of b from 1 to 0 so the calculations of this part is: 1-0. <br> --a - --b + ++b; in this step the value of b which is 0 becomes 1 after pre increment so the calculations are: 1-0+1. <br>--a - --b + ++b + b--; in this step post deccrement function is applied on b so the calculations are: 1- 0 + 1 + 1.")



//task-3
var name= prompt("Enter your name","your name..." );

alert("Welcome Dear User!")


//task-4,5
var table= +prompt("enter any number");
if( table < 5){
        document.write("<hr>");
for(var i=0;i<=10;i++){
    
    document.write("3" + "x"+ i + "=" +3*i + "<br>" );
}

}
else{
        document.write("<hr> Default Table <br>");
for(var i=0;i<=10;i++){
    
    document.write("5" + "x"+ i + "=" +5*i + "<br>" );
}
}


//task-6
// var sub1=prompt("Enter 1st Subject");
// var sub2=prompt("Enter 2nd Subject");
// var sub3=prompt("Enter 3rd Subject");

// var sub1a=prompt("Enter obtained marks of 1st subject");
// var sub2a=prompt("Enter obtained marks of 2nd subject");
// var sub3a=prompt("Enter obtained marks of 3rd subject");

// var first= sub1;
// var second= sub2;
// var third=sub3;
// var firsta=sub1a;
// var seconda=sub2a;
// var thirda=sub3a;
// var tmarks=100;
// var answer= ;

//table

// var table="";
// var rows=4;
// var cols=4;
// for(var r = 0; r < rows; r++){
//         table +="<tr>";
//         for ( var c=0; c <= cols; c++)
//         {
//                 table +="<td>"+ c + "</td>";

//         }
//         table +="</tr>";
// }
 

// document.write("<br> <table>"+ table +"</table>")



//chap-9-11

//task-1
var city= prompt("Enter you city","your city");
if(city == "karachi"){
        alert("Welcome to the city of Lights!");
}
else{
        alert("Welcome!");
}

//task-2
var gender = prompt("Enter your Gender","your Gender");
if( gender=="male"){
        alert("Good Morning Sir.");
}
 else if( gender=="Female"){
        alert("Good Morning Ma'am.");
}
else{
        alert("Good Morning!");
}



//task-4
var fuel=prompt("Enter the amount of fuel remaining in your car ","current amount");
if(fuel<0.25){
        alert("Please refill the fuel in your car.");
}
else{
        alert("you've got sufficient amount of fuel, Enjoy your ride!");
}



//task-5
//  var a = 4;
// if (++a === 5){
//         alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
//         alert("given condition for variable b is true");
// }
//  var c = 12;
//  if (c++ === 13){
//         alert("condition 1 is true");
//  }
//  if(c === 13){
//         alert("condition 2 is true");
//  }
//  if (++c < 14){
//         alert("condition 3 is true");
//  }
//  if(c === 14){
//         alert("condition 4 is true");
//  }
//  var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
//         alert("The cost equals");
//  }
//  e. if (true){
//         alert("True");
//  }
//  alert("False");
// }
//  if("car" < "cat"){
//         alert("car is smaller than cat");
//  }

//No alert message appeared.




  var a=4;
    if (++a === 5)
        {
            alert("Given condition for variable a is true. ");
        }
    var b=82;
    if (b++ === 83)
       {
            alert("Given condition for variable b is true. ");
        }
    var c=12;
    if (a++ === 13)
        {
            alert("condition 1 is true.");
        }
    if (c === 13)
        {
            alert("condition 2 is true.  ");
        }
    if (++c === 14)
        {
            alert("condition 3 is true.  ");
        }
    if (c === 14)
        {
            alert("condition 4 is true.");
        }
    var materialCost=20000;
    var laborCost=2000;
    var totalCost=materialCost+laborCost;
    if (totalCost === laborCost+materialCost)
        {
            alert("The cost equals. ");
        }
    if (true){
        alert("True <br>");
    }
    if (false){ alert("False");}
    if ("car" < "cat"){
        alert("car is smaller than cat");
    }
}
///
    var obtainedMarks = [2];
    var totalMarks = [2];
    var i=0,a;
    var sumOfTotalMarks=0, sumOfObtainedMarks=0, percentage=0, grade, remarks;

    for (i=0; i <=2; i++){
        totalMarks[i]= prompt("Enter total marks of subject " + (i+1));
       

        sumOfTotalMarks += parseInt(totalMarks[i]);
    }

    for (i=0; i <=2; i++){
        obtainedMarks[i]= prompt("Enter obtained marks of subject " + (i+1));
     

        sumOfObtainedMarks += parseInt(obtainedMarks[i]);

    percentage=sumOfObtainedMarks/sumOfTotalMarks*100.0

    if (percentage>=80){
        grade="A-One";
        remarks="Excellant"
    }
    else if (percentage>=70 && percentage <= 79.99){
        grade="A";
        remarks="Good"
    }
    else if (percentage>=60 && percentage <= 69.99){
        grade="B";
        remarks="You need to improve"
    }
    else {
        grade="Fail";
        remarks="Sorry"
    }
    document.write("<h1> Marks Sheet </h1> <br> <br>")
    document.write("Total Marks: " + sumOfTotalMarks);
    document.write("<br> Mark Obtained: " + sumOfObtainedMarks);
    document.write("<br> Percentage: " + percentage);
    document.write("<br> Grade: " + grade);
    document.write("<br> Remarks: " + remarks);


//
    var actualNumber=5;
    var userNumber;
    userNumber=prompt("Enter secret number! ");
    if (actualNumber === userNumber){
        document.write("Bingo! Correct answer.")
    }
    else if (actualNumber === userNumber+1) {
        document.write("Close enough to the correct answer")
    }
    else{document.write("Sorry next time!"+actualNumber + " " + userNumber)}
}
function divisible3Check(){
    var userInput;
    userInput=prompt("Enter any number!")
    if (userInput % 3 === 0){
        document.write("<h1> The number " + userInput + " is Divisible by 3 </h1>");
    }
    else { document.write("<h1> The number " + userInput + " is not divisible by 3 </h1>");}
//

    var a=Number(prompt("Enter First number:"));
    var b = Number(prompt("Enter 2nd number:"));
    var op= prompt("Enter operator for operation?");
    var c=0;
    if (op === '+')
        {
            document.write(a + op + b + "=" + (a+b));
        }
    else if (op === '-')
    {
        document.write(a + op + b + "=" + (a-b));
    }
    else if (op === '*')
    {
        document.write(a + op + b + "=" + (a*b));
    }
    else if (op === '/')
    {
        document.write(a + op + b + "=" + (a/b));
    }
    else if (op === '%')
    {
        document.write(a + op + b + "=" + (a%b));
    }
    else { alert("Illegal operation");
         }

//

    var userInput;
    userInput=prompt("Enter any number!")
    if (userInput % 2 === 0){
        document.write("<h1> Even number </h1>");
    }
    else { document.write("<h1> Odd number </h1>");}

//
    var userTemperature;
    userTemperature=prompt("Enter Temperature!")
    if (userTemperature > 40){
        document.write("<h1> It is too hot outside. </h1>");
    }
    else if (userTemperature >=30 && userTemperature < 40){
         document.write("<h1> The Weather today is Normal </h1>");
        }
    else if (userTemperature >=20 && userTemperature < 30){
        document.write("<h1> Today's Weather is cool </h1>");
        }
    else{
        document.write("<h1> OMG! Today's weather is so cool </h1>");
        


//

    var valueInput=prompt("Enter any character");
    var asciCode= valueInput.charCodeAt(0);
    // document.write("ASCI code is: " + valueInput.charCodeAt(0))
    if (asciCode >=45 && asciCode<=57)
        {
            document.write("You enter a digit");
        }
    else if (asciCode >=65 && asciCode<=90)
        {
            document.write("You enter a capital letter");
        }
    else if (asciCode >=97 && asciCode<=122)
        {
            document.write("You enter a small letter");
        }
    else 
        {
            document.write("You enter a special character");
        }
//
    var firstNumber=prompt("Enter 1st number");
    var scondNumber=prompt("Enter 2nd number");

    if (firstNumber === scondNumber)
        {
            document.write("Both digits are equal.");
        }
    else if (firstNumber > scondNumber)
        {
            document.write("First Number is larger i.e. " + firstNumber);
        }
    else 
        {
            document.write("Second number is larger i.e. "+ scondNumber);
        }

//
    var firstNumber=prompt("Enter any number");

    if (firstNumber < 0)
        {
            document.write("You entered Negative number. ");
        }
    else if (firstNumber > 0)
        {
            document.write("You entered Positive number. ");
        }
    else 
        {
            document.write("You entered Zero.");                
        }
//

    var valueInput=prompt("Enter any character");
    var asciCode= valueInput.charCodeAt(0);
 
    if (asciCode === 65 || asciCode === 69 || asciCode === 73 || asciCode === 79 || asciCode === 85 
        || asciCode === 97 || asciCode === 101 || asciCode === 105 || asciCode === 111 || asciCode === 117 )
        {
            document.write("Yes! you enter a Vowel Character.");
        }
    else 
        {
            document.write("No. You enter other Character");
        }

//
    var validPassword="abc123";
    var inputPassword=prompt("Enter password:");
    if (inputPassword == null)
        {
            document.write("Please enter your password");            
        }
    else if (inputPassword !== validPassword)
        {
            document.write("Incorrect password");
        }
    else
        {
            document.write("Correct! The password you entered matches the original password");
        }


//
    var greeting;
    var hour =13;
    
    if (hour <18){
        greeting="Good Day";
        document.write(greeting);
    }
    else {
        greeting="Good Evening"
        document.write(greeting);
    }

//
    var timeInput=prompt("Enter time in 24 hours clock format!");
    if (timeInput >= 0000 && timeInput < 1200)
        {
            document.write("Good morning!");
        }
    else if (timeInput >= 1200 && timeInput < 1700)
        {
            document.write("Good afternoon!");
        }
    else if (timeInput >= 1700 && timeInput < 2100)
    {
        document.write("Good evening!");
    }
    else if (timeInput >= 2100 && timeInput <= 2359)
    {
        document.write("Good night!");
    }
    else 
    {
        document.write("Your enter wrong time.")
    }


/////////-------------- Chapter No.14 to 16
function task1to6(){
    var empty = [];
    var myObject = new Array();
    var province = ["Sindh", "Punjab", "KPK", "Balochistan"];
    var stdAge = new Array(15,17,18);
    var boolean = [0, 1, 1, 0];
    var mixed = [1, "Punjab", 2, "Balochistan"];

document.write("var empty = []; <br> var myObject = new Array(); <br> var province = [" + "Sindh," +"Punjab,"+ "KPK," +"Balochistan]; <br>  var stdAge = new Array(15,17,18); <br> var boolean = [0, 1, 1, 0]; <br> var mixed = [1," + "Punjab, 2,"+ "Balochistan];")

}
//
    var qualifications =["SSC", "HSC", "BCS","BS","BCOM","MS","M.Phil.","PhD"];
    document.write("<h1> Qualifications: </h1>");
    for (let i=0; i<qualifications.length; i++)
        {
            document.write((i+1)+") " + qualifications[i] + "<br>");
        }

//

    var names =["Michael", "John", "Tony"];
    var marks = [320, 230, 480];
    var totalMarks=500;
    
    for (let i=0; i<3; i++)
        {
            // document.write((i+1)+") " + names[i] + "<br>");
            document.write("<h2> Score of "+ names[i] + " is "+ marks[i]+ ". Percentage: "+marks[i]/totalMarks*100 +"% <br> </h2>");
            // document.write("<br>")
        }
//

    var colors =["White", "Red", "Black"];
    var newColor;
    var newIdex;

    document.write("<h2> Actual Array.</h2> <br>")
    for (let i=0; i<colors.length; i++)
        {
            document.write((i+1)+") " + colors[i] + "<br>");
        }
    newColor=prompt("Enter new color to add at the begenning!");
    colors.unshift(newColor);
    document.write("<h2> a.Added new color at the beginning.</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    newColor=prompt("Enter new color to add at the end!");
    colors.push(newColor);
    document.write("<h2> b.Added new color at the end.</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    colors.unshift("Brown", "Yellow");
    document.write("<h2> c.Added two more new color at the beginning.</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }
    colors.shift();
    document.write("<h2> d.First Color Deleted ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    colors.pop();
    document.write("<h2> e.Last color Deleted ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }
    newIdex=prompt("Enter index to add new color!");
    newColor=prompt("Enter new color to add at given index!");
    // colors[newIdex]=newColor;
    colors.splice(newIdex,0,newColor)

    document.write("<h2> f.Array after adding new color at mentioned index  ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

    newIdex=prompt("Enter index to delete color(s) from Array!");
    let indexLimit=prompt("Enter index limit that how many you want to delete!");
    
    colors.splice(newIdex,indexLimit);

    document.write("<h2> g.Array after deleting color at mentioned index  ...</h2> <br>")
    for (let i=0; i<colors.length; i++)
    {
        document.write((i+1)+") " + colors[i] + "<br>");
    }

//
    var student=[320, 230, 480, 120];
    document.write("<h2> Scores of Students:" + student +"<br>");

    student.sort();
    document.write("Scores of Students:" + student + "</h2>");

//
    var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
    var selectedCities=[];
    selectedCities.push(cities[2],cities[3]);

    document.write("<h2>Cities list:<br>");
    document.write (cities);
    document.write("<br> <br>");
    document.write("<h2>Selected cities list:<br>");
    document.write (selectedCities);
       
//
    var arr=["This", "is", "my", "cat"];
    var joinArr=arr.join(" ");
    document.write("<h1>Array:<br>");
    document.write (arr);
    document.write("<br> <br>");
    document.write("String:<br>");
    document.write (joinArr);









   //.............tasks from chap 21 to 40................. 
//chap-21 to 25

//task-1
var a = prompt("Enter your first name","enter first name here");
var b= prompt("Enter your last name","enter last name here");
var fullName= a.toUpperCase() +" "+ b.toUpperCase() ;
alert("Welcome"+ " " + fullName);

// //task-2
 var c=prompt("Enter your favorite Mobile phone model");
 document.write("My favorite phone is :" + " "+c);
 var d = c.length;
document.write("<br> Length of string :"+" "+ d);

//task-3
var e= "Pakistan";
e.indexOf("n");
document.write("<br><hr> String:" +" "+ e);
document.write("<br>Index of 'n':" +" "+ e.indexOf("n") );


// //task-4
var f= "Hello World";
f.lastIndexOf("l");
document.write("<br><hr> String:" +" "+ f);
document.write("<br>Last Index of 'l':" +" "+ f.lastIndexOf("l") );

//task-5
var g= "Pakistani";
g.charAt("3");
document.write("<br><hr> String:" +" "+ g);
document.write("<br>Character at Index 3 :" +" "+ e.charAt("3") );

//task-6
var a = prompt("Enter your first name","enter first name here");
var b= prompt("Enter your last name","enter last name here");
var fullName= a.concat(b);
alert("Welcome"+ " " + fullName);

// //task-7
var h="Hyderabad";
document.write("<br><hr>City:"+ " "+ h);
 h = h.replace("Hyder","Islam");
document.write("<br> After replacement:" + " " + h);

//task-8
var message = "Ali and Sami are best friends. They play cricket and football together";
message=message.replace(/and/g,"&");
document.write("<br><hr>"+ message);

// //task-9
var value1="472";
document.write("<br><hr> Value:" + " "+ value1);
document.write("<br> Type: String" );
var valueInt=parseInt(value1);
document.write("<br> Value:" + " "+ valueInt);
document.write("<br> Type: Number" );

//task-10
var j=prompt("Enter string value:");
document.write("<br><hr>User input:" + " "+ j);
document.write("<br>Upper case: "+ j.toUpperCase())

//task-11
var k=prompt("Enter string value:");
var firstChar=k.slice(0,1)
var otherChar=k.slice(1)
firstChar=firstChar.toUpperCase();
otherChar=otherChar.toLowerCase();
var titleCase= firstChar.concat(otherChar);
document.write("<br><hr>User input:" + " "+ k);
document.write("<br>Upper case: "+ titleCase);


//task12
var num = 35.36 ;
var str=num.toString().replace(".","")
document.write("<br>Number="+num)
document.write("<br>Result="+str)

//task13
var name=prompt("enter your name:")
if(name=="33"||name=="44"||name==46||name=="64")
{
alert("enter a valid username")
}
else{
    alert("welcome"+" "+name)
}

//task14
var a= ["cake", "apple pie", "cookie", "chips", "patties"]
var input=prompt("welcome to bakery,what do you want to order:")
input= input.toLowerCase();

if(input==="cake")
{
    alert("cake is available")
}
else if(input==="apple pie"){
    alert("apple pie is available")
}
else if(input==="cookie"){
    alert("cookie is available")

}
else if(input==="chips"){
    alert("chips is available")
}
else if(input==="patties"){
    alert("patties is available")
}
else{
    alert("we are sorry,"+" "+input+" "+"is not availabe in our ")
}


//task16
var str = "University of Karachi";
var res = str.split("");
document.write("<br><hr>"+ res)

//task17
var str = prompt("Enter string");
var res = str.charAt(str.length-1);
document.write("<br><hr>User input:"+str)
document.write("<br>Last charcter of input:"+res)


//task18
function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
 var text="the quick brown fox jumps over the lazy dog."; 
 var count=countOccurences(text,"the");
document.write("<br><hr>Text:"+text)
document.write("<br>there are"+" "+count+" "+"occurence of the word 'the'")


//chap 26-30

//task1
var input=prompt("enter a positive integer:")
document.write("<br><hr>Number:"+input)
var input1=Math.round(input)
document.write("<br>rounded off value:"+input1)
var input2=Math.floor(input)
document.write("<br>floor value:"+input2)
var input3=Math.ceil(input)
document.write("<br>ceil value:"+input3)

//task2
var input=prompt("enter a negative integer:")
document.write("<br><hr>Number:"+input)
var input1=Math.round(input)
document.write("<br>rounded off value:"+input1)
var input2=Math.floor(input)
document.write("<br>floor value:"+input2)
var input3=Math.ceil(input)
document.write("<br>ceil value:"+input3)


//task3
var input=prompt("enter an integer:")
var inputnew=Math.abs(input)
document.write("<br><hr>absolute value:"+inputnew)

//task4
var throwdice=Math.random()*6
var floor=Math.floor(throwdice)
document.write("<br><hr>random dice value:"+floor)

//task5
var coin=Math.random()*2
var floor=Math.floor(coin)
document.write("<br><hr>"+ floor)
if(floor===0){
document.write("<br>random coin value:heads")}
else
{
    document.write("<br>random coin value:tails")
}

//task6
var random=Math.random()*100
var floor=Math.floor(random)
document.write("<br><hr>The random number between 1 to 100:"+floor)

//task7
var num = prompt("Enter your weight in kilograms:")
num=Number(num)
var n = num.toFixed(1);
document.write("<br><hr>The weight of user is:"+n)

task8
var secret=9
var num=prompt("Enter a number between 1 to 10:")
if(num==9){
    alert("Congratulations!")
}
else{
    alert("Try again!")
}


//chap-31-34

//task-1
var rightNow= new Date();
document.write("<br><hr>"+rightNow);





//task-2

// var m= new Date();
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";
// var n = month[m.getMonth()];
// alert("Current Month:"+" "+ n);
//or
var m= new Date();
var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
var n=month[m.getMonth()];
alert("Current Month: "+" "+ n)

//task-3
var m= new Date();
var day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var n=day[m.getDay()];
alert("Today is "+" "+ n);

//task-4
var m= new Date();
var day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var n=day[m.getDay()];
if(n===day[0]){
    alert("Its Fun day");
}
else if(n===day[6]){
    alert("Its Fun day");
}
else{
alert("Today is "+" "+ n);
}

//task-5

var rightNow= new Date();
var n=rightNow.getDate();
if(n<16){
    alert("First fifteen days of the Month");
}
else if(n>16){
    alert("Last days of the Month");
}

//task-6
var rightNow= new Date();
var mSec=rightNow.getTime();
var mins=(mSec/1000*60*60);
document.write("Current Date:"+ " "+ rightNow);
document.write("<br> Elapsed milliseconds since January 1,1970:"+" "+mSec);
document.write("<br> Elapsed minutes since January 1,1970:"+" "+mins);


//task-7
var rightNow= new Date();
var hours= rightNow.getHours()
if(hours=== rightNow.getHours(12)){
    alert("Its PM");
}
else{
    alert("Its AM");
}

//task-8
var Now= new Date("Thu December 31, 2020 00:00:00");
document.write("Later Date:" +" "+now);


// //task9
var today = new Date();
var doomsday = new Date("April 24, 2020");
var msToday = today.getTime();
var msDoomsday = doomsday.getTime();
var msDiff = msToday - msDoomsday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
document.write(dDiff +" days have passed since 24 April,2020" )


//task10
var mydate=new Date();
var mydatemilli=mydate.getTime();
var first=new Date("january 01,2020 00:00:00")
var firstmili=first.getTime();
var diff=mydatemilli-firstmilli
var diff1=(diff/1000)
document.write("Date: "+mydate)
document.write(diff1+" seconds have passed since beginning of 2015")


//task11
var newdate=new Date("Sat Dec 05,2015 23:08:16");
var changedate=new Date("Sat Dec 05,2015 22:08:16");
document.write("Current date: "+newdate)
document.write("<br>1hour ago, "+changedate)




// //task12
var newdate=new Date();
document.write("Current date: "+newdate)
newdate.setFullYear(1920)
document.write("<br>100 years ago, "+newdate)


//task13
var age=prompt("Enter your age:")
var by=2020-age
document.write("Your age: "+age)
document.write("<br>Your birth year is: "+by)


//task14
var cname=prompt("Enter your name:")
var month=prompt("Enter Month:")
var units=prompt("number of units consumed in that month:")
var chr=16;
var net=(units*chr)
var late=350;
var gross=(net+late)
document.write("<br>K-Electric Bill <br>")
document.write("<br>Customer name: "+cname)
document.write("<br>Month: "+month)
document.write("<br>No of units: "+units)
document.write("<br>Charges per unit: "+chr +"<br>")
document.write("<br>Net amount payable (within due date): "+net)
document.write("<br>Late payment surcharge: "+late)
document.write("<br>Gross amount payable (after due date): "+gross)










//chap-35 to 40

//task-1
function currentDate(){
 var now=new Date();
 document.write(now);
}
currentDate();


//task-2
function greet(){
var a = prompt("Enter your first name","enter first name here");
var b= prompt("Enter your last name","enter last name here");
var fullName= a.toUpperCase() +" "+ b.toUpperCase() ;
alert("Welcome"+ " " + fullName);
}
greet();

//task-3

 function add(a,b){
        var a=+prompt("enter first number")
        var b=+prompt("enter second number")
    
        var sum=a+b
        return sum;
     
    }
    alert("the sum is"+" "+ add());



//task-4 calculator

function cal(no1,opr,no2){
    var no1=+prompt("enter first number")
    var opr=prompt("enter an operator")
    var no2=+prompt("enter second number")

    if(opr==="+"){
        return no1+no2
    }
    else if(opr==="-"){
        return no1-no2
    }
    else if(opr==="*"){
        return no1*no2
    }
    else if(opr==="/"){
        return no1/no2
    }
    else{
        return "Invalid Operation!"
    }
    
}
alert(cal());






//task-5

function square(){
    var a=+prompt("enter any value")
    
    return a*a;
 
}
alert(square());

//task-6
function factorial(n){
       let answer = 1;
       if (n == 0 || n == 1){
         return answer;
       }else{
         for(var i = n; i >= 1; i--){
           answer = answer * i;
         }
         return answer;
       }  
     }
     let n = prompt("Enter any integer to calculate its factorial:");
     answer = factorial(n)
   document.write("<br><hr>The factorial of " + n + " is " + answer);


//task-7

function counting(a,b){

   var a=+prompt("Enter the start number");
   var b=+prompt("Enter the end number");
    for(i=a; i<=b ;i++){
         document.write("<br><hr>"+i );        
    }
}
counting();


//task-8


function hypotenuse(a,b) {

   
return Math.sqrt((a*a) + (b*b));
}


function secondFunction() {
    var result="";
     result = hypotenuse(1,2);
     document.write ( "<br><hr>The hypotenuse of a right angle triangle:"+result );
 }
 secondFunction();


//or

// function hypotenuse(a, b) {
//     function square(x) { return x*x; }
//     return Math.sqrt(square(a) + square(b));
//  }
//  function secondFunction() {
//     var result;
//     result = hypotenuse(1,2);
//     document.write ( result );
//  }
// secondFunction();
 







//task9-a
//arg as a variable
var l = prompt("Enter a number for the length of your rectangle.");
var w = prompt ("Enter a number for the width of your rectangle.");

function area (l, w) {
return l * w;
}

document.write("<br><hr> The area of your rectangle is " + area(l,w));


//task9-b
function area (l, w) {
    return l * w;
    }
    
    document.write("<br> The area of your rectangle is " + area(3,4));


//task10
function palindrome(str){
str = str.toLowerCase()
var leng = str.length;
for (var i = 0; i < leng/2; i++) {
    if (str[i] !== str[leng - 1 - i])
    return false;
}

return true;
}
alert(palindrome(prompt("Enter a word to check palindrome:")))





//task11
function string(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
      
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
 
   return splitStr.join(' '); 
}
document.write("<br><hr>the quick brown fox");
document.write(string("<br>the quick brown fox"));



//task12
function longWord(string) {
    var str = string.split(" ");
    var long = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (long < str[i].length) {
            long = str[i].length;
            word = str[i];
        }
    }
    return word;
}
document.write("<br><hr>Web Development Tutorial <br>");
document.write(longWord("<br> Web Development Tutorial"));



//task13
function count(str, letter) 
{
 
 var letCount = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letCount += 1;
      }
  }
  return letCount;
}

console.log(count('JSResourceS.com', 'o'));



//task-14 The Geometrizer

function calcCircumference(r){
   var radius=(2*3.142*r);
   return radius;
}
document.write("The Circumference is:"+" "+ calcCircumference(2)+"<br>");

function calcArea(r){
   var area=(3.142*r*r);
   return area;
}
document.write("<br><hr>The Area is:"+" "+ calcArea(4));


























//.................taske  38 to 67........

//CHAPTER 38-42

//task1

function power(base, exponent) {
    var result = 1;
    var i=1;
	if(exponent == undefined)
        exponent = 2;
	while (i<=exponent) {
        result = result * base;
        i++;
	}
	return result;
}

document.write(power(3,5));



//task2

function leapYear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapYear(2016));
console.log(leapYear(2007));
console.log(leapYear(1700));
console.log(leapYear(1800));
console.log(leapYear(100));


//task6

var string=prompt("enter a string")
function vowelCut(string){
    if (isAValidString(string) === notAStringMessage ||  
      isAValidString(string) === zeroLengthStringMessage || 
      isAValidString(string) === noLetterString){ 
      return isAValidString(string)
    }
    if (hasVowels(string)){
       if(string.length == 1){
         return ""
       } else {
         let characterArray = string.split("")
         return characterArray.map(character => {
             if(/[aeiouyAEIOUY]/.test(character)){
                character = ""
             } else {return character}
         }).join("")
      }
    } else {return string}
   
  }
  vowelCut()
  

//task7

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
console.log(findOccurrences())


//task8
var dis=prompt("Enter the distance in between two cities in km:")
function distanceMeters (dis){
    var dis=dis*1000
    document.write("distance between these two cities in meters is: "+dis)
}
distanceMeters(dis)

var dis=prompt("Enter the distance in between two cities in km:")
function distanceFeets (dis){
    var dis=dis*3280.8
    document.write("distance between these two cities in feets is: "+dis)
}
distanceFeets(dis)

var dis=prompt("Enter the distance in between two cities in km:")
function distanceInche (dis){
    var dis=dis*39370
    document.write("distance between these two cities in inches is: "+dis)
}
distanceInche(dis) 

var dis=prompt("Enter the distance in between two cities in km:")
function distanceCm (dis){
    var dis=dis*100000
    document.write("distance between these two cities in vm is: "+dis)
}
distanceCm(dis)

//task9

function over(hours){
    var hours=prompt("enter hours of an employee")
var i=40;
while(i<=hours){
    overtime=i*12;
    i++;
}
document.write("Overtime of an employee is "+overtime)
}
over()

//task10
function amountwithdraw(){
    var amount=prompt("please input amount for withdraw:")

    var b=amount / 100
    var c=(amount % 100) / 50
    var d=((amount % 100) % 50) / 10
    var e=((amount % 100) % 50) % 10

    document.write("Input amount for withdraw= "+amount)
    document.write("<br> Required notes of Rs. 100= "+b)
    document.write("<br> Required notes of Rs. 50= "+c)
    document.write("<br> Required notes of Rs. 50= "+d)
    document.write("<br> Amount still remaining Rs.= "+e)
}
amountwithdraw()


//Chapter 43-48



//chap 43 to 48



//task-1

function onClick(){
    alert("hello visitor");
}

//task-2
function purchase(){
    alert("Thanks for the purchase..");
}


//task3
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("scoreTable").deleteRow(i);
  }


  //task-4
function changeimg(){
        document.getElementById("ImageButton").src ="img/pennywise.jpg";
     }
     function previousimg(){
        document.getElementById("ImageButton").src="img/horse.jpg"
     }


//task5
var clicks = 0;
function Click1() {
    clicks += 1;
    document.getElementById("clk").innerHTML = clicks;
}
function Click2() {
    clicks -= 1;
    document.getElementById("clk").innerHTML = clicks;
}


//---------------TASK 49-52----------



//Displaying form data on submission

function display() {
    var x = document.details.fname.value;
    var y = document.details.lname.value;
    var z = document.details.phnum.value;
    alert("FIRST NAME:" + x + "    " + "LAST NAME:" + y + "    " + "PHONE NUMBER:" + z);
}

//

function seeMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

//---------Images in Modal-----------------

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var modalImg = document.getElementById("imgsrc");
img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}
img2.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}
img3.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}
img4.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}
//-------For ZoomIn and ZoomOut Font Size-------------

var fontSize = document.getElementById("zoomm").style.fontSize;


function zoomIn() {
    fontSize = +fontSize + 10;
    document.getElementById("zoomm").style.fontSize = fontSize + "px";
}

function zoomOut() {
    fontSize -= 10;
    document.getElementById("zoomm").style.fontSize = fontSize + "px";
}




// get element main-content
const mainContent = document.getElementById('main-content');

// display child of mainContent
const childOfMainContent = mainContent.childNodes;
let text = '';
for (let i = 0; i < childOfMainContent.length; i++) {
  text = text + childOfMainContent[i].nodeName + '<br>';
}
document.getElementById('child-elements').innerHTML = text;

// Get all elements of class “render” and show their innerHTML in browser.
const elementsOfClassRender = document.getElementsByClassName('render');
text = '';
for (let i = 0; i < elementsOfClassRender.length; i++) {
  text = text + elementsOfClassRender[i].innerHTML + '<br>';
}
document.getElementById('render-elements').innerHTML = text;

// Fill input value whose element id first-name
document.getElementById('first-name').value = 'My First Name';
document.getElementById('last-name').value = 'My Last Name';
document.getElementById('email').value = 'email@email.com';

// show node type of form-content
const nodeTypeOfFormContent = document.getElementById('form-content').nodeType;
document.getElementById(
  'node-type-of-form-content'
).innerHTML = nodeTypeOfFormContent;

// show node type of lastName
const elementLastName = document.getElementById('lastName');
const nodeTypeOfLastName = elementLastName.nodeType;
const nodeTypeOfLastNameChild = elementLastName.childNodes[0].nodeType;
document.getElementById('node-type-of-last-name').innerHTML =
  nodeTypeOfLastName + '<br>' + nodeTypeOfLastNameChild;

// Update child node of element having id “lastName”
const textNode = document.createTextNode('This is last name');
elementLastName.replaceChild(textNode, elementLastName.childNodes[0]);
document.getElementById('child-node-of-last-name-update').innerHTML =
  elementLastName.innerHTML;

// get first and last child of main-content
const firstOfMainContent = mainContent.firstChild;
console.log('firstOfMainContent', firstOfMainContent);
const lastOfMainContent = mainContent.lastChild;
console.log('lastOfMainContent', lastOfMainContent);

// get next and previous sibling of lastName
const previousOfLastName = elementLastName.previousSibling;
console.log('previousOfLastName', previousOfLastName);
const nextOfLastName = elementLastName.nextSibling;
console.log('nextOfLastName', nextOfLastName);

// get parent node and node type of email
const email = document.getElementById('email');
const parentNodeOfEmail = email.parentNode;
console.log('parentNodeOfEmail', parentNodeOfEmail);
const nodeTypeOfEmail = email.nodeType;
console.log('nodeTypeOfEmail', nodeTypeOfEmail);








