import Background from '~/components/Background';
import Inventory from '~/components/Inventory';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Background />

      <div className={styles['content-layer']}>
        <Inventory />
      </div>
    </div>
  );
}

export default App;
