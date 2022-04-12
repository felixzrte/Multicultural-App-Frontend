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
    const {name, acronym, missionStatement, header, cabinetMembers, events, bio, logoImage, bannerImage, email, instagram, facebook} = data;
    
  
    if (name !== undefined) {
      let emptyValidationText = checkEmpty(
        club,
        'Please enter the club name',
      );
      if (emptyValidationText !== '') {
        return emptyValidationText;
      }
    }
  
    if (acronym !== undefined) {
        let emptyValidationText = checkEmpty(
          eventName,
            'Please enter acronym',
        );
        if (emptyValidationText !== '') {
            return emptyValidationText;
        }
    }
  
    if (missionStatement !== undefined) {
      let emptyValidationText = checkEmpty(
        date,
          'Please enter the missionStatement',
      );
      if (emptyValidationText !== '') {
          return emptyValidationText;
      }
  }
  
  if (header !== undefined) {
      let emptyValidationText = checkEmpty(
        desc,
          'Please enter the header',
      );
      if (emptyValidationText !== '') {
          return emptyValidationText;
      }
  }
  
  
  if (cabinetMembers !== undefined) {
      let emptyValidationText = checkEmpty(
        location,
          'Please enter the cabinetMembers',
      );
      if (emptyValidationText !== '') {
          return emptyValidationText;
      }
  }
  
  if (events !== undefined) {
      let emptyValidationText = checkEmpty(
        image,
          'Please enter the event',
      );
      if (emptyValidationText !== '') {
          return emptyValidationText;
      }
  }
  
  if (bio !== undefined) {
      let emptyValidationText = checkEmpty(
        location,
          'Please enter the bio',
      );
      if (emptyValidationText !== '') {
          return emptyValidationText;
      }
  }

  if (logoImage !== undefined) {
    let emptyValidationText = checkEmpty(
      location,
        'Please enter the logoImage',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
  }

if (bannerImage !== undefined) {
    let emptyValidationText = checkEmpty(
      location,
        'Please enter the bannerImage',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
  }

  if (email !== undefined) {
    let emptyValidationText = checkEmpty(contactEmail, 'Please enter your email');
    if (emptyValidationText !== '') {
      return emptyValidationText;
    } else {
      if (!validator.email(email)) {
        return 'Please enter valid email';
      }
    }
  }

  if (instagram !== undefined) {
    let emptyValidationText = checkEmpty(
      location,
        'Please enter the clubs instagram',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
  }

  if (facebook !== undefined) {
    let emptyValidationText = checkEmpty(
      location,
        'Please enter the clubs facebook',
    );
    if (emptyValidationText !== '') {
        return emptyValidationText;
    }
  }
  
  }