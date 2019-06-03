import React from 'react';
import ReactDOM from 'react-dom';
import ItemView from './ItemView';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'; 
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import "../../../setupTest"


const props = {
    index: 1,
    location: {
        query: {
            item: {
                city: 'Rzeszów',
                lat:14.676,
                lon:16.643,
                temp:15
            }
        }
    },

} 

  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><ItemView {...props} /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });


 describe('ListItem', () => {
     it('should render list item',()=>{
     
     const wrapper = shallow(<ItemView {...props} />);
     expect(wrapper).toMatchSnapshot();

     })

})
