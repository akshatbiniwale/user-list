import styles from './index.module.css';
import UserForm from './components/UserForm';
import UserDisplay from './components/UserDisplay';
import { Fragment, useState } from 'react';

const App = ()=> {
  const users = [];
  const [userDB, setUserDB] = useState(users);
  let content = <h1>No users added.</h1>

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

  if(userDB.length > 0){
    content = <UserDisplay displayData={userDB} onDelUser={deleteHandler} />
  }

  return (
    <Fragment>
      <div className={styles.box}>
        <UserForm getData={dataHandler}/>
      </div>
      <div className={styles['display-panel']}>
        {content}
      </div>
    </Fragment>
  );
}

export default App;
