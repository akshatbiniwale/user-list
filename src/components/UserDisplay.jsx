import { Fragment } from 'react';
import styles from './UserDisplay.module.css'

const UserDisplay = (props)=> {
    return (
        <Fragment>
            {props.displayData.map((data)=> {
                return(
                    <div className={styles.disUser} key={data.key}>
                        <h1>{data.username} ({data.age})</h1>
                    </div>
                );
            })}
        </Fragment>
    );
}

export default UserDisplay;