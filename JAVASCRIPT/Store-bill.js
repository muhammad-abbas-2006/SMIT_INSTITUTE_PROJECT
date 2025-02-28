var item1 = prompt("Enter first Item Name","Item Name")
var pri1 = +prompt("Price of item")
var qua1 = +prompt("Enter first Item Quanitity","Items quantity")
var item2 = prompt("Enter second Item Name","Item Name")
var pri2 = +prompt("Price of item")
var qua2 = +prompt("Enter Second Item Quanitity","Items quantity")
var item3 = prompt("Enter third Item Name","Item Name")
var pri3 = +prompt("Price of item")
var qua3 = +prompt("Enter Third Item Quanitity","Items quantity")
var name = prompt("Enter Name")
let first = name.slice(0,1).toUpperCase()
let second = name.slice(1).toLowerCase()
let final = first + second
var no = +prompt("Enter phone number")
var email = prompt("Enter Email")



document.write(`
<table border=1px>
<tr>
<th>Name</th>
<th>Contact</th>
<th>Email</th>
</tr>
<tr>
<td>${final}</td>
<td> ${no} </td>
<td> ${email} </td>
</tr>
</table>

<br>

<table border=1px>
<tr>
<th>Item 1</th>
<th>Price</th>
<th>Quantity</th>
<th>Total Amount</th>
</tr>
<tr>
<td>${item1}</td>
<td>${pri1}</td>
<td>${qua1}</td>
<td>${pri1 * qua1}</td>
</tr>
</table>


<table border=1px>
<tr>
<th>Item 2</th>
<th>Price</th>
<th>Quantity</th>
<th>Total Amount</th>
</tr>
<tr>
<td>${item2}</td>
<td>${pri2}</td>
<td>${qua2}</td>
<td>${pri2 * qua2}</td>
</tr>
</table>


<table border=1px>
<tr>
<th>Item 3</th>
<th>Price</th>
<th>Quantity</th>
<th>Total Amount</th>
</tr>
<tr>
<td>${item3}</td>
<td>${pri3}</td>
<td>${qua3}</td>
<td>${pri3 * qua3}</td>
</tr>
</table>

<table border=1px>
<h1>Total Amount Items : ${pri1 * qua1 + pri2 * qua2 + pri3 * qua3 }</h1>
<h1>Total GST :[2%] ${pri1 * qua1 + pri2 * qua2 + pri3 * qua3 + 200}</h1>
<h1>Bill Discount : 20% </h1>
<h1>Total Bill : ${pri1 * qua1 + pri2 * qua2 + pri3 * qua3 + 200 - 300} </h1>
</table>

`)

if(3000 >= 5000){
    document.write("20%")
}

