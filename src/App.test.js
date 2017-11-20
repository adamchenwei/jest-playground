import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  console.log('----------------------App');
  console.log(App);
  const tree = renderer.create(
    <App />
  ).toJSON();
  console.log('-----_TREEEEE')
  console.log(tree);
  expect(tree).toMatchSnapshot();
});