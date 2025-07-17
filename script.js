let submitButton = document.getElementById('buttonSubmit');

function validationFirstName() {
  let regexFirstName = /^[A-Za-zÀ-ÿ\- ]{2,30}$/;
  let messageFirstName = document.getElementById('messageFirstName');
  let inputFirstName = document.getElementById('firstName');
  let inputFirstNameRegex = inputFirstName.value.trim();
  if (regexFirstName.test(inputFirstNameRegex)) {
    messageFirstName.textContent = 'tsy misy erreur';
    messageFirstName.style.color = 'green';
    inputFirstName.style.border = '2px solid green';
  } else {
    messageFirstName.textContent = 'misy erreur';
    inputFirstName.style.border = '2px solid red';
    messageFirstName.style.color = 'red';
  }
}
function validationLastName() {
  let regexLastName = /^[A-ZÀ-Ý\- ]{2,30}$/;
  let messageLastName = document.getElementById('messageLastName');
  let inputLastName = document.getElementById('lastName');
  let inputLastNameRegex = inputLastName.value.trim();
  if (regexLastName.test(inputLastNameRegex)) {
    messageLastName.textContent = 'tsy misy erreur';
    messageLastName.style.color = 'green';
    inputLastName.style.border = '2px solid green';
  } else {
    messageLastName.textContent = 'misu erreur';
    inputLastName.style.border = '2px solid red';
    messageLastName.style.color = 'red';
  }
}

function validationUserName() {
  let regexUserName = /^[a-z0-9]{3,15}$/;
  let messageUserName = document.getElementById('messageUserName');
  let inputUserName = document.getElementById('userName');
  let inputUserNameRegex = inputUserName.value.trim();

  if (regexUserName.test(inputUserNameRegex)) {
    messageUserName.textContent = 'Milay le userName';
    messageUserName.style.color = 'green';
    inputUserName.style.border = '2px solid green';
  } else {
    messageUserName.textContent = 'Aza andino ny User Name';
    inputUserName.style.border = '2px solid red';
    messageUserName.style.color = 'red';
  }
}

function validationCity() {
  let regexCity = /^[A-Za-zÀ-ÿ\-\.\' ]{2,50}$/;
  let messageCity = document.getElementById('messageCity');
  let inputCity = document.getElementById('city');
  let inputCityRegex = inputCity.value.trim();
  if (regexCity.test(inputCityRegex)) {
    messageCity.textContent = 'Norma be le ville';
    messageCity.style.color = 'green';
    inputCity.style.border = '2px solid green';
  } else {
    messageCity.textContent = 'aza andino ville na Amboary';
    messageCity.style.color = 'red';
    inputCity.style.border = '2px solid red';
  }
}

function validationState() {
  let messageState = document.getElementById('messageState');
  let selectState = document.getElementById('state');
  let valueSelect = selectState.value;
  if (valueSelect !== '') {
    messageState.textContent = 'Misaotra e';
    selectState.style.border = '2px solid green';
    messageState.style.color = 'green';
  } else {
    messageState.textContent = 'Misafadiana e';
    selectState.style.border = '2px solid red';
    messageState.style.color = 'red';
  }
}

function validationZip() {
  let regexZip = /^\d{3}$/;
  let messageZip = document.getElementById('messageZip');
  let inputZip = document.getElementById('zip');
  let inputZipRegex = inputZip.value.trim();
  if (regexZip.test(inputZipRegex)) {
    messageZip.textContent = 'milay';
    messageZip.style.color = 'green';
    inputZip.style.border = '2px solid green';
  } else {
    messageZip.textContent = 'Mampidira Zip marina';
    messageZip.style.color = 'red';
    inputZip.style.border = '2px solid red';
  }
}
function validationCheckBox() {
  let messageCheckBox = document.getElementById('messageCheckBox');
  let inputCheckbox = document.getElementById('checkBox');
  let checkBoxCouleur = document.getElementById('labelCheckBox');
  if (inputCheckbox.checked) {
    messageCheckBox.textContent = '';
    checkBoxCouleur.style.color = 'green';
  } else {
    messageCheckBox.textContent = 'checkeo le izy e';
    checkBoxCouleur.style.color = 'red';
  }
} //

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  validationFirstName();
  validationLastName();
  validationUserName();
  validationCity();
  validationState();
  validationZip();
  validationCheckBox();
  let myForm = {
    firstName: document.getElementById('firstName').value.trim(),
    lastName: document.getElementById('lastName').value.trim(),
    userName: document.getElementById('userName').value.trim(),
    city: document.getElementById('city').value.trim(),
    state: document.getElementById('state').value,
    zip: document.getElementById('zip').value.trim(),
  };

  console.log(myForm);
});
