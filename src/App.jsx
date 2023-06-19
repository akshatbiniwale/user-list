import styles from './index.module.css';
import UserForm from './components/UserForm';

const App = ()=> {
  return (
    <div className={styles.box}>
      <UserForm />
    </div>
  );
}

export default App;
