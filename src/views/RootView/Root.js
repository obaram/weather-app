import React from 'react';
import logo from '../../logo.svg';
import ListView from '../../views/ListView/ListView';
import AddForm from '../../components/Form/Form'
import ItemView from '../ItemView/ItemView'
import SettingsView from '../SettingsView/SettingsView';
import SettingsBar from '../../components/Nav/SettingsBar';
import axios from 'axios'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import AppContext from '../../Context';
import styles from './Root.module.scss';
import FontAwesome from 'react-fontawesome'


let APPID = '89df1cb971afca2cd1af3ae609d46acc';

class Root extends React.Component {
 
state={
    townList : [],
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

convertUnit = (unit) =>{
      
    let townListCopy = [...this.state.townList];
    let temperatureList = [];

    townListCopy.forEach(function(entry) {
        temperatureList.push(entry.temp)
    });
    
    if (unit === "metric"){
         temperatureList = this.toFahrenheit(temperatureList);
    }
    else temperatureList = this.toCelsius(temperatureList);
    
    for ( let i=0; i<temperatureList.length; i++){
         townListCopy[i].temp = temperatureList[i];
    }

this.setState({townList : townListCopy}); 
}


toFahrenheit = (elements) =>{
    let fahrenheitList = []

    for(let i=0; i<elements.length; i++){
        elements[i] = (elements[i] * 9/5 +32).toFixed(2);
        fahrenheitList.push(elements[i]);
    } 
    
return fahrenheitList;  
}

toCelsius = (elements) =>{
    let celciusList =[];

    for(let i=0; i<elements.length; i++){
        elements[i] = ((elements[i] - 32) * 5/9).toFixed(2);
        celciusList.push(elements[i]);
    }

return celciusList; 
}


avg = (elements) => {
    
    let sum=0;;    
    
    for(let i=0; i<elements.length; i++){
        sum += elements[i].main.temp;
    }
    return (sum/elements.length).toFixed(2);

}


handleInputChange = (e) => {
      e.preventDefault()
      this.setState({query:e.target.value});
}


fetchData = (city) => {

    var units_string = '&units=metric' ;
    let my_error = {...this.state.error};
    let my_success = {...this.state.success};
    this.state.unit == 'metric' ? units_string='&units=metric' : units_string='&units=imperial';

    axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+units_string+'&pl&mode=json&APPID=89df1cb971afca2cd1af3ae609d46acc&lang=pl')
    .then( (response) => {

        my_success.msg="Miasto zostało pomyślnie dodane"
        my_success.show = true;
        my_error.show = false;


        const item = {
            city,
            temp: this.avg(response.data.list),
            lat: response.data.city.coord.lat,
            lon: response.data.city.coord.lon,
        } 

        this.setState({
            townList:[...this.state.townList , item],
            success: my_success,
            error:my_error
        })  
        
        this.count(2500,false,false);

    }).catch( (error) => {

      my_error.msg = "Nie znaleziono takiego miasta";
      my_error.show = true;
      my_success.show = false;
      this.setState({error:my_error,success:my_success});

      this.count(2500,false,false);

    }) 
}

count = (counter,my_success_show,my_error_show) =>{

let my_error = {...this.state.error};
let my_success = {...this.state.success};

    setTimeout(()=>{ 
        my_success.show = my_success_show
        my_error.show = my_error_show
        this.setState({
            success: my_success,
            error:my_error
        })

    }, counter);
}

handleButtonClick = (e) =>{ 
    
    e.preventDefault()
    this.setState({error:false});
    let my_error = {...this.state.error};
    let my_success = {...this.state.success};    
    let city = e.target[0].value;

    if ( this.townCheck(this.state.townList,e)) {
        
        my_error.msg = "Podane miasto już istnieje";
        my_error.show = true;
        my_success.show = false;

        this.setState({error:my_error, success:my_success});

    }
    else this.fetchData(city);
}


townCheck = (elements,e) =>{
  
  let exist = false;

  for(let i=0; i<elements.length; i++){
      if (elements[i].city.toLowerCase() === e.target[0].value.toLowerCase()) {exist = true};
  }

  return exist;
}


handleDelete = (e,index) =>{
   let townListCopy = [...this.state.townList]
   townListCopy.splice(index,1);
   this.setState({townList:townListCopy})
}


componentWillMount = () =>{
    this.setState({unit:'metric'});
     localStorage.getItem('items') && this.setState({
         townList: JSON.parse(localStorage.getItem('items')),
         unit: JSON.parse(localStorage.getItem('unit')),
     })
     
}


componentWillUpdate = (nextProps,nextState) => {
      localStorage.setItem('items',JSON.stringify(nextState.townList));
   console.log('komponent zaktualizowany');
}  
  

handleUnitChange = (e) =>{

    this.setState({unit:e.target.value})
    localStorage.setItem('unit',JSON.stringify(e.target.value));
}

handleHide = () => {
    let my_error = {...this.state.error};
    my_error.show =  false;
    this.setState({ error: my_error });
}

render() {


    const contextElements = {
                              ...this.state,handleBtnClick:this.handleButtonClick,
                              handleDelete:this.handleDelete,
                              handleUnitChange:this.handleUnitChange,
                              handleInputChange:this.handleInputChange,
                              convertUnit:this.convertUnit,
                              hendleHide:this.handleHide
                            }

    return(
      <BrowserRouter>
          <AppContext.Provider value={contextElements}>
              <div className="App container">             
                  <Route path="/" component={SettingsBar}/>
                  <div className={styles.title}>
                    <h1>
                        <FontAwesome
                        className={styles.icon}
                        name='cloud'
                        size='1px'
                        className={styles.icon}
                        />  
                        Weather App
                    </h1><hr/>
                    <p>Prognoza pogody na <b>następne 5 dni</b></p>
                  </div>
                  <Route exact path="/"component={AddForm}/> 
                  <Route path="/settings" component={SettingsView}/>            
                  <Route exact path="/" component={ListView}/>
                  <Route  path="/itemview" component={ItemView}/>
              </div>
          </AppContext.Provider>     
      </BrowserRouter>
       
    )
  
  }
}
export default Root;
