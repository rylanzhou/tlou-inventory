import { useMemo } from 'react';
import { useAtomValue } from 'jotai';

import { currentSelectedToolAtom, materialsAtom } from '~/atoms';

import styles from './styles.module.scss';

export default function Text() {
  const currentSelectedTool = useAtomValue(currentSelectedToolAtom);
  const materials = useAtomValue(materialsAtom);

  const recipeItems = useMemo(() => {
    const materialRequired = currentSelectedTool?.materials ?? [];

    return materialRequired.map((materialKey) => (
      <span key={materialKey}>{materials[materialKey]?.name}</span>
    ));
  }, [currentSelectedTool, materials]);

  return (
    <div className={styles.Text}>
      <h2 className={styles.name}>{currentSelectedTool?.name}</h2>
      <div className={styles.description}>
        <p>{currentSelectedTool?.description}</p>
      </div>
      <p className={styles.recipe}>
        Recipe requires{' '}
        {recipeItems.map((element, index, array) => {
          if (index === 0) {
            return <span key={index}>{element}</span>;
          }

          if (index < array.length - 1) {
            return (
              <>
                , <span key={index}>{element}</span>
              </>
            );
          }

          return (
            <>
              {' '}
              and <span>{element}</span>
            </>
          );
        })}
        .
      </p>
    </div>
  );
}
