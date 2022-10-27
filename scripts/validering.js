document.querySelector("#form-tilmelding").addEventListener("submit", validate);
const messageField = document.querySelector("#besked");

function validate(evt) {
    // en tom variabel til fejlmeddelelser...
  let error;

  
  // test om email er udfyldt
  if (this.email.value == "") {
      evt.preventDefault();
      error = "Udfyld venligst din e-mail adresse";
      messageField.textContent = error;
      this.email.focus();
      return false;
  }
  
    // test om email er indtastet korrekt
    const atpos = this.email.value.indexOf("@"); // find placering af snabel-a (@)
    const dotpos = this.email.value.lastIndexOf("."); // find placering af sidste punktum (.)
    if (atpos < 1 || dotpos < atpos || dotpos + 2 >= this.email.value.length) {
        evt.preventDefault();
        error = "Din e-mail adresse skal være gyldig (fx navn@mail.dk";
        messageField.textContent = error;
        this.email.focus();
        return false;
    }
  
  // test om confirm_email er udfyldt
  if (this.confirm_email.value == "") {
      evt.preventDefault();
      error = "Gentag venligst samme e-mail adresse!";
      messageField.textContent = error;
      this.confirm_email.focus();
      return false;
    }
    
  

  // test om de to mails er ens
  if (this.confirm_email.value !== this.email.value) {
      evt.preventDefault();
      error = "Gentag venligst samme e-mail adresse!";
      messageField.textContent = error;
      this.confirm_email.focus();
      return false;
  }

// test om kode er udfyldt
if (this.password.value == "") {
    evt.preventDefault();
    error = "Udfyld venligst en adgangskode!";
    messageField.textContent = error;
    this.password.focus();
    return false;
}

// test om de to passwords er ens
if (this.confirm_password.value !== this.password.value) {
    evt.preventDefault();
    error = "Gentag venligst samme adgangskode!";
    messageField.textContent = error;
    this.confirm_password.focus();
    return false;
}


  
// test om fname er udfyldt
if (this.fname.value == "") {
    evt.preventDefault();
    error = "Udfyld venligst dit fuldnavn!";
    messageField.textContent = error;
    this.fname.focus();
    return false;
}

// test om lname er udfyldt
if (this.lname.value == "") {
    evt.preventDefault();
    error = "Udfyld venligst dit efternavn!";
    messageField.textContent = error;
    this.lname.focus();
    return false;
}

if (this.phoneNumber.value == "") {
    evt.preventDefault();
    error = "Udfyld venligst dit telefon nummer!";
    messageField.textContent = error;
    this.phoneNumber.focus();
    return false;
}

// test om phoneNumber er et tal
if (isNaN(this.phoneNumber.value)) {
    evt.preventDefault();
    error = "Dit nummer skal være indholde tal!";
    messageField.textContent = error;
    this.phoneNumber.focus();
    return false;
}


// test om address er udfyldt
if (this.address.value == "") {
    evt.preventDefault();
    error = "Udfyld venligst dit address!";
    messageField.textContent = error;
    this.address.focus();
    return false;
}

}