import styles from './UserModal.module.css'

const UserModal = ()=> {
    return(
        <div className={styles['modal-box']}>
            <div className={styles.heading}>
                <h1>Invalid Input</h1>
            </div>
            <div className={styles['text-box']}>
                <p>Please enter valid name and age (non-empty values)</p>
                {/* <p>Please enter a valid age (&gt;0).</p> */}
            </div>
            <div className={styles['button-box']}>
                <button>Okay</button>
            </div>
        </div>
    );
}

export default UserModal;