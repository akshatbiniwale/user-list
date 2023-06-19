import { useState } from 'react';

import styles from './UserForm.module.css'

const UserForm = (props)=> {
    const [username, setUsername] = useState('');

    const usernameHandler = (event)=> {
        setUsername(event.target.value);
    }

    const [age, setAge] = useState('');

    const ageHandler = (event)=> {
        setAge(event.target.value);
    }

    const submitHandler = (event)=> {
        event.preventDefault();

        const userData = {
            username: username,
            age: age
        }

        props.getData(userData);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['input-container']}>
                <label htmlFor='username'>Username</label>
                <input type="text" name="username" id="username" onChange={usernameHandler} value={username} />
            </div>
            <div className={styles['input-container']}>
                <label htmlFor='age-years'>Age (Years)</label>
                <input type="number" name="age" id="age" onChange={ageHandler} value={age} />
            </div>
            <button className={styles['submit-button']} type='submit'>Add User</button>
        </form>
    );
}

export default UserForm;