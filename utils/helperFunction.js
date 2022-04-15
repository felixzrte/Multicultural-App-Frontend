import {showMessage} from 'react-native-flash-message';

const showError = (message) => {
  console.log("I AM IN THE HELPER FUNCTION");
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
  });
};

const showSuccess = (message) => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
  });
};

export {showError, showSuccess};