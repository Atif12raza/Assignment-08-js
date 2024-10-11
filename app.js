// Section 1
// chapter (function)
// Q1
// function displayDateTime() {
//     var now = new Date();
//    var dateTimeString = now.toLocaleString();
//    alert (`Current Date and Time: ${dateTimeString}`);
// }

// displayDateTime();
// Q2
// function greetUser(firstName, lastName) {
//     var fullName = `${firstName} ${lastName}`;
//     console.log(`Hello, ${fullName}`);
// }
// greetUser('Atif', 'raza')
// Q3
// function addTwoNumbers() {
//    var num1 = prompt("Enter the first number:");
//     var num2 = prompt("Enter the second number:");
//     var sum = Number(num1) + Number(num2);
//     return sum;
// }
// var result = addTwoNumbers();
// console.log(`The sum is: ${result}`);
// Q4
// function calculator(num1, num2, operator) {
//    switch (operator) {
//        case '+':
//             return +num1 + +num2;
//        case '-':
//            return +num1 - +num2;
//         case '*':
//             return +num1 * +num2;
//         case '/':
//             return +num1 / +num2; 
//        default:
//             return 'Invalid operator';
//    }
// }

// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// var operator = prompt("Enter the operator (+, -, *, /):");

// var result = calculator(num1, num2, operator);
// alert("The result is: " + result);
// Q5
// function square(number) {
//    return number * number;
// }
// var result = square(5);
// console.log(result);

// Q6
// function factorial(n) {
//     if (n < 0) {
//         return 'Error: Negative numbers do not have a factorial';
//     }
//    var result = 1;
//    for (let i = 2; i <= n; i++) {
//         result *= i;
//     }
//    return result;
// }
// var result = factorial(5);
// console.log(result);
// Q7
// function displayCounting(start, end) {
//     var counting = "";
//     for (var i = start; i <= end; i++) {
//        counting += i + " ";
//     }
//    document.write(counting); 
// }

// var startNumber = prompt("Enter the start number:");
// var endNumber = prompt("Enter the end number:");

// displayCounting(startNumber, endNumber);

// Q8
// function calculateHypotenuse(base, perpendicular) {
//     function computeHypotenuse() {
//        return Math.sqrt(base * base + perpendicular * perpendicular);
//     }
//     return computeHypotenuse();
// }
// var hypotenuse = calculateHypotenuse(3, 4);
// console.log(hypotenuse);
// Q9
// 1(Arguments as value)
// function calculateArea(width, height) {
//     return width * height;
// }

// var areaWithValues = calculateArea(5, 10);
// console.log(areaWithValues)

// 2(Arguments as variables)
// function calculateArea(width, height) {
//     return width * height;
// }

// var width = 5;
// var height = 10;
// var areaWithVariables = calculateArea(width, height);
// console.log(areaWithVariables)

// Q10
// function isPalindrome(str) {
//     var cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// Q11
// function capitalizeFirstLetters(str) {
//    return str.split(' ')
//              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//               .join(' ');
// }

// var exampleString = 'the quick brown fox';
// var result = capitalizeFirstLetters(exampleString);
// console.log(result);

// Q12

// function findLongestWord(str) {
//    var words = str.split(' ');
//     var longestWord = '';

//     for (var word of words) {
//        if (word.length > longestWord.length) {
//            longestWord = word;
//        }
//    }

//    return longestWord;
// }

// var exampleString = 'Web Development Tutorial';
// var result = findLongestWord(exampleString);
// console.log(result);

// Q13
// function countLetterOccurrences(str, letter) {
//    var count = 0;

//     for (var char of str) {
//         if (char === letter) {
//            count++;
//        }
//     }

//    return count;
// }

// var exampleString = 'JSResourceS.com';
// var letterToCount = 'o';
// var result = countLetterOccurrences(exampleString, letterToCount);
// console.log(result);
// Q14
// function  calcCircumference(r) {
//     var pie = 3.142
//     var answer = 2*pie*r
//     var result = answer.toFixed(3)
//     console.log(`The circumference is ${result}`);
// }

// var circumferencevalue = prompt('Enter the value of Circumference')
// calcCircumference(circumferencevalue)


// function  areaOfCircle(r) {
//     var pie = 3.142
//     var answer = pie * (r * r)
//     var result = answer.toFixed(3)
//     console.log(`The area of circle is ${result}`);
// }

// var radius = prompt('Enter the value of radius')
// areaOfCircle(radius)

// Section 2 (FUNCTIONS, SWITCH STATEMENTS, WHILE... DO- WHILE LOOPS)
// Q1
// function power(a, b) {
//     let result = 1;
//     let i = 0;
    
//     while (i < b) {
//         result *= a;
//         i++;
//     }
    
//     return result;
// }

// console.log(power(2, 3));

// Q2
// function isLeapYear(year) {
//     switch (true) {
//         case (year % 400 === 0):
//             return `${year} is a leap year`;
//         case (year % 100 === 0):
//             return `${year} is not a leap year`;
//         case (year % 4 === 0):
//             return `${year} is a leap year`;
//         default:
//             return `${year} is not a leap year`;
//     }
// }

// var year = 2024;
// console.log(isLeapYear(year));
// Q3
// function calculateTriangleArea(a, b, c) {
//     let S = (a + b + c) / 2;

//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//     return area;
// }

// let a = 5, b = 6, c = 7; 
// let area = calculateTriangleArea(a, b, c);
// console.log("The area of the triangle is: " + area);
// Q4
// function calculateAverage(marks1, marks2, marks3) {
//     return (marks1 + marks2 + marks3) / 3;
// }

// function calculatePercentage(marks1, marks2, marks3, totalMarks) {
//     var obtainedMarks = marks1 + marks2 + marks3;
//     return (obtainedMarks / (totalMarks * 3)) * 100;
// }

// function mainFunction(marks1, marks2, marks3, totalMarks) {
//     var average = calculateAverage(marks1, marks2, marks3);
//     var percentage = calculatePercentage(marks1, marks2, marks3, totalMarks);

//     console.log("Average Marks: " + average);
//     console.log("Percentage: " + percentage + "%");
// }

// var marks1 = 85; 
// var marks2 = 90;  
// var marks3 = 88; 
// var totalMarks = 100;

// mainFunction(marks1, marks2, marks3, totalMarks);
// Q5
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   console.log(customIndexOf("hello", "e"));
//   console.log(customIndexOf("hello", "l")); 
//   console.log(customIndexOf("hello", "z"));
// Q6
// function removeVowels(sentence) {
//     if (sentence.length > 25) {
//          new Error("Sentence must not exceed 25 characters.");
//     }

//     return sentence.replace(/[aeiouAEIOU]/g, '');
// }

// var inputSentence = "This is an example sentence.";
// var result = removeVowels(inputSentence);
// console.log(result); 

// Q7
// function countVowelPairs(text) {
//     var vowels = "aeiouAEIOU";
//     var count = 0;

//     for (var i = 0; i < text.length - 1; i++) {
//         var char1 = text[i];
//         var char2 = text[i + 1];

//         switch (true) {
//             case (vowels.includes(char1) && vowels.includes(char2)):
//                 count++;
//                 break;
//             default:
//                 break;
//         }
//     }

//     return count; 
// }

// const sentence = "Pleases read this application and give me gratuity";
// const result = countVowelPairs(sentence);
// console.log(`Number of vowel pairs: ${result}`);
// Q8
// function kmToMeters(km) {
//     var meters = km * 1000;
//     console.log(`${km} km is equal to ${meters} meters`);
//   }
  
//   function kmToFeet(km) {
//     var feet = km * 3280.84;
//     console.log(`${km} km is equal to ${feet.toFixed(2)} feet`);
//   }
  
//   function kmToInches(km) {
//     var inches = km * 39370.08;
//     console.log(`${km} km is equal to ${inches.toFixed(2)} inches`);
//   }
  
//   function kmToCentimeters(km) {
//     var centimeters = km * 100000;
//     console.log(`${km} km is equal to ${centimeters} centimeters`);
//   }
  
//   var distanceInKm = parseFloat(prompt("Enter the distance between two cities in km: "));
  
//   kmToMeters(distanceInKm);
//   kmToFeet(distanceInKm);
//   kmToInches(distanceInKm);
//   kmToCentimeters(distanceInKm);
// Q9
// function calculateOvertimePay(hoursWorked) {
//     var regularHours = 40;
//     var overtimeRate = 12.00;
//     var overtimePay = 0;

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         overtimePay = overtimeHours * overtimeRate;
//     }

//     return overtimePay;
// }

// var hoursWorked = prompt("Enter the number of hours worked:");
// var overtimePay = calculateOvertimePay(parseInt(hoursWorked));

// console.log(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);

// Q10
// function calculateNotes(amount) {
//     var notes100 = Math.floor(amount / 100);
//     amount %= 100; 
//     var notes50 = Math.floor(amount / 50); 
//     amount %= 50; 

//     var notes10 = Math.floor(amount / 10); 

//     return {
//         notes100,
//         notes50,
//         notes10
//     };
// }

// var amountToWithdraw = prompt("Enter the amount to withdraw (in hundreds):");
// var amountInHundreds = parseInt(amountToWithdraw) * 100; 

// if (amountInHundreds > 0) {
//     var notes = calculateNotes(amountInHundreds);
//     console.log(`Total Notes to be Given:`);
//     console.log(`100 Rs Notes: ${notes.notes100}`);
//     console.log(`50 Rs Notes: ${notes.notes50}`);
//     console.log(`10 Rs Notes: ${notes.notes10}`);
// } else {
//     console.log("Please enter a valid amount.");
// }


// Section 3
// chapter (Event)
// Q1
//  function showAlert() {
//            alert("You clicked the link!");
//        }
// Q2
// function showAlert(message) {
//     alert(message);
// }
// Q3
// function deleteRow(button) {
//     var row = button.parentElement.parentElement;
//     var studentName = row.cells[1].innerText; 
//     var confirmation = confirm(`Are you sure you want to delete ${studentName}'s record?`);

//     if (confirmation) {
//         row.remove();
//         alert(`${studentName}'s record has been deleted.`); 
//     }
// }
// Q4
// function changeImage() {
//     document.getElementById("myImage").src = "https://cdn.mos.cms.futurecdn.net/5wDTVRZKp9R9XBGanPzCND-1200-80.jpg";
// }

// function resetImage() {
//     document.getElementById("myImage").src = "https://swisscomvbc.scene7.com/is/image/Swisscom/scs-11068187-de-000?wid=400&hei=400&fmt=webp-alpha&qlt=90";
// }
// Q5
 


//section (4)
//Chapter 31 - 34 (Date & Time)
//Q1
//dObj = new Date();
//console.log(dObj);


//Q2
//dStr = new Date().toString();
//console.log(dStr);


//Q3

//d = new Date();
//day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d.getDay()];
//console.log(day);



//Q4
// Create a Date object
//d = new Date();

//dayIndex = d.getDay();

//dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//alert(dayNames[dayIndex]);

//Q5
//d = new Date(); 
//year = d.getFullYear(); 
//month = d.getMonth() + 1;
//date = d.getDate();
//hours = d.getHours();
//minutes = d.getMinutes();
//seconds = d.getSeconds();
//milliseconds = d.getMilliseconds()
//dayIndex = d.getDay();

//console.log(Year: ${year}, Month: ${month}, Date: ${date}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}, Milliseconds: ${milliseconds}, Day Index: ${dayIndex});


//Q6
//later = new Date(2020, 11, 31); 
//console.log(later);


//Q7
//dateObj = new Date(1992, 1, 2);
//console.log(dateObj);


//Q8
//alert(new Date() - new Date(1980, 0, 1)); 

//Q9
//var date = new Date();

//date.setFullYear(2025);

//console.log(date);


//Q10
//function changeMonthToJanuary(date) {
    //date.setMonth(0); 
   // return date;
//}

//var myDate = new Date(); 
//console.log("Before change:", myDate); 

//var updatedDate = changeMonthToJanuary(myDate);
//console.log("After change:", updatedDate); 

//Q11
//var date = new Date('2023-10-11');
//date.setDate(date.getDate() + 2);
//console.log(date);


//Q12



//Q13

//Q14

//Chapter 35 - 37 (Functions)
//Q1
//function displayAlert() {
  //alert("Atif raza")
//}
//displayAlert()

//Q2

//function askName() {
    //userName = prompt("Enter name");
//    alert(userName)
//}
//askName()
//Q3
//function function1() {
   // console.log("Function 1 called");
//}

//function function2() {
    //console.log("Function 2 called");
//}

//function mainFunction() {
    //function1(); 
    //function2(); 
//}

//mainFunction();


//Q4
//function askAndDisplayName() {
   // var userName = prompt("Enter name"); 
    //alert("Hello, " + userName + "!")
//}

//askAndDisplayName();

//Q5
//function concat(a, b, c) {
   // return a + b + c;
//}

//var result = concat("A", "B", "C"); 
//console.log(result); 

//Q6
//function concatenateAndAssign(param1, param2) {
    //result = param1 + param2; 
//}
//concatenateAndAssign("Hello, ", "World!");
//console.log(result); 



//Q7
//function multiplyAndAssign(param1, param2, param3) {
//product = param1 * param2 * param3;
//}
//multiplyAndAssign(2, 3, 4);
//console.log(product);


//Q8
//function calculateAverage(numbers) {
    //var sum = 0; 
    //for (let num of numbers) {
      //  sum += num; 
    //}
    //return sum / numbers.length;
//}
//var average = calculateAverage([10, 20, 30, 40]);
//console.log(average); 


//Q9
//function sum(a, b) {
   // return a + b;
//}
//console.log(sum(5, 3));
//Q10
        //function average(numbers) {
            //var sum = 0;
            //for (var i = 0; i < numbers//.length; i++) {
               // sum += numbers[i];
            //}
        //    return sum  numbers.length;
        //}

       // var result = average([1, 2, 3, 4, 5]);
        //console.log(result);
//Q11
//function average(numbers) {
           // var sum = 0;
           // for (var i = 0; i < numbers.length; i++) {
                //sum += numbers[i];
            //}
         // return sum / numbers.length;
       // }

       // var result = average([1, 2, 3, 4, 5]);
        //console.log(result);
//Q12
       // function letterCount(word) {
           // var count = {};
           // for (var i = 0; i < word.length; i++) {
               // const letter = word[i];
                //if (count[letter]) {
                   // count[letter]++;
                //} else {
                   // count[letter] = 1;
             // }
          //  }
          //  return count; 
       // }

       // var result = letterCount("hello");
        //console.log(result);
//Q13
//Q14
//Q15
        //function isWordPresent(word) {
            //var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
           // return array.includes(word);
       // }

        //console.log(isWordPresent('hassan'));
       // console.log(isWordPresent('john'));
       
       
       
//Q16
       // function repeatLetter(letter) {
            //return letter.repeat(10);
        //}
       // console.log(repeatLetter('a'));
//Q17
       //function reverseArray(arr) {
           // return arr.reverse();
        //}

        //var originalArray = ['a', 'b', 'c', 'd', 'e'];
       // var reversedArray = reverseArray(originalArray);
       //console.log(reversedArray);
       
       
//Chapter 38 (Local vs. Global
//Variables)       
//Q1
//function localVariable() {
   // var localVar = "I am a local variable";
    //console.log(localVar);
//}
//localVariable();

//Q2
//var globalVar = "I am a global variable"//;

//function accessGlobalVariable() {
  //  console.log(globalVar);
//}

//accessGlobalVariable();

//Chapter 39, 40 (Switch Statements)
//Q1
//var variable = 'value2'; 

        //switch (variable) {
          //  case 'value1':
                //console.log("Action for value1");
                //break;
          //case 'value2':
               // console.log("Action for value2");
              //  break;
           // case 'value3':
           //     console.log("Action for value3");
                //break;
            //default:
                //console.log("Default action");
      //  }
      
    //  Q2
           // var cityName = prompt("Enter a city name:"); 
    //switch (cityName) {
    //case 'New York':
        //alert("Welcome to New York!");
       // break;
   // case 'Los Angeles':
        //alert("Welcome to Los Angeles!");
       // break;
   // case 'Chicago':
      //  alert("Welcome to Chicago!");
       // break;
    //default:
        //alert("City not recognized.");
//}