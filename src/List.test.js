import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card';
import renderer from 'react-test-renderer';

it('renders without crashing', () =>{
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders the UI as expected', () => {
//   const tree = renderer
//     .create(<List />)
//     .toJSON();
//   expect(tree).toMatchSnapshot();  
//   });