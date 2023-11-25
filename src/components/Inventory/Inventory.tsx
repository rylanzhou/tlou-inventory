import Action from './Action';
import Craft from './Craft';
import Material from './Material';
import Navbar from './Navbar';
import Text from './Text';

import styles from './styles.module.scss';

export default function Inventory() {
  return (
    <div className={styles.Inventory}>
      <Navbar />
      <Text />
      <hr />
      <Material />
      <hr />
      <Craft />
      <hr />
      <Action />
    </div>
  );
}
