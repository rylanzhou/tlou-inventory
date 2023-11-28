import Navbar from '~components/Navbar';

import Crafting from './Crafting';

import styles from './styles.module.scss';

export default function Inventory() {
  return (
    <div className={styles.Inventory}>
      <Navbar />

      <Crafting />
    </div>
  );
}
