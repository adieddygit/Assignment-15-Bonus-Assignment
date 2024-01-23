// ^--> matches the begining of an input
// $--> matches the end of an input
// * = matches zero or more occurance of the preceeding character
// + = matches one or more occurance of the preceeding character
// [^xyz] = matches anything not enclosed in the bracket
// \s = matches a single white space.
try{
  function validatesti(){
    let date = document.forms.sti.date.value;
    let person = document.forms.sti.person.value;
    let provider = document.forms.sti.provider.value;
    let contact = document.forms.sti.contact.value;
    let name = document.forms.sti.name.value;
    let dob = document.forms.sti.dob.value;
    let gender = document.forms.sti.gender.value;
    let ethinic = document.forms.sti.ethinic.value;
    let race = document.forms.sti.race.value;
    let sex = document.forms.sti.sex.value;
    let result5 = document.forms.sti.result.value;
    let exam = document.forms.sti.exam.value;
    let diagnosis = document.forms.sti.diagnosis.value;
    let site = document.forms.sti.site.value;


    if(!date){
      document.getElementById('dateErr').innerHTML = "Date is required!";
      document.forms.sti.date.focus();
      return false;
    }
    else{
      document.getElementById('dateErr').innerHTML = "";
    }

    if(!person){
      document.getElementById('personErr').innerHTML = "Name of Person is required!";
      document.forms.sti.person.focus();
      return false;
    }
    else{
      document.getElementById('personErr').innerHTML = "";
    }

    if(!provider){
      document.getElementById('providerErr').innerHTML = "Name of Provider is required!";
      document.forms.sti.person.focus();
        return false;
     }
     else{
       document.getElementById('providerErr').innerHTML = "";
     }

     if(!contact){
       document.getElementById('contactErr').innerHTML = "Contact Number is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('contactErr').innerHTML = "";
     }

     if(!name){
       document.getElementById('nameErr').innerHTML = "Your Name is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('nameErr').innerHTML = "";
     }

     if(!dob){
       document.getElementById('dobErr').innerHTML = "Your Date of Birth is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('dobErr').innerHTML = "";
     }

     if(!gender){
       document.getElementById('genderErr').innerHTML = "Your Gender is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('genderErr').innerHTML = "";
     }

     if(!ethinic){
       document.getElementById('ethinicErr').innerHTML = "Your Ethnicity is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('ethinicErr').innerHTML = "";
     }

     if(!race){
       document.getElementById('raceErr').innerHTML = "Your Race is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('raceErr').innerHTML = "";
     }

     if(!sex){
       document.getElementById('sexErr').innerHTML = "Gender of Sex Partner is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('sexErr').innerHTML = "";
     }

     if(!result5){
       document.getElementById('resultErr').innerHTML = "Result type is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('resultErr').innerHTML = "";
     }

     if(!exam){
       document.getElementById('examErr').innerHTML = "Reasons for examiniation is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('examErr').innerHTML = "";
     }

     if(!diagnosis){
       document.getElementById('diagnosisErr').innerHTML = "Diagnosis is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('diagnosisErr').innerHTML = "";
     }

     if(!site){
       document.getElementById('siteErr').innerHTML = "Site is required!";
       document.forms.sti.person.focus();
      return false;
     }
     else{
       document.getElementById('siteErr').innerHTML = "";
     }
    }
  }

  catch(err){
    window.alert(err.message);
}

    
  function validatename(){
    let namepattern = /^[A-Za-z\s]*$/;
    let name = document.forms.sti.name.value;
    if(name){
      let x = namepattern.test(name);
      if(x==false){
        document.getElementById('name').innerHTML = "<br/>Name can only only contain letters";
        document.forms.sti.name.focus();
      }
      else{
        document.getElementById('nameErr').innerHTML = "";
        document.forms.sti.name.style.borderColor = 'green';
      }
    }
  }

  