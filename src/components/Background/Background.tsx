import BackgroundImg from '~/assets/images/background.jpg';

import styles from './styles.module.scss';

export default function Background() {
  return (
    <div className={styles.Background}>
      <img alt="The last of us background image" src={BackgroundImg} />
    </div>
  );
}
