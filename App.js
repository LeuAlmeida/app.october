import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Warning: Each child',
  'Warning: Failed prop type: Invalid props.style key',
  'Warning: Failed prop type: Invalid prop `source`',
  'Warning: React.createELement: type is invalid'
]);

export default function App() {
  return <Routes />
}
