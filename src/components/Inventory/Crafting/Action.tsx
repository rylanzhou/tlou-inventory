import cls from 'classnames';
import { useAtomValue } from 'jotai';

import { isCraftingAtom } from '~/atoms';

import { Loading } from './svgs';

import styles from './styles.module.scss';

export default function Action() {
  const isCrafting = useAtomValue(isCraftingAtom);

  return (
    <div className={cls(styles.Action, { [styles.crafting]: isCrafting })}>
      <div className={styles.option}>
        <div className={styles['long-control-key']}>
          <span>E</span>

          <Loading
            className={styles.progress}
            shouldAnimate={isCrafting}
            toProgress={isCrafting ? 100 : 0}
          />
        </div>
        <span>CRAFT</span>
      </div>
      <div className={styles.option}>
        <div className={styles['control-key']}>ESC</div>
        <span>BACK</span>
      </div>
    </div>
  );
}
