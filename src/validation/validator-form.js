function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  export const validationRegistration = ({email, phone, password, firstName, lastName}) => {
      try {
        let valid = {
          isValid: true,
          error: '',
          reason: ''
        }
        if(password.length <= 7) {
          valid.isValid = false;
          valid.error = 'password error';
          valid.reason = 'password';
        }
        if(!isValidEmail(email)) {
          valid.isValid = false;
          valid.error = 'email error';
          valid.reason = 'email';
        }
        if(phone.length <=4) {
          valid.isValid = false;
          valid.error = 'phone error';
          valid.reason = 'phone';
        }
        if(firstName.length <= 1) {
          valid.isValid = false;
          valid.error = 'firstName error';
          valid.reason = 'firstName';
        }
        if(lastName.length <= 1) {
          valid.isValid = false;
          valid.error = 'lastName error';
          valid.reason = 'lastName';
        }
  
        return valid;
  
      } catch (e) {
        console.log(e);
      }
    };