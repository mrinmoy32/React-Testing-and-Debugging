import React from 'react';
import renderer from 'react-test-renderer' //for Jest Snapshot
import App from './App';

test('App snapshot test', ()=>{
  const component = renderer.create(<App />);
  const tree  = component.toJSON();
  expect(tree).toMatchSnapshot();
}); 

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
