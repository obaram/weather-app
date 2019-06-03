import React from 'react';
import { Button, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './ItemView.module.scss'
import FontAwesome from 'react-fontawesome'

class ItemView extends React.Component {


render(){
    


    return(
        
        <div className={styles.wrapper}>
            
            <Card className={styles.itemcard}>
        
                
                <Card.Header as="h1">

                    {this.props.location.query.item.city}

                </Card.Header>
            
                <Card.Body>
                <p>Szerokość geograficzna: {this.props.location.query.item.lat}</p>
                <p>Długość geograficzna: {this.props.location.query.item.lon}</p>
                <p>Średnia prognozowana temperatura: {this.props.location.query.item.temp}°C</p>
                <div className={styles.btnWrapper}>
                    <Button variant="outline-primary" type="submit" className="btn pull-right" ><Link to="/">
                    <FontAwesome
                        className={styles.icon}
                        name='arrow-left'
                        size='1px'
                        className={styles.icon}
                        />    
                        
                        Powrót</Link></Button>
                </div>
                </Card.Body>
            
            </Card>

        </div>
    )
}

}


export default ItemView;