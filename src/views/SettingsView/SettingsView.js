import React from 'react';
import {Link} from 'react-router-dom';
import { Button, InputGroup, Card } from 'react-bootstrap';
import styles from './SettingsView.module.scss'
import AppContext from '../../Context'
import FontAwesome from 'react-fontawesome'

const SettingsView =  (props) => 

(
    <AppContext.Consumer>
    { (context) => (
    <div className={styles.wrapper}>
        <Card className={styles.settingsCard}>
        <Card.Header as="h2">Ustawienia</Card.Header>
        <Card.Body>
            <p>Jednostka:</p>
            <InputGroup>
            <label>
                <input type="radio" name="unit" value="metric" checked={context.unit === "metric"} onChange={(e) => {
                    
                    context.handleUnitChange(e);
                    context.convertUnit(context.unit);
                
                }}/>°C
            </label>
            </InputGroup>
            <InputGroup>
            <label>
                <input type="radio" name="unit" value="imperial" checked={context.unit === "imperial"}  onChange={(e) => {
                   
                   context.handleUnitChange(e);
                   context.convertUnit(context.unit);

                }}/>°F
            </label>
            </InputGroup>
        <div className={styles.btnWrapper}>
        <Button variant="outline-primary" type="submit" className="btn" ><Link to="/">
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
    )}
    </AppContext.Consumer>


)

export default SettingsView;