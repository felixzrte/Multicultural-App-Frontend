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
    const {name, suggestion} = data;
    
  
    if (name !== undefined) {
      let emptyValidationText = checkEmpty(
        club,
        'Please enter your name',
      );
      if (emptyValidationText !== '') {
        return emptyValidationText;
      }
    }

    if (suggestion !== undefined) {
        let emptyValidationText = checkEmpty(
          club,
          'Please enter the suggestion',
        );
        if (emptyValidationText !== '') {
          return emptyValidationText;
        }
      }



}