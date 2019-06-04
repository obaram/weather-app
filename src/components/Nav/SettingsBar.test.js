import React from 'react';
import ReactDOM from 'react-dom';
import List from '../List/List';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer'; 
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import "../../../setupTest"
import SettingsBar from "./SettingsBar"


  it('renders correctly', () => {
    const tree = renderer.create(<BrowserRouter><SettingsBar /></BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
  });


 describe('SettingsBar.js', () => {
     it('should render list item',()=>{     
        const wrapper = shallow(<SettingsBar/>);
        expect(wrapper).toMatchSnapshot();
     })
})
