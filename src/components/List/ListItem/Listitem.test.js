import React from 'react';
import ReactDOM from 'react-dom';
import {Listitem} from './ListItem';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'; 
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import "../../../../setupTest"


     const props = {
        index: 1,
        item: {
            city: "Rzeszów",
            temp: 25.00,
            lat: 31.165,
            lon:  21.276,
        },
        handleDelete: jest.fn(),   
    } 

  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><Listitem {...props} /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });


 describe('ListItem', () => {
     it('should render list item',()=>{
     
     const wrapper = shallow(<Listitem {...props} />);
     expect(wrapper).toMatchSnapshot();

     })

})
