window.onload = function(){
if(localStorage)
{
    populate(); 
    const form =document.getElementById('personalinfo');
    form.addEventListener('submit', store);
}
else{
    window.alert('localstorage is not supported')
}
}

function store(){
    let firstname = document.forms.register.firstname.value;
    let lastname = document.forms.register.lastname.value;
    let middlename = document.forms.register.middlename.value;
    let uniqueid = document.forms.register.uniqueid.value;
    let sex_1 = document.forms.register.sex_1.value;
    let gi= document.forms.register.gi.value;
    let sexorient_1= document.forms.register.sexorient_1.value;
    let yob= document.forms.register.yob.value;
    localStorage.setItem('firstname', firstname);
    localStorage.setItem('middlename', middlename);
    localStorage.setItem('lastname', lastname);
    localStorage.setItem('uniqueid', uniqueid);
    localStorage.setItem('sex_1', sex_1);
    localStorage.setItem('gi', gi);
    localStorage.setItem('sexorient_1', sexorient_1)
    localStorage.setItem('yob', yob);
} 
function populate(){
    let firstname = document.forms.register.firstname;
    let middlename = document.forms.register.middlename;
    let lastname = document.forms.register.lastname;
    let uniqueid = document.forms.register.uniqueid;
    let sex_1= document.forms.register.sex_1;
    let gi= document.forms.register.gi;
    let sexorient_1 = document.forms.register.sexorient_1;
    let yob= document.forms.register.yob;

if(localStorage.getItem('firstname')!=null){
    firstname.value=localStorage.getItem('firstname')
}

if(localStorage.getItem('middlename')!=null){
    middlename.value=localStorage.getItem('middlename')
}

if(localStorage.getItem('lastname')!=null){
    lastname.value=localStorage.getItem('lastname')
}

if(localStorage.getItem('uniqueid')!=null){
    uniqueid.value=localStorage.getItem('uniqueid')
}

if(localStorage.getItem('sex_1')!=null){
    sex_1.value=localStorage.getItem('sex_1')
}

if(localStorage.getItem('gi')!=null){
    gi.value=localStorage.getItem('gi')
}

if(localStorage.getItem('sexorient_1')!=null){
    sexorient_1.value=localStorage.getItem('sexorient_1')
}

if(localStorage.getItem('yob')!=null){
    yob.value=localStorage.getItem('yob')
}
}
