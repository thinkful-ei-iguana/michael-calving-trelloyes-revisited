//smoke test and snapshot test
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders the UI as expected', () => {
  const tree = renderer.create(<Card name="Card" title="card 1" content="some content"/>).toJSON();
  expect(tree).toMatchSnapshot();  
  });
