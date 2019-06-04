import React from 'react';
import ReactDOM from 'react-dom';
import List from '../List/List';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'; 
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import "../../../setupTest"

const props = {
    index: 1,
    items: [{
        city: "Rzeszów",
        temp: 25.00,
        lat: 31.165,
        lon:  21.276,
    }],
    handleDelete: jest.fn(), 
    unit:'metric',
    error : {
      msg:"",
      show: false
    },  
    success : {
      msg:"",
      show:false
    }, 
} 

  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><List {...props} /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });


 describe('List', () => {
     it('should render list',()=>{
     
     const wrapper = shallow(<List {...props} />);
     expect(wrapper).toMatchSnapshot();

     })

})
