import styles from './UserModal.module.css'

const UserModal = (props)=> {
    const closeModalHandler = ()=> {
        props.closeModal();
    }

    return(
        <div className={styles.backdrop}>
            <div className={styles['modal-box']}>
                <div className={styles.heading}>
                    <h1>Invalid Input</h1>
                </div>
                <div className={styles['text-box']}>
                    <p>{props.errMsg}</p>
                </div>
                <div className={styles['button-box']}>
                    <button onClick={closeModalHandler}>Okay</button>
                </div>
            </div>
        </div>
    );
}

export default UserModal;