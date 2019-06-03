import React from 'react';
import styles from './Form.module.scss'
import { Form, FormGroup ,Button, FormLabel, FormControl, FormText, Alert } from 'react-bootstrap';
import AppContext from '../../Context'


const AddForm = () => (

  <AppContext.Consumer>
  { (context) => (

    <Form className={styles.wrapper} onSubmit={(e) => context.handleBtnClick(e)}>
      <FormGroup controlId="addCityForm" className={styles.items} >
        <FormControl type="text" placeholder="Podaj miasto" autoComplete="off" className={styles.text} onChange={(e) => context.handleInputChange(e)}/>
        <Button variant="primary" type="submit" className="btn" >Dodaj</Button>
      </FormGroup>
    </Form>
   
  )}
  
  </AppContext.Consumer>

)



export default AddForm;