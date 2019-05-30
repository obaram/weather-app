import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';

const RootView = new Root();



  describe('Main functions', () => {

    const elements = [
      {
       main: { temp:1}     
      },
      {
       main: {temp:3}  
      }
   ]


  it('should return 2.00 for array elements', () => {
         expect(RootView.avg(elements)).toBe("2.00");
  });

  it('should return array', () => {
      expect(Array.isArray(RootView.toFahrenheit([1,2,3]))).toBe(true);
  });

  it('should return array', () => {
      expect(Array.isArray(RootView.toCelsius([1,2,3]))).toBe(true);
  });

  // it('should return object', () => {
  //   expect(typeof RootView.fetchData("Rzeszów")).toBe("object");
});
  



