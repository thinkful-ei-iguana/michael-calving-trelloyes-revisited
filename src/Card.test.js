//smoke test and snapshot test
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
// import STORE from './STORE';
import renderer from 'react-test-renderer';

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<Card title="Card 1" content="Hey look at me, I'm some content"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });
