import styles from './index.module.css';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import UserModal from './components/UserModal/UserModal';
import { Fragment, useState } from 'react';

const App = ()=> {
  const users = [];
  const [userDB, setUserDB] = useState(users);
  let content = <h1>No users added.</h1>
  const errUsername = "Please enter valid name and age (non-empty values).";
  const errAge = "Please enter a valid age (>0)."
  const [modal, setModal] = useState(null);

  const dataHandler = (user)=> {
    setUserDB((prevUsers)=> {
      return([...prevUsers, user]);
    });
  }

  const deleteHandler = (userKey)=> {
    setUserDB(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.key !== userKey);
      return updatedUsers;
    });
  }

  const invalidUsernameHandler = ()=> {
    setModal(<UserModal errMsg={errUsername} closeModal={closeModalHandler} />);
  }

  const invalidAgeHandler = ()=> {
    setModal(<UserModal errMsg={errAge} closeModal={closeModalHandler} />);
  }

  const closeModalHandler = ()=> {
    setModal(null);
  }

  if(userDB.length > 0){
    content = <UserList displayData={userDB} onDelUser={deleteHandler} />
  }

  return (
    <Fragment>
      <div className={styles.box}>
        <UserForm 
          getData={dataHandler} 
          invalidUsername={invalidUsernameHandler} 
          invalidAge={invalidAgeHandler}
        />
      </div>
      <div className={styles['display-panel']}>
        {content}
      </div>
      {modal}
    </Fragment>
  );
}

export default App;
