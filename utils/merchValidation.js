import is from 'is_js';
import validator from 'validator';
import { isValidPhoneNumber } from 'react-phone-number-input';
const checkEmpty = (val, key) => {
  if (validator.isEmpty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
};

export default function (data) {
  const {merchItemName, merchItemPrice, pic, club, contactEmail, contactNumber, description, numSmall, numMedium, numLarge} = data;
  console.log("im in the validation for merch ")

  if (pic !== undefined) {
    let emptyValidationText = checkEmpty(
      pic,
      'Please enter a picture for your merch item',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

  if (club !== undefined) {
    let emptyValidationText = checkEmpty(
        club,
      'Please enter a club for your announcement',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

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
    else if (!(contactNumber.match('[0-9]{3}[-][0-9]{3}[-][0-9]{4}'))) {
      return 'Contact number must be a valid phone number';
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
      if (!validator.isEmail(contactEmail)) {
        return 'Please enter valid email';
      }
    }
  }

  if (isNaN(numSmall) == true) {
      return 'Number of smalls must be a numeric value';
    } 

  if (isNaN(numMedium) == true) {
    return 'Number of mediums must be a numeric value';
    } 

  if (isNaN(numLarge) == true) {
    return 'Number of larges must be a numeric value';
    } 

console.log("End of merch validation")
}
