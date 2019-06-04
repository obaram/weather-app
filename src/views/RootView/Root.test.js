import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { shallow } from 'enzyme';
import "../../../setupTest"
import renderer from 'react-test-renderer';

const RootView = new Root();


describe('root view', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Root />).toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('should render root view',()=>{  
    const wrapper = shallow(<Root/>);
    expect(wrapper).toMatchSnapshot();
  })

})


describe('Main functions', () => {

    const elements = [
      {
       main: { temp:1}     
      },
      {
       main: {temp:3}  
      }
   ]


  it('should return 2.00', () => {
         expect(RootView.avg(elements)).toBe("2.00");
  });

  it('should return array', () => {
      expect(Array.isArray(RootView.toFahrenheit([1,2,3]))).toBe(true);
  });

  it('should return array', () => {
      expect(Array.isArray(RootView.toCelsius([1,2,3]))).toBe(true);
  });

});
  



