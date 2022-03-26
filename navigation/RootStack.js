import React from 'react';

import {
  EventDetails,
  Merch,
  Product,
  Suggestion,
  UpdateProfile,
  Club,
} from '../screens';
import Tabs from './Tabs';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Bookmark" component={Tabs} />
      <Stack.Screen name="Maps" component={Tabs} />
      <Stack.Screen name="EventDetails" component={EventDetails} />
      <Stack.Screen name="Profile" component={Tabs} />
      <Stack.Screen name="Club" component={Club} />
      <Stack.Screen name="Merch" component={Merch} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="Suggestion" component={Suggestion} />
    </>
  );
}
