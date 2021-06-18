function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let form = document.querySelector('#loginForm');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Surveiller  la modification du prénom
form.Prénom.addEventListener('change' , function() {
   validPrénom(this);
});

const validPrénom = function(inputPrénom) {
  let PrénomRegExp = new RegExp(
     '^[a-zA-Z]+','g'
  );
  let testPrénom = PrénomRegExp.test(inputPrénom.value);
  let small = inputPrénom.nextElementSibling;
  if(testPrénom) {
    small.innerHTML = 'Prénom valide';
    validPrénom.add('text-success');
  } else {
    small.innerHTML = 'Prénom Non Valide';
    small.classList.add('text-danger');
  }


};

