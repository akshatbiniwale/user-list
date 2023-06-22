import styles from './UserBox.module.css'

const UserBox = (props)=> {
    const deleteHandler = ()=> {
        props.onDelete(props.id)
    }

    return(
        <div className={styles.disUser} onClick={deleteHandler}>
            <h1>{props.username} ({props.age})</h1>
        </div>
    );
}

export default UserBox