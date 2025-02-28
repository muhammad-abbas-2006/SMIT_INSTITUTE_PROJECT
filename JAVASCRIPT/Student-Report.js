var username = prompt("Enter student name","Full Name")
var roll = prompt("Enter Roll number","Roll Number")
var math = +prompt("Enter Maths Number")
var eng = +prompt("Enter English Number")
var urdu = +prompt("Enter Urdu Number")
var cs = +prompt("Enter Computer Number")
var phy = +prompt("Enter Physics Number")

var obtain = math + eng + urdu + cs + phy;
if(80 >= 80){
    document.write(true)
}

document.write(`
<table border=2px>
<tr>
<th>Name</th>
<th>Roll Number</th>
<th>Maths</th>
<th>English</th>
<th>Urdu</th>
<th>Computer</th>
<th>Physics</th>
<th>Marks Obtain</th>
<th>Total Marks</th>
<th>Percentage</th>
<th>Grade</th>
</tr>


<tr>
<td>${username}</td>
<td>${roll}</td>
<td>${math}</td>
<td>${eng}</td>
<td>${urdu}</td>
<td>${cs}</td>
<td>${phy}</td>
<td>${obtain}</td>
<td>500</td>
<td> ${(obtain / 500)*100} %</td>
<t>
</tr>
</table>
`)


