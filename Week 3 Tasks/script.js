// Disable the Select a value option
document.getElementById("firstOp").disabled = true;

var  myForm = document.getElementById('signup_form');


myForm.addEventListener('submit',validateForm,false);






function validateEmail( email ) {

    var at = email.indexOf( "@" );
    var dot = email.lastIndexOf( "\." );
    var em = email.length > 0 &&
               at > 0 &&
               dot > at + 1 &&
               dot < email.length &&
               email[at + 1] !== "." &&
               email.indexOf( " " ) === -1 &&
               email.indexOf( ".." ) === -1;
        return em;
      }

function validateForm(event){
    checkRequired();   


    
    //Email checker portion
    // check for @
    let emailValue = myForm.email.value;
    if(myForm.email.value==""){
        event.preventDefault();
        myForm.email.parentElement.nextElementSibling.innerHTML = "Please enter your email";
    }
    else if(validateEmail(emailValue)===true){
        myForm.email.parentElement.nextElementSibling.innerHTML="Valid Email";
    }
    else{
        event.preventDefault();
        myForm.email.parentElement.nextElementSibling.innerHTML="Invalid Email";
    }

  let input = document.getElementById('name');
  let value = input.value;
  let numbers = [Number(value.substr(0, 5)), Number(value.substr(6, 7)), Number(value.substr(14, 1))]
  numbers = numbers.map(value => {if(isNaN(value)) return 'NaN'; else return value})
  let hifens = [value.indexOf('-'), value.lastIndexOf('-')];
  if(myForm.name.value==""||myForm.name.value==null){
    event.preventDefault();
    myForm.name.parentElement.nextElementSibling.innerHTML = "It Cannot be empty";
    }
  else if(numbers.indexOf('NaN') == -1 && hifens[0] == 5 && hifens[1] == 13) {
    myForm.name.parentElement.nextElementSibling.innerHTML = "Valid Nic No";
  } else {
    event.preventDefault();
    myForm.name.parentElement.nextElementSibling.innerHTML = "Invalid Nic Number";
  }


    // Password Checker Portion
    var x = myForm.pass.value;
    var validPass = "";
    for (let i=0; i<x.length; i++)
    {
        if(x[i]==='$'|| x[i]==='%'|| x[i]==='*'){
            event.preventDefault();
            myForm.pass.parentElement.nextElementSibling.innerHTML="Password Contains Restriced Characters";
            // alert("wrongs characters included");
            break;     
        }else
        {
            // validPass.push(x[i]);
            validPass += x[i];
        }
    }
    // Password Recheck portion
    if(validPass!==myForm.cpass.value){
        event.preventDefault();
        myForm.cpass.parentElement.nextElementSibling.innerHTML="Passwords do not match";
    }


    // Datalist Check portion

    // let bcs = document.getElementById('bc1').value;
    // let bsse = document.getElementById('bc2').value;
    // let bba = document.getElementById('bc3').value;
    // let mba = document.getElementById('bc4').value;
    // let econ = document.getElementById('bc5').value;
    // if(programme===bcs){}
    // Solution using JQuery
    
    $("input[name=browsers]").on('change', function(){
        //alert($(this).val());
        let a = $(this).val();
        alert(a=='Opera');
        if (a=='BCS' || a=='BS Economics' || a=='BSSE' || a=='BBA' || a=='MBA' ){
        alert("Valid");
        }
        else{
        alert("Invalid");
        event.preventDefault();
        myForm.textArea.parentElement.nextElementSibling.innerHTML="It cannot be submitted";
        }
    });

      
}


// Email validation

function checkRequired(){

    if(myForm.textArea.value.length <1){
        event.preventDefault();
        myForm.textArea.parentElement.nextElementSibling.innerHTML="It cannot be empty";
    }else if(myForm.textArea.value.length >50){
        event.preventDefault();
        myForm.textArea.parentElement.nextElementSibling.innerHTML="There Cannot be more than 50 characters"; 
    }

    if(myForm.pass.value.length<1){
        event.preventDefault();
        myForm.pass.parentElement.nextElementSibling.innerHTML="Please Enter the password"; 
    }
    if(myForm.cpass.value.length<1){
        event.preventDefault();
        myForm.cpass.parentElement.nextElementSibling.innerHTML="Please Enter the password again"; 
    }
    // Number checker b/w 1-1000 (Last Portion)
    var nums= parseInt(myForm.number.value);
    if(myForm.number.value ==="" || myForm.number.value ===null){
        event.preventDefault();
        myForm.number.parentElement.nextElementSibling.innerHTML="Please enter a number (1-1000)";
    }
    else if(nums<0 || nums>1000){
        event.preventDefault();
        myForm.number.parentElement.nextElementSibling.innerHTML="Please enter a number b/w 1-1000"; 
    }
    else{
    console.log("good");
        }

    let c1 = document.getElementById('c1');
    let c2 = document.getElementById('c2');
    let c3 = document.getElementById('c3');   
    if(c1.checked === false && c3.checked === false && c3.checked === false  ){
        event.preventDefault();
        myForm.c3.parentElement.nextElementSibling.innerHTML="Please select a checkbox"; 
    }
    let optChecker = document.getElementById("bestSelect");
    if(optChecker.selectedIndex  !==1 && optChecker.selectedIndex  !==2){
        event.preventDefault();
        myForm.bestSelect.parentElement.nextElementSibling.innerHTML="Please Select any option"; 
    }

}

// Checkbox code

function checkboxlimit(checkgroup, limit){
    for (var i=0; i<checkgroup.length; i++){
        checkgroup[i].onclick=function(){
        var checkedcount=0
        for (var i=0; i<checkgroup.length; i++)
            checkedcount+=(checkgroup[i].checked)? 1 : 0
        if (checkedcount>limit){
            alert("You can check a maximum of "+limit+" boxes.")
            this.checked=false
            }
        }
    }
}
checkboxlimit(document.forms.signup_form['cb[]'], 2)
