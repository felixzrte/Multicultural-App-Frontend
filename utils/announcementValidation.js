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
  const {announcementTitle, announcementContents, startDate, endDate} = data;

  if (announcementTitle !== undefined) {
    let emptyValidationText = checkEmpty(
        announcementTitle,
      'Please enter a name for your announcement',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

  if (announcementContents !== undefined) {
    let emptyValidationText = checkEmpty(
        announcementContents,
      'Please enter contents for your announcement',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

  if (startDate !== undefined) {
    let emptyValidationText = checkEmpty(
        startDate,
      'Please enter a start date for your announcement',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }

  if (endDate !== undefined) {
    let emptyValidationText = checkEmpty(
        endDate,
      'Please enter a end date for your announcement',
    );
    if (emptyValidationText !== '') {
      return emptyValidationText;
    }
  }
}
