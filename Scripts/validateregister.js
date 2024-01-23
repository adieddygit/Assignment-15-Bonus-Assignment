try{
    function validateregister(){
      let firstname = document.forms.register.firstname.value;
      let lastname = document.forms.register.lastname.value;
      let uniqueid = document.forms.register.uniqueid.value;
      let sex = document.forms.register.sex.value;
      let gi= document.forms.register.gi.value;
      let yob= document.forms.register.yob.value;
 
      if(!firstname){
        document.getElementById('firstnameErr').innerHTML = "Firstname is required!";
        document.forms.register.firstname.focus();
        return false;
      }
      else{
        document.getElementById('firstnameErr').innerHTML = "";
      }

      if(!lastname){
        document.getElementById('lastnameErr').innerHTML = "Lastname is required!";
        document.forms.register.lastname.focus();
        return false;
      }
      else{
        document.getElementById('lastnameErr').innerHTML = "";
      }

      if(!uniqueid){
        document.getElementById('uniqueidErr').innerHTML = "Unique ID is required!";
        document.forms.register.uniqueid.focus();
        return false;
      }
      else{
        document.getElementById('uniqueidErr').innerHTML = "";
      }

      if(!sex){
        document.getElementById('sexErr').innerHTML = "Sex field is required!";
        document.forms.register.sex.focus();
        return false;
      }
      else{
        document.getElementById('sexErr').innerHTML = "";
      }

      if(!gi){
        document.getElementById('giErr').innerHTML = "Gender is required!";
        document.forms.register.gi.focus();
        return false;
      }
      else{
        document.getElementById('giErr').innerHTML = "";
      }

      if(!yob){
        document.getElementById('yobErr').innerHTML = "Year of Birth is required!";
        document.forms.register.yob.focus();
        return false;
      }
      else{
        document.getElementById('yobErr').innerHTML = "";
      }
      }
      }


      catch(err){
        window.alert(err.message);
      }