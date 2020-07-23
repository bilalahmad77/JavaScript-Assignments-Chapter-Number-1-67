// Chapter # 21-25 and Task # 1

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName + " " + lastName;
// alert("Welcome to our website" +" "+fullName);

// Chapter # 21-25 and Task # 2

// var favoriteMobileModel = prompt("Enter your favorite mobile phone model");
// var mobileNameLength = favoriteMobileModel.length;
// document.write("My favorite phone is: " + favoriteMobileModel);
// document.write("<br>Length of String: " + mobileNameLength );

// Chapter # 21-25 and Task # 3

// var str = "Pakistani";
// var strLength = str.length;
// for (var i=0;i<=strLength;i++)
// {
//     if(str.slice(i,i+1) === "n") 
//     {
//         document.write("<br>String: "+str);
//         document.write("<br>index of 'n': "+ i);
//         // break; suppose if we want to find index of
//         // all index of word 'a' then we will not 
//         // break the loop
        
//     }
// }

// Chapter # 21-25 and Task # 4

// var text = "Hello World";
// document.write("String: " + text);
// var lastCharIndex = text.lastIndexOf("l");
// document.write("<br>Last index of 'l': " + lastCharIndex);

// Chapter # 21-25 and Task # 5

// var text = "Pakistani";
// //var charAtIndex = text.slice(3,4);
// // OR
// var charAtIndex = text.charAt(3);
// document.write("String: " + text);
// document.write("<br>Character at index 3: ",charAtIndex);

// Chapter # 21-25 and Task # 6

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(" " + lastName);
// alert("Welcome to our website" + " " + fullName);


// Chapter # 21-25 and Task # 7
// var city ="Hyderabad"
// document.write("City: " + city);
// var firstChar = city.indexOf("Hyder");
// if (firstChar !== -1) {
// city = city.slice(0, firstChar) + "Islam" + city.slice(firstChar + 5);
// document.write("<br>After replacement: " + city);
// }


// Chapter # 21-25 and Task # 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newText = message.replace(/and/g, "&");
// document.write(newText);

// Chapter # 21-25 and Task # 9

// var string = "472";
// var stringType =typeof(string);
// document.write("Value: " + string);
// document.write("<br>Type: " + stringType);

// var convetToInt = Number(string);
// document.write("<br>Value: " + convetToInt);
// var numberType = typeof(convetToInt);
// document.write("<br>Type: " + numberType);

// Chapter # 21-25 and Task # 10

// var word = prompt("Please type a word", "Type word here");
// var upperCase = word.toUpperCase();
// document.write("User input: " + word);
// document.write("<br>Upper case: " + upperCase);

// Chapter # 21-25 and Task # 11

// var word = prompt("Please type a word", "Type word here");
// var firstChar = word.slice(0,1);
// var otherChars = word.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChars = otherChars.toLowerCase();
// var titleCase = firstChar + otherChars;
// document.write("User input: " + word);
// document.write("<br>Title case: " + titleCase);


// Chapter # 21-25 and Task # 12

// var num = 35.36;
// var convetToString = num.toString();
// document.write("Number: " + num);
// var decimal = convetToString.indexOf(".");
// if (decimal !== -1) {
// convetToString  = convetToString .slice(0,decimal) + "" + convetToString .slice(decimal + 1);
// document.write("<br>Result: " + convetToString );
// }


// Chapter # 21-25 and Task # 13

// var userName = prompt("Please enter username");
// var charCode;
// for (var i = 0; i < userName .length; i++) 
// {
//     var charCode = userName .charCodeAt(i);
//     if ((charCode === 33) || (charCode === 44) || (charCode === 46) || (charCode === 64))
//     {
//         alert("Please enter a valid username");
//     }
// }


// Chapter # 21-25 and Task # 14

// var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// var convertToLower = search.toLowerCase();
// if (bakeryItems .indexOf(convertToLower) != -1)
// {
//     document.write(convertToLower + " is <strong>available</strong> at index " + bakeryItems .indexOf(convertToLower) + " in our bakery");
// }

// else
// {
//     document.write("We are sorry " + convertToLower + " is <strong>not available</strong> in our bakery");
// }


// Chapter # 21-25 and Task # 15

// var password = prompt("Please Enter a password");
// var charCode;
// for (var i = 0; i < password.length; i++) 
// {
//     var charCode = password.charCodeAt(i);
//     if (!(charCode > 47 && charCode < 58) 
//     && !(charCode > 64 && charCode < 91) 
//     && !(charCode > 96 && charCode < 123))
        
//     {
//         document.write("Password should contain alphabets and numbers");
//         document.write("<br>Please enter a valid password");
//     }
    
//     if (password.length < 6)
//     {
//         document.write("Password must be at least 6 characters long");
//         document.write("<br>Please enter a valid password");
//         break;
        
//     }

//     if (password.charCodeAt(0) > 47 && password.charCodeAt(0) < 58 )
//     {
//         document.write("Password should not start with a number");
//         document.write("<br>Please enter a valid password");
//         break;
//     }
// }


// Chapter # 21-25 and Task # 16

// var university = "University of Karachi";
// var splitUni = university.split("");
// for (var i=0;i<splitUni.length;i++)
// {
//     document.write("<br>" + splitUni[i]);
// }


// Chapter # 21-25 and Task # 17

// var userInput = prompt("Enter Some Text");
// var lastChar = userInput.charAt(userInput.length - 1);
// document.write("User Input: " + userInput);
// document.write("<br>Last character of input: " + lastChar);


// Chapter # 21-25 and Task # 18

// var string = "The quick brown fox jumps over the lazy dog.";
// var stringInLowerCase = string.toLowerCase();
// var count = (stringInLowerCase.match(/the/g)).length;
// document.write("Text: " + string);
// document.write("<br>There are "+count+" occurance(s) of the word 'the'");

//--------------------------------------------------------------------------


// Chapter # 26-30 and Task # 1

// var num = +prompt("Enter a positiver integer");
// var roundOffValue = Math.round(num);
// var floorValue = Math.floor(num);
// var ceilValue = Math.ceil(num);
// document.write("number: "+num);
// document.write("<br>round Off value: "+roundOffValue);
// document.write("<br>floor value: "+floorValue);
// document.write("<br>ceil value: "+ceilValue);

// Chapter # 26-30 and Task # 2

// var num = parseFloat(prompt("Enter a negative floating point number"));
// var roundOffValue = Math.round(num);
// var floorValue = Math.floor(num);
// var ceilValue = Math.ceil(num);
// document.write("number: "+num);
// document.write("<br>round Off value: "+roundOffValue);
// document.write("<br>floor value: "+floorValue);
// document.write("<br>ceil value: "+ceilValue);

// Chapter # 26-30 and Task # 3

// var num = +prompt("Find an absolute value","Enter a number");
// var absoluteValOfNum = Math.abs(num);
// document.write("The absolute value of " + num + " is " + absoluteValOfNum);

// Chapter # 26-30 and Task # 4

// var dice = Math.floor(Math.random() * 6) + 1;
// if (dice === 1 || dice === 2|| dice === 3 || dice === 4 || dice === 5 || dice === 6)
// {
//     document.write("random dice value: " + dice);
// }

// Chapter # 26-30 and Task # 5

// var coin = Math.floor(Math.random() * 2) +1;
// if (coin === 1 )
// {
//     document.write("random coin value: Tails");
// }
// else
// {
//     document.write("random coin value: Heads");
// }



// Chapter # 26-30 and Task # 6

// var random = Math.floor(Math.random() * 100) + 1;
// document.write(random);

// Chapter # 26-30 and Task # 7

// var weight = parseFloat(prompt("Enter your weight in Kilograms"));
// var totalWeight = weight + 8.3;
// document.write("The weight of user is " + totalWeight + " kilograms");

// Chapter # 26-30 and Task # 8
// var guess = +prompt("Enter a number between 1 and 10");
// var secretNumber = Math.floor(Math.random() * 10) + 1;
// if (guess === secretNumber) 
// {
// alert("Well done! Correct answer");
// }
// if (guess !== secretNumber) 
// {
//     alert("Try again!");
// }

//-------------------------------------------------------------



//Chapter # 31-34 Task # 1

// var currentDateAndTime = new Date();
// document.write(currentDateAndTime);

// Chapter # 31-34 Task # 2

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var today = new Date();
// var theMonth = today.getMonth();
// var nameOfMonth = months[theMonth].toString();
// alert("Current Month: " +nameOfMonth);

// Chapter # 31-34 Task # 3

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay]
// var dayShortName = nameOfToday.slice(0,3);
// alert("Today is " + dayShortName);


// Chapter # 31-34 Task # 4

// var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday === "Saturday" || nameOfToday === "Sunday")
// {
//     alert("It’s Fun day");
// }

// Chapter # 31-34 Task # 5

// var now = new Date();
// var theDate = now.getDate();
// if (theDate < 16)
// {
//     alert("First fifteen days of the month");
// }

// else

// {
//     alert("Last days of the month");
// }

// Chapter # 31-34 Task # 6 

// var backdate =  new Date("Jan. 1, 1970");
// var today = new Date();
// var msToday = today.getTime();
// var msBackDate = backdate.getTime();
// var msDiff =  msToday - msBackDate;
// var minutesElapsed = msDiff/ (1000 * 60);
// document.write("Current Date: "+today);
// document.write("<br>Elapsed milliseconds since January 1, 1970: "+msDiff);
// document.write("<br>Elapsed Minutes since January 1, 1970: "+minutesElapsed);



// Chapter # 31-34 Task # 7

// var today = new Date();
// var getHours = today.getHours();
// if (getHours <=12 )
// {
//     alert("It's AM");
// }
// else
// {
//     alert("It's PM");
// }

// Chapter # 31-34 Task # 8

// var laterDate = new Date();
// laterDate.setFullYear(2020);
// laterDate.setMonth(11);
// laterDate.setDate(31);
// laterDate.setHours(00);
// laterDate.setMinutes(00);
// laterDate.setSeconds(00);
// document.write("Later Date:" + laterDate);


// Chapter # 31-34 Task # 9

// var today = new Date();
// var istRamadanDay = new Date("June 18, 2015");
// var msToday = today.getTime();
// var msIstRamadanDay = istRamadanDay.getTime();
// var msDiff =  msToday - msIstRamadanDay;
// var dayDiff = msDiff / (1000 * 60 * 60 * 24);
// dayDiff = Math.floor(dayDiff);
// alert(dayDiff + " days have passed since Ist Ramadan, 2015");

// Chapter # 31-34 Task # 10

// var refDate = new Date();
// refDate.setFullYear(2015);
// refDate.setMonth(11);
// refDate.setDate(5);
// refDate.setHours(22);
// refDate.setMinutes(50);
// refDate.setSeconds(16);

// var begDate = new Date();
// begDate.setFullYear(2015);
// begDate.setMonth(0);
// begDate.setDate(1);
// begDate.setHours(00);
// begDate.setMinutes(00);
// begDate.setSeconds(00);

// var sRefDate = refDate.getTime();
// var sBegDate = begDate.getTime();
// var sDiff =  sRefDate - sBegDate;
// var secondsDiff = sDiff / (1000 * 60 )
// secondsDiff = Math.ceil(secondsDiff);
// document.write("On reference date " + refDate +",");
// document.write("<br>"+secondsDiff + " days have passed since beginning of 2015");

// Chapter # 31-34 Task # 11

// var currentDate = new Date();
// document.write("Current date: " + currentDate);
// currentDate.setHours(currentDate.getHours() -1);
// document.write("<br>1 hour ago, it was "+currentDate);

// Chapter # 31-34 Task # 12

// var currentDate = new Date();
// alert("Current date: " + currentDate);

// // OR 
// //document.write("Current date: " + currentDate);

// currentDate.setFullYear(currentDate.getFullYear() -100);

// // OR 
// //document.write("<br>100 years back, it was " + currentDate);

// alert("100 years back, it was " + currentDate);


// Chapter # 31-34 Task # 13

// var age = +prompt("Enter age:");
// var today = new Date();
// var currentYear = today.getFullYear();
// var yearDiff =  currentYear- age;
// document.write("Your age is " + age);
// document.write("<br>Your birth year is " + yearDiff);

// Chapter # 31-34 Task # 14

// var customerName = prompt("Enter Customer Name","Enter customer name here");
// var currentMonth = prompt("Enter Current Month", "For Example: January");
// var numberOfUnits = +prompt("Enter Number of Units", "Enter number of units here")

// var chargesPerUnit = 16;
// var latePaymentSurcharge = 350;
// var netAmountPayableWdd = numberOfUnits * chargesPerUnit;
// var grossAmountPayable = netAmountPayableWdd + latePaymentSurcharge;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("<br>Customer Name: " + "<b>" + customerName + "</b>");
// document.write("<br>Month: " + "<b>" + currentMonth + "</b>");
// document.write("<br>Number of units: " + "<b>" + numberOfUnits + "</b>" );
// document.write("<br><br><br>Charges per unit: " + "<b>" + chargesPerUnit.toFixed(2) + "</b>");
// document.write("<br>Net Amount Payable (within Due Date): " + "<b>" + netAmountPayableWdd.toFixed(2) + "</b>");
// document.write("<br>Late Payment Surcharge: " + "<b>" + latePaymentSurcharge.toFixed(2) + "</b>");
// document.write("<br>Gross Amount Payable (after Due Date) " + "<b>" + grossAmountPayable.toFixed(2) + "</b>");

// -----------------------------------------------------------------------------------------------------------------------

// Chapter # 35-38 Task # 1

// function tellDateTime()
// {
   
//     var dateTime = new Date();
//     document.write(dateTime);
// }

// tellDateTime();

// Chapter # 35-38 Task # 2

// function fullName()
// {
//     var firstName = prompt("Enter first name");
//     var lastName = prompt("Enter last name");
//     var fullName = firstName + " " + lastName;
//     document.write("Hello " + fullName);
// }

// fullName();

// Chapter # 35-38 Task # 3

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");

// function addition(num1,num2)
// {
//     return num1 + num2 ;
// }

// var sum = addition(num1,num2);
// document.write("Sum of " +num1+ " + " +num2 + " = " + sum);


//Chapter # 35-38 Task # 4

// var firstNumber = +prompt("Enter First Number");
// var secondNumber = +prompt("Enter Second Number");
// var operator= prompt("Enter Operator");
// function calculator (num1,num2,operator)
// {
//     if (operator === "+")
//     {
//         return num1 + num2;
//     }

//     else if (operator === "-")
//     {
//         return num1 - num2;
//     }
//     else if (operator === "*")
//     {
//         return num1 * num2;
//     }
//     else if (operator === "/")
//     {
//         return num1 / num2;
//     }
//     else if (operator === "%")
//     {
//         return num1 % num2;
//     }
// }
// var result = calculator(firstNumber,secondNumber,operator);
// document.write("Result: " + result);

//Chapter # 35-38 Task # 5

// var num = +prompt("Enter a number");
// function square(num)
// {
//     return num * num;
// }
// var result = square(num);

// document.write("Square of " +num+ " is " + result);


//Chapter # 35-38 Task # 6

// var findFactorial = +prompt("Enter a number");
// function factorial(num)
// {
//     var fact =1;
//     for (var i=num;i>=1;i--)
//     {
//     fact = fact * i;
//     }
//     return fact;
// }
// var result = factorial(findFactorial);
// document.write("Factorial of " + findFactorial+ " is " + result);

//Chapter # 35-38 Task # 7

// var startNumber = +prompt("Enter start number");
// var endNumber = +prompt("Enter end number");
// function counting(startNumber,endNumber)
// {
//     for (var i=startNumber; i<=endNumber;i++)
//     {
//         document.write(i + "<br>");
//     }    
// }
// counting(startNumber,endNumber);


// Chapter # 35-38 Task # 8

// var base = +prompt("Enter base");
// var per = +prompt("Enter perpendicular");

// var  baseResult;
// var  perResult;
// var hypotenuse;

// function calculateHypotenuse()
// {
//     calculateSquare();
//     function  calculateSquare()
//     {

//       baseResult = base * base;
//       perResult = per * per;
         
//     }
    
//     hypotenuse = baseResult + perResult;
//     return hypotenuse;
    
// }

// document.write("Hypotenuse = "+calculateHypotenuse());


//Chapter # 35-38 Task # 9

// function area(width,height)
// {
//     return width * height;
// }
// var result = area(4,5);
// document.write("Area of rectangle is " +result);

//Chapter # 35-38 Task # 10

// var word = prompt("Enter a word");
// var test = "";
// for(var i = word.length-1;i>=0;i--)
// {
//     test+= word[i];
// }

// if (word == test)
// {
//     alert(word + " is a palindrome");
// }

// else
// {
//     alert(word + " is not a palindrome");

// }


// Chapter # 35-38 Task # 11

// var str = prompt("Please type a string", "Type String here");
// function titleCase(str)
// {
//   var splitString = str.split(' ');
//   var newArray = [];
    
//   for(var i = 0; i < splitString.length; i++){
//     newArray.push(splitString[i].charAt(0).toUpperCase()+splitString[i].slice(1));
//   }
//   return newArray.join(' ');
// }
// var strInTitleCase = titleCase(str);
// alert(strInTitleCase);

// Chapter # 35-38 Task # 12

// var str = prompt("Please type a string", "Type String here");
// function longestWord(str) 
// {
//     var words = str.split(' ');
//     var longestWord = '';

//     for (var i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
//     return longestWord;
// }
// alert("Longest word Within String is "+longestWord(str));

// Chapter # 35-38 Task # 13


// function count_char(str, letter) 
// {
//  var letterCount = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letterCount += 1;
//       }
//   }
//   return letterCount;
// }

// var specifiedLetterOccurance = count_char('JSResourceS.com', 'o');
// alert("The specified letter occurance is " + specifiedLetterOccurance + " time(s) in the specified string");


// Chapter # 35-38 Task # 14

// function calcCircumference(radius)
// {
//   return 2 * 3.141592653589793238  * radius; // OR using Math object
//   //return 2 * Math.PI * radius;
  
// }

// function calcArea(radius)
// {
//   return 3.141592653589793238 * radius * radius; // OR using Math object
//   //return Math.PI * radius * radius;
  
// }

// var circumference= calcCircumference(4);
// var area = calcArea(4);

// document.write("The circumference is " + circumference);
// document.write("<br>The area is " + area);






























    









































 




