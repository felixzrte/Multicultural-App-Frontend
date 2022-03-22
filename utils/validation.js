import is from 'is_js';
import validator from 'is_js';
const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
};

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `Please enter valid ${key}`;
  } else {
    return '';
  }
};

const checkSame = (val1, val2) => {
  if (is.not.equal(val1, val2)) {
    return 'Please make sure your passwords match';
  } else {
    return '';
  }
};

export default function (data) {
  const {email, password, confirmPassword, fullName} = data;

  if (fullName !== undefined) {
    let emptyValidationText = checkEmpty(
      fullName,
      'Please enter your full name',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

  if (email !== undefined) {
    let emptyValidationText = checkEmpty(email, 'Please enter your email');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      if (!validator.email(email)) {
        return 'Please enter valid email';
      }
    }
  }

  if (password !== undefined) {
    let emptyValidationText = checkEmpty(
      password,
      'Please enter your password',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(password, 8, 'password');
      if (minLengthValidation !== '') {
        return minLengthValidation;
      }
    }
  }

  if (confirmPassword !== undefined) {
    let emptyValidationText = checkEmpty(
      confirmPassword,
      'Please confirm your password',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      let matchingPasswords = checkSame(password, confirmPassword);
      if (matchingPasswords !== '') {
        return matchingPasswords;
      }
    }
  }
}
