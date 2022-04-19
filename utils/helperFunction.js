import {showMessage} from 'react-native-flash-message';

const showError = (message) => {
  
  showMessage({
    type: 'danger',
    icon: 'danger',
    message,
  });
  console.log("I AM IN THE HELPER FUNCTION");
  console.log(message);
  console.log("LAST LINE WAS THE MESSAGE");
};

const showSuccess = (message) => {
  showMessage({
    type: 'success',
    icon: 'success',
    message,
  });
};

export {showError, showSuccess};