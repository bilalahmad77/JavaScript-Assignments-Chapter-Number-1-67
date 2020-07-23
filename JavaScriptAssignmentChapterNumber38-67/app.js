// // Chapter # 38-42 and Task # 1

// var base = prompt("Enter the base number:")
// var exp = prompt("Enter the exponent number:")
// function power(base,exp)
// {
//     var beAns =1
//     for (var i=1;i<=exp;i++)
//     {
//         beAns=beAns*base;
//     }
//     return beAns;
// }

// var beResult=power(base,exp);
// alert(base +" raised to "+exp +" = "+beResult);



// // Chapter # 38-42 and Task # 2

// var year = prompt("Leap Year or Not","Enter Year eg. 2020:");
// yearChecking(year);
// function yearChecking(year)
// {
//     if((year%4 == 0) && (year%100!=0) || (year%400==0)) 
//     {
//         alert(year+" is a leap year"); 
//     }
//     else
//     {
//         alert(year+" is NOT a leap year");  
//     }
// }

// // Chapter # 38-42 and Task # 3

// var a = +prompt("Length of side a:");
// var b = +prompt("Length of side b:");
// var c = +prompt("Length of side c:");
// var s = (a + b + c)/2;
// function areaOfRect(a,b,c)
// {
//     return Math.sqrt(s*(s-a)*(s-b)*(s-c));
// }
// alert("Area of triangle = "+areaOfRect(a,b,c));



// // Chapter # 38-42 and Task # 4

// var subject1_marks = +prompt("Enter first subject marks:");
// var subject2_marks = +prompt("Enter second subject marks:");
// var subject3_marks = +prompt("Enter third subject marks:");
// var total_marks = 300;
// var obtained_marks = 0;

// function main(subject1_marks,subject2_marks,subject3_marks)
// {
//     obtained_marks = subject1_marks+subject2_marks+subject3_marks;
//     alert("Average="+average(obtained_marks).toFixed(2));
//     alert("Percentage="+percentage(obtained_marks).toFixed(2));
// }

// function average(obtained_marks)
// {
//     return obtained_marks/3;
// }

// function percentage(obtained_marks)
// {
//     return (obtained_marks/total_marks) * 100;
// }

// main(subject1_marks,subject2_marks,subject3_marks)



// // Chapter # 38-42 and Task # 5

// Solution 1 in case of one charater

// const ch ='a';
// var chIndex;
// var index=0;
// function findingCharIndex(ch)
// {
//   if (ch[index] === 'a')
//     chIndex = index;
// alert("Index of a is: "+chIndex);
// }
// findingCharIndex(ch)

// Solution 2 in case of array of charaters

// const ch= ['a', 'b', 'c'];
// var chIndex;
// var index;
// function findCharIndex(ch)
// {
// for(index = 0; index < ch.length; index ++) {
//   if (ch[index] === 'c')
//     chIndex = index;
// }
// alert("Index of c is: "+chIndex);
// }

// findCharIndex(ch)


// // Chapter # 38-42 and Task # 6
// var sentence = prompt("Delete Vowels","Please enter sentence");
// var result = "";
// if (sentence.length<25)
// {
// document.write("<b>Orignal Sentence:</b> "+sentence );
// document.write("<br>");
// document.write("<b>Vowels Removed:</b> "+removeVowel(sentence));
// }

// else
// {
//     alert("Sentence length should be less than 25 characters");
    
// }
// function removeVowel(sentence)
// {
//     for (var i=0;i<sentence.length;i++)
//     {
//         var c= sentence[i];
//         if("aeiou".match(c.toLowerCase())==null )
//         {
//             result += c;
//         }
       
//     }
//     return result;
// }


// // Chapter # 38-42 and Task # 7

// function findTwoVowels() {
//     var sentence = "Pleases read this application and give me gratuity";
//     var chars = sentence.toLowerCase().split("");
//     var counter = 0;
//     for(var i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];
//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         counter++
//       }
//     }
//     return counter;
//   }
  
//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }
  
//   var found = findTwoVowels();
//   alert("Number of occurrences of any two vowels in sentence are: "+found);  



// // Chapter # 38-42 and Task # 8

// var distanceInKm = +prompt("Enter distance between two cities (in km):");
// var  meter,feet,inches,centimeters;

// meter = distanceInMeter(distanceInKm)
// feet = distanceInFeet(distanceInKm)
// inches = distanceInInches(distanceInKm)
// centimeters = distanceInCentimeters(distanceInKm)

// alert("Distance in Meters: "+meter+'\n'+"Distance in Feets: "+feet+'\n'+"Distance in Inches: "+inches+'\n'+"Distance in Centimeters: "+centimeters)

// function distanceInMeter(distanceInKm)
// {
//     return distanceInKm * 1000;
// }

// function distanceInCentimeters(distanceInKm)
// {
//     return distanceInKm * 1000 * 100;
// }

// function distanceInFeet(distanceInKm)
// {
//     return distanceInKm * 3280.84;
// }

// function distanceInInches(distanceInKm)
// {
//     return distanceInKm *  39370.08;
// }




// // Chapter # 38-42 and Task # 9

// var regular_duty_hrs = 40 
// var overtime = +prompt("Enter working hrs:")
// function payment(overtime)
// {

// if(overtime > regular_duty_hrs)
// {
//     var extra_hours =overtime - regular_duty_hrs 
//     var overtime_payment = extra_hours * 12.00
//     alert("you worked for "+extra_hours+" extra hours and earned Rs. "+overtime_payment)
// }

// else
// {
//     alert("No extra hrs today!")
// }

// }
// payment(overtime)



// // Chapter # 38-42 and Task # 10

// var amount = prompt("Enter amount to withdraw:");
// document.write("<h1>you will have " + Math.floor(amount / 100)+" hundred notes " +Math.floor((amount %100) / 50)+" fifty notes "+Math.floor(((amount % 100) % 50) / 10)+" ten notes "+Math.ceil(((amount % 100) % 50) % 10)+" five notes </h1> ");

//##############################################################################################

// // Chapter # 43-48 and Task # 1 

// function welcome() {

//     alert("Welcome to our store")
// }

// // Chapter # 43-48 and Task # 2

// function greetTheUser()
// {
//     alert("Thanks for purchasing a phone from us")
// }

// Chapter # 43-48 and Task # 3


// function delRecord0()
// {
 
//     document.getElementById("row0").innerHTML ="";
// }

// function delRecord1()
// {
 
//     document.getElementById("row1").innerHTML ="";
// }

// function delRecord2()
// {
 
//     document.getElementById("row2").innerHTML ="";
// }

// function delRecord3()
// {
 
//     document.getElementById("row3").innerHTML ="";
// }
// function delRecord4()
// {
 
//     document.getElementById("row4").innerHTML ="";
// }
// function delRecord5()
// {
 
//     document.getElementById("row5").innerHTML ="";
// }
// function delRecord6()
// {
 
//     document.getElementById("row6").innerHTML ="";
// }
// function delRecord7()
// {
 
//     document.getElementById("row7").innerHTML ="";
// }
// function delRecord8()
// {
 
//     document.getElementById("row8").innerHTML ="";
// }
// function delRecord9()
// {
 
//     document.getElementById("row9").innerHTML ="";
// }


// Chapter # 43-48 and Task # 4
// solved in index.html

// Chapter # 43-48 and Task # 5

    // var i = 0;
    // function incrementVal() 
    // {
    //     document.getElementById('number').value = ++i;
    //     document.getElementById("updatedData").innerHTML = "Updated Data:"+i;
    // }

    // function decrementVal() 
    // {
    //     document.getElementById('number').value = --i;
    //     document.getElementById("updatedData").innerHTML = "Updated Data:"+i;
    // }

//##############################################################################################

   // Chapter # 49-52 and Task # 1

//    function displayData() 
//    {
//     var user_name = document.getElementById("username").value;          
//     var user_password = document.getElementById("password").value;
//     document.getElementById("msg").innerHTML = "<br>You entered the following credentials:<br>"
//     document.getElementById("userCredentials").innerHTML = "user name: "+ user_name +"<br>"+"password: "+ user_password;
//     }

// Chapter # 49-52 and Task # 2

// function pakDetails()
//  { 
//     var expandedParagraph = "Pakistan, officially the Islamic Republic of Pakistan,[d] is a country in South Asia. It is the world's fifth-most populous country with a population exceeding 212.2 million. It is the 33rd-largest country by area, spanning 881,913 square kilometres (340,509 square miles). Pakistan has a 1,046-kilometre (650-mile) coastline along the Arabian Sea and Gulf of Oman in the south and is bordered by India to the east, Afghanistan to the west, Iran to the southwest, and China to the northeast. It is separated narrowly from Tajikistan by Afghanistan's Wakhan Corridor in the northwest, and also shares a maritime border with Oman."; 
//     document.getElementById("slowDetail").innerHTML = expandedParagraph;
// }



// Chapter # 49-52 and Task # 3

// var list = document.getElementById("list");
// function addRecord()
// {
//     var user_index = document.getElementById("userIndex");
//     var user_name = document.getElementById("userName");
//     var user_class = document.getElementById("userClass");

//     var li= document.createElement('li');
//     var liUserId=document.createTextNode(user_index.value);
//     var liUserName=document.createTextNode(user_name.value);
//     var liUserClass=document.createTextNode(user_class.value);
//     li.appendChild(liUserId);
   
//     li.appendChild(liUserName);
//     li.appendChild(liUserClass);

//    var delBtn = document.createElement("button");
//    var delTxt = document.createTextNode("Delete");
//    delBtn.setAttribute("class","btn btn-primary  ml-2 mt-2");
//    delBtn.setAttribute("onClick","delItem(this)")
//    delBtn.appendChild(delTxt);

//    var editBtn = document.createElement("button");
//    var editTxt= document.createTextNode("Edit");
//    editBtn.setAttribute("class","btn btn-danger ml-2 mt-2");
//    editBtn.appendChild(editTxt);
//    editBtn.setAttribute("onClick","editItem(this)")

//    li.appendChild(delBtn);
//    li.appendChild(editBtn);
//    adding_activity(li,user_index,user_name,user_class)

// } 


// function adding_activity(li,user_index,user_name,user_class)
// {

//    if(user_index.value=="" || user_name.value =="" || user_class.value ==""  )
//    {
//         alert('You can not leave any field blank')
//         var user_index=document.getElementById("userIndex")
//         var user_name=document.getElementById("userName")
//         var user_class=document.getElementById("userClass")
//    }
//    else
//    {
    
//     list.appendChild(li); 
//     user_index.value = ""
//     user_name.value = ""
//     user_class.value = ""

//    }
// }

// function delItem(e)
// {
//     e.parentNode.remove()
// }

// function editItem(e)
// {
    
//     var user_index =prompt("Enter User_Index",e.parentNode.childNodes[0].nodeValue);
//     e.parentNode.childNodes[0].nodeValue=user_index; 

//     var user_name =prompt("Enter User Name ",e.parentNode.childNodes[1].nodeValue);
//     e.parentNode.childNodes[1].nodeValue=user_name; 

//     var user_class =prompt("Enter User Class ",e.parentNode.childNodes[2].nodeValue);
//     e.parentNode.childNodes[2].nodeValue=user_class; 
   
// }


//#########################################################################################

// //  Chapter # 53-57 and Task # 1 Solution 1 using html/css


// function slideShowImages()
// {
// var pictures = [];
// for (var i = 0; i < 16; i++) {
//     pictures.push("images/" + i + ".jpg"); //Add to array 
// }


//  var imgDiv1 = document.getElementById('column1')
//  imgDiv1.innerHTML="<img id ='myImg' src='images/5.jpg'/> ";

//  var imgDiv2 = document.getElementById('column2')
//   imgDiv2.innerHTML="<img id ='myImg2' img src='images/6.jpg'/> ";

//   var imgDiv3 = document.getElementById('column3')
//   imgDiv3.innerHTML="<img id ='myImg3' img src='images/8.jpg'/> ";

//   var imgDiv4 = document.getElementById('column4')
//   imgDiv4.innerHTML="<img id ='myImg4' img src='images/9.jpg'/> ";


// }
// slideShowImages()

// var modal = document.getElementById("myModal");
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");

// var modal2 = document.getElementById("myModal2");
// var img2 = document.getElementById("myImg2");
// var modalImg2 = document.getElementById("img02");

// var modal3 = document.getElementById("myModal3");
// var img3 = document.getElementById("myImg3");
// var modalImg3 = document.getElementById("img03");

// var modal4 = document.getElementById("myModal4");
// var img4 = document.getElementById("myImg4");
// var modalImg4 = document.getElementById("img04");


// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// img2.onclick = function(){
//     modal2.style.display = "block";
//     modalImg2.src = this.src;
//     captionText2.innerHTML = this.alt;
//   }

//   img3.onclick = function(){
//     modal3.style.display = "block";
//     modalImg3.src = this.src;
//     captionText3.innerHTML = this.alt;
//   }

//   img4.onclick = function(){
//     modal4.style.display = "block";
//     modalImg4.src = this.src;
//     captionText4.innerHTML = this.alt;
//   }

// var span = document.getElementsByClassName("close")[0];
// var span2 = document.getElementsByClassName("close")[1];
// var span3 = document.getElementsByClassName("close")[2];
// var span4 = document.getElementsByClassName("close")[3];

// span.onclick = function() { 

//   setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }

// span2.onclick = function() { 

//     setTimeout(()=>{ modal2.style.display = "none"; }, 550)
//   }
//   span3.onclick = function() { 

//     setTimeout(()=>{ modal3.style.display = "none"; }, 550)
//   }

//   span4.onclick = function() { 

//     setTimeout(()=>{ modal4.style.display = "none"; }, 550)
//   }



// Chapter # 53-57 and Task # 1 Solution 2 using BootStrap and css

// function showImage(e)
// {
//     var modelImage=document.getElementById("modalImage")
//     modelImage.src=e.src
// }

// // Chapter # 53-57 and Task # 2
// function txtZoomIn()
//  { 
//     var txt = document.getElementById('pakIntroNew');
//     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     txt.style.fontSize = (currentSize + 10) + 'px';
// }

// function txtZoomOut()
//  { 
//     var txt = document.getElementById('pakIntroNew');
//     style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
//     currentSize = parseFloat(style);
//     txt.style.fontSize = (currentSize - 10) + 'px';
// }

//##############################################################################################


// // Assignment # 58-67 and Task #1
 
// // i
// var mainContent = document.getElementById('main-content')

// // ii
    // document.getElementById("show_child_node1").innerHTML = 'First child:'+ mainContent.childNodes[0].textContent;
// document.getElementById("show_child_node2").innerHTML = 'Second child:'+ mainContent.childNodes[1].textContent;
// document.getElementById("show_child_node3").innerHTML = 'Third child:'+ mainContent.childNodes[2].textContent;
// document.getElementById("show_child_node4").innerHTML = 'Fourth child:'+ mainContent.childNodes[3].textContent;
// document.getElementById("show_child_node5").innerHTML = 'Fifth child:'+ mainContent.childNodes[4].textContent;

// // iii
// var show_render = document.getElementsByClassName("render");
// document.getElementById("eb_cname").innerHTML = show_render[0].textContent +', '+ show_render[1].textContent +', '+ show_render[2].textContent +', '+ show_render[3].textContent +', '+ show_render[4].textContent;


// // iv
// document.getElementById("first-name").value = "Bilal";

// // v
// document.getElementById("last-name").value = "Ahmad";
// document.getElementById("email").value = "mebilalahmad1@gmail.com";


// // Assignment # 58-67 and Task # 2

// // i
// var node_type = document.getElementById("form-content").nodeType;
// document.getElementById("n_type").innerHTML ='Node Type:' + node_type;

// // ii
// var node_type = document.getElementById("lastName");
// var pNode = node_type.nodeType;
// document.getElementById("pn_Type").innerHTML = 'Node Type:' + pNode;
// var child_nodes= node_type.childNodes[0]
// document.getElementById("showChildNode").innerHTML = 'Child Node of last name ='+child_nodes.nodeValue;


// // iii

// var parent_node_type = document.getElementById("lastName");
// var child_nodes= parent_node_type.childNodes[0]
// child_nodes.nodeValue="Last Name: AlFalah"

// // iv
// var first_last_child = document.getElementById("main-content");
// var fChild = first_last_child.firstChild.nodeName  
// var lChild = first_last_child.lastChild.nodeName
// document.getElementById("fl_child").innerHTML = 'first child='+fChild +', '+'last child = ' +lChild;

// // v
// var last_name = document.getElementById("lastName");
// var n_sibling = last_name.nextSibling;
// var p_sibling = last_name.previousSibling;
// document.getElementById("nextPreviousSibling").innerHTML = ' Next Sibling: '+n_sibling.textContent +', Previous Sibling:'+p_sibling.textContent

// // vi
// var pNode_type = document.getElementById("email");
// var pNode = pNode_type.parentNode;
// var nType=pNode_type.nodeType;
// document.getElementById("pNodeType").innerHTML = ' Parent Nodes: '+pNode.textContent +', Node Type:'+nType;
















