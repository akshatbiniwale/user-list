import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './UserModal.module.css'

const Backdrop = (props)=> {
    return (<div className={styles.backdrop} onClick={props.onConfirm}/>);
}

const ModalOverlay = (props)=> {
    return (
        <div className={styles['modal-box']}>
            <div className={styles.heading}>
                <h1>Invalid Input</h1>
            </div>
            <div className={styles['text-box']}>
                <p>{props.errMsg}</p>
            </div>
            <div className={styles['button-box']}>
                <button onClick={props.onConfirm}>Okay</button>
            </div>
        </div>
    );
}

const UserModal = (props)=> {
    const closeModalHandler = ()=> {
        props.closeModal();
    }

    return(
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={closeModalHandler} />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay errMsg={props.errMsg} onConfirm={closeModalHandler} />, document.getElementById("overlay-root"))}
        </Fragment>
    );
}

export default UserModal;