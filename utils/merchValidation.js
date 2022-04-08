import is from 'is_js';
import validator from 'is_js';
import { isValidPhoneNumber } from 'react-phone-number-input';
const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
};

export default function (data) {
  const {merchItemName, merchItemPrice, pic, contactEmail, contactNumber, description} = data;

  if (merchItemName !== undefined) {
    let emptyValidationText = checkEmpty(
      merchItemName,
      'Please enter a name for your merch item',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

  if (merchItemPrice !== undefined) {
      let emptyValidationText = checkEmpty(
          merchItemPrice,
          'Please enter a price for your merch item',
      );
      if (emptyValidationText !== '') {
          return emptyValidationText;
      }
      else if (isNaN(merchItemPrice) == true) {
        return 'Item price must be a numeric value';
    } 
  }

  if (contactNumber !== undefined) {
    let emptyValidationText = checkEmpty(
        contactNumber,
        'Please enter a contact number for your merch item',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
    else if (!(contactNumber.match('[0-9]{10}'))) {
      return 'Contact number must be a valid phone number';
  } 
}

  if (pic !== undefined) {
    let emptyValidationText = checkEmpty(
      pic,
      'Please enter a picture for your merch item',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

  if (description !== undefined) {
    let emptyValidationText = checkEmpty(
      description,
      'Please enter a description for your merch item',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

  if (contactEmail !== undefined) {
    let emptyValidationText = checkEmpty(contactEmail, 'Please enter your email');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      if (!validator.email(contactEmail)) {
        return 'Please enter valid email';
      }
    }
  }


}
