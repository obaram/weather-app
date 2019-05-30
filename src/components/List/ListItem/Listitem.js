import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AppContext from '../../../Context'
import styles from './ListItem.module.scss'
import FontAwesome from 'react-fontawesome'

const Listitem = ({index,item,unit,handleDelete}) => (
  

  <AppContext.Consumer>
  { (context) => (

  <tr className={styles.wrapper}>
    <td>{index+1}</td>
    <td><Link to={{pathname: `/itemview/${item.city}`, query: { item:item}}}>{item.city}</Link></td>
    <td>{item.temp} {unit==="metric" ? <span>°C</span> : <span>°F</span>}</td>
    <td><Button variant="outline-danger" onClick = {(e) => handleDelete(e,index)} className={styles.button}>

    <FontAwesome
        name='remove'
        size='1px'
        className={styles.icon}
      />  
      
      
      
     Delete</Button></td>
 </tr>


  )}
  </AppContext.Consumer>


)

export {Listitem};