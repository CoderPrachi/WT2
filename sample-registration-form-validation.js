
function myFunct() {

  var z = document.getElementById("name1").value;
  if (z == "")
  {
    alert("Name must be filled out");
    return false;
  }
  var z = document.getElementById("email").value;
  if (z == "")
  {
    alert("EMAIL must be filled out");
    return false;
  }
  var n = z.includes("@");
  if(n==false)
  {
    alert("Enter a valid Email address")
    return false
  }
  var zz = document.getElementById("phone").value;
  if (zz == "")
  {
    alert("Phone Number should be filled");
    return false;
  }
  y = parseInt(zz);
  if(y>10000000000 || y <1000000000 || isNaN(zz))
  {
    alert("Enter a valid phone number");
    return false;
  }
  var z = document.getElementById("age").value;
  if (z == "")
  {
    alert("Age must be filled out");
    return false;
  }
  zz = parseInt(z);
  if (isNaN(zz)) 
  {
    alert("Enter a valid Age");
    return false;
  }
  else if(zz < 15)
  {
    alert("Too Young for Trip. Sorry you cannot register!!!");
    return false;
  }
  else if (zz > 80)
  {
    alert("Too Old for Trip. Sorry you cannot register!!!");
    return false;
  }

  var checkBox = document.getElementById("myCheck1");
  var checkBox1 = document.getElementById("myCheck2");
  if (checkBox.checked == false && checkBox1.checked == false )
  {
    alert("Please select the checkbox");
    return false;
  
  }
  if (checkBox.checked == true && checkBox1.checked == true )
  {
    alert("Please select One checkbox i.e Either Male or Female");
    return false;
  
  }
  var checkBox = document.getElementById("myCheck");
  if (checkBox.checked == false)
  {
    alert("Please select the checkbox");
    return false;
  }

  var z = document.getElementById("textarea").value;
  if (z == "" || z.length<50)
  {
    alert("Write More than 50 words in Expectations from your GYM");
    return false;
  }

   alert("Thank you for registering for the trip Soon a confirmation mail along with the trainers informations will be sent to the provided email. You can confirm you registration by clicking on Registration link.Thank you!!!!");


  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = document.getElementById("name1").value;
  cell2.innerHTML = document.getElementById("email").value;
  cell3.innerHTML = document.getElementById("age").value;

  document.getElementById("name1").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("textarea").value = "";

  document.getElementById("myCheck").checked = false;
  document.getElementById("myCheck1").checked = false;
  document.getElementById("myCheck2").checked = false;

}