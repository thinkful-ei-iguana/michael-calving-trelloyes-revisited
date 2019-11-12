import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Card from './Card';
import renderer from 'react-test-renderer';
import STORE from './STORE';

it('renders without crashing', () =>{
  const div = document.createElement('div');
  const testing = STORE.allCards.a;
  ReactDOM.render(<List cards={[{id: 1, title: 'card 1', content: 'look heres some content'}]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });
