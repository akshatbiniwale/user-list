import { useState } from 'react';

import styles from './UserForm.module.css'

const UserForm = (props) => {
    const [username, setUsername] = useState('');

    const usernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const [age, setAge] = useState('');

    const ageHandler = (event) => {
        setAge(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (username === '') {
            props.invalidUsername();
        }else if (age < 0) {
            props.invalidAge();
        } else {
            const id = Math.round(Math.random() * 1000) + 1;
            const userData = {
                key: id,
                username: username,
                age: age
            }

            props.getData(userData);
        }

        setUsername('');
        setAge('');
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['input-container']}>
                <label htmlFor='username'>Username</label>
                <input type="text" name="username" id="username" autoComplete='off' onChange={usernameHandler} value={username} />
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