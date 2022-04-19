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
  const {club, eventName, date, desc, location, image, extraNotes} = data;
  
  if (image !== undefined) {
    let emptyValidationText = checkEmpty(
      image,
        'Please enter an image for the event',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
}

  if (club !== undefined) {
    let emptyValidationText = checkEmpty(
      club,
      'Please enter the name of the club hosting the event',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

  if (eventName !== undefined) {
      let emptyValidationText = checkEmpty(
        eventName,
          'Please enter the name of the event',
      );
      if (emptyValidationText !== '') {
          return emptyValidationText;
      }
  }

  if (date !== undefined) {
    let emptyValidationText = checkEmpty(
      date,
        'Please enter the date of the event',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
    else if (!validator.isDate(date)) {
        return 'Enter a valid start date';
    }
}

if (desc !== undefined) {
    let emptyValidationText = checkEmpty(
      desc,
        'Please enter a description of your event',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
}


if (location !== undefined) {
    let emptyValidationText = checkEmpty(
      location,
        'Please enter a location for the event',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
}

if (location !== undefined) {
    let emptyValidationText = checkEmpty(
      location,
        'Please enter a location for the event',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
}

}