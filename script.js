 let srN=1;
function getData(){
   
 let Name= document.getElementById("txtName").value;
 let fName=document.getElementById("txtFname").value;
 let mail=document.getElementById("txtEmail").value;
let password=document.getElementById("txtPassword").value;
let address=document.getElementById("txtAddress").value;
let city=document.getElementById("txtCity").value;
let work=document.querySelector('input[name="gridRadios"]:checked').value
let skills=document.getElementById("txtSkills").value;
let experience=document.getElementById("txtExperience").value;
let message=document.getElementById("msg").value;

let tblData=document.getElementById("tbl");

 /*let data="<tr id=tr'srN'><td>"+srN+"</td><td>"+Name+"</td><td>"+fName+"</td><td>"+mail+"</td> <td>"+password+"</td><td>"+address+"</td><td>"+city+"</td><td>"+work+"</td><td>"+skills+"</td><td>"+experience+"</td><td>"+message+"</td><td><button id='delRow"+srN+"' onclick='remove("+srN+")'>Delete</button></td></tr>";)*/

 let data="<tr id=tr"+srN+"><td>"+srN+"</td><td>"+Name+"</td><td>"+fName+"</td><td>"+mail+"</td> <td>"+password+"</td><td>"+address+"</td><td>"+city+"</td><td>"+work+"</td><td>"+skills+"</td><td>"+experience+"</td><td>"+message+"</td><td><button id='delRow"+srN+"' onclick='remove("+srN+")'>Delete</button></td></tr>";

 srN+=1;
 tblData.innerHTML+=data;
 document.getElementById("txtName").value=" ";
document.getElementById("txtFname").value=" ";
document.getElementById("txtEmail").value=" ";
document.getElementById("txtPassword").value=" ";
document.getElementById("txtAddress").value=" ";
document.getElementById("txtCity").value=" ";
document.querySelector('input[name="gridRadios"]:checked').value=" ";
document.getElementById("txtSkills").value=" ";
document.getElementById("txtExperience").value=" ";
document.getElementById("msg").value=" ";

document.getElementById("txtName").focus();
}

function remove(srN){
    
    document.getElementById("tr"+ srN).remove(); 
   
}