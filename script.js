function validate()
{
 var name=document.getElementById("name").value;
 var regdno=document.getElementById("regdno").value;
 var Course=document.getElementById("course").value;
 var Branch=document.getElementById("branch").value;
 var currentsemester=document.getElementById("currsem").value;
 var batch=document.getElementById("batch").value;
 var address=document.getElementById("address").value;
 var phonenumber=document.getElementById("phonenumber").value;
 var Gender=document.getElementById("gender").value;
 var highestdegree=document.getElementById("highestdegree").value;		
 //email id expression code
 var pwd_expression=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
 var letters=/^[A-Z_\a-z]+$/;
 var number=/^([0-9\+])+$/;
 var numbers=/^[0-9]+$/;
 var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 var filters=/^([0-9\-])+$/;
 if(name=='')
 {
  alert('Please enter your name');
 }
 else if(!letters.test(name))
 {
  alert('Name field required only alphabet characters');
 }
 else if(regdno=='')
 {
  alert('Please enter your registration number');
 }
 else if(!numbers.test(regdno))
 {
  alert('Invalid registration number');
 }
 if(Course=="-1") 
 {
  alert("Please enter your course name");
 }
 if(Branch=="-1") 
 {
  alert("Please enter your branch name");
 }
 if(currentsemester=="-1" ) 
 {
  alert("Please enter your current semester");
 }
 else if(batch=='')
 {
  alert('Please enter your batch');
 }
 else if(!filters.test(batch))
 {
  alert('Batch field required only numeric values');
 }
 else if(address=='')
 {
  alert('Please enter your address');
 }
 else if(!filter.test(address))
 {
  alert('Invalid address');
 }
 else if(phonenumber=='')
 {
  alert('Please enter your phone number');
 }
 else if(!number.test(phonenumber))
 {
  alert('Phone Number field required only numeric values');
 }
 else if(highestdegree=='')
 {
  alert('Please enter your highest degree');
 }
 else
 {				                            
  alert('Thank You');
 }
}
function clearFunc()
{
 document.getElementById("name").value="";
 document.getElementById("regdno").value="";
 document.getElementById("course").value="";
 document.getElementById("branch").value="";
 document.getElementById("currsem").value="";
 document.getElementById("batch").value="";
 document.getElementById("address").value="";
 document.getElementById("phonenumber").value="";
 document.getElementById("gender").value="";
 document.getElementById("highestdegree").value="";
}