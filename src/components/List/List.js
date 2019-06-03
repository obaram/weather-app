import React from 'react';
import {Listitem} from './ListItem/Listitem'
import { Table, Alert} from 'react-bootstrap';
import styles from './List.module.scss'

const List = ({items,handleDelete,unit,error, success}) => (

    <>
    {error.show && <Alert  className={styles.alert} key="alert" variant="warning">{error.msg}</Alert>  }
    {success.show && <Alert  className={styles.alert} key="success" variant="success">{success.msg}</Alert>  } 
   
   <Table striped bordered hover className={styles.wrapper}>
    <thead>
        <tr>
        <th>#</th>
        <th>Miasto</th>
        <th>Średnia prognozowana tempretura</th>
        <th></th>
        </tr>
    </thead>
    <tbody>
        
        {
            items.map((item,index) => <Listitem item={item} index={index} handleDelete={handleDelete} key={index} unit={unit}/>)
        }
        
    </tbody>
    </Table>
    </>
)

export default List;
