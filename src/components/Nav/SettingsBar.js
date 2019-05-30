import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styles from './SettingsBar.module.scss'
import FontAwesome from 'react-fontawesome'

const SettingsBar = (props) => (

    <div className={styles.wrapper}>
        <Button variant="outline-primary"><Link to="/settings">
        <FontAwesome
                        className={styles.icon}
                        name='gears'
                        size='1px'
                        className={styles.icon}
                        />                
            Settings</Link></Button>
    </div>

)

export default SettingsBar;