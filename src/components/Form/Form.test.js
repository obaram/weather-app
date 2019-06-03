import React from 'react';
import ReactDOM from 'react-dom';
import List from '../List/List';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'; 
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import "../../../setupTest"
import AddForm from "./Form";

 

  it('renders correctly', () => {
    const tree = renderer.create(<AddForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });


 describe('ListItem', () => {
     it('should render list item',()=>{
     
     const wrapper = shallow(<AddForm/>);
     expect(wrapper).toMatchSnapshot();

     })

})
