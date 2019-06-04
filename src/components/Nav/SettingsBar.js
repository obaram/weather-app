import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './SettingsBar.module.scss'
import FontAwesome from 'react-fontawesome'

const SettingsBar = (props) => (

    <div className={styles.wrapper}>
        <Link to="/settings"><Button variant="outline-primary">
        <FontAwesome
                className={styles.icon}
                name='gears'
                size='1px'
                className={styles.icon}
        />                
        Ustawienia</Button></Link>
    </div>

)

export default SettingsBar;