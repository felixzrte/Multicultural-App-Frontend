import React from 'react';
import {Signin, Signup} from '../screens';
import {COLORS} from '../constants';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </>
  );
}
