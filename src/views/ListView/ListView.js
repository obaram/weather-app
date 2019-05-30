import React from 'react';
import List from '../../components/List/List'
import { Table, Alert } from 'react-bootstrap';
import AppContext from '../../Context'


const ListView = () => (

    <AppContext.Consumer>
    { (context) => (
    
        <List 
            items={context.townList} 
            handleDelete={context.handleDelete} 
            unit={context.unit} 
            error={context.error} 
            success={context.success}>
        </List>
        
    )}

    </AppContext.Consumer>

)

export default ListView;
