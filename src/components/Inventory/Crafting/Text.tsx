import { Fragment, useMemo } from 'react';
import cls from 'classnames';
import { useAtomValue } from 'jotai';

import { currentSelectedToolAtom, materialsAtom } from '~/atoms';

import styles from './styles.module.scss';

export default function Text() {
  const currentSelectedTool = useAtomValue(currentSelectedToolAtom);
  const materials = useAtomValue(materialsAtom);

  const recipeItems = useMemo(() => {
    const materialRequired = currentSelectedTool?.materials ?? [];

    return materialRequired.map((materialKey) => (
      <span
        key={materialKey}
        className={cls({ [styles.insufficient]: (materials[materialKey]?.count || 0) < 1 })}
      >
        {materials[materialKey]?.name}
      </span>
    ));
  }, [currentSelectedTool, materials]);

  const extraDescription = useMemo(() => {
    if (!currentSelectedTool?.extraDescription) {
      return null;
    }

    const keyboardMatch = currentSelectedTool.extraDescription.match(/\{(.*)\}/);

    // Check if there is any keyboard placeholder {.*}, and replace it with special span element
    // e.g., {R} will be replaced with <span className={styles['control-key']}>R</span>
    if (keyboardMatch) {
      const elements = currentSelectedTool.extraDescription.split(/{.*}/);

      return (
        <>
          {elements[0]} <span className={styles['control-key']}>{keyboardMatch[1]}</span>{' '}
          {elements[1]}
        </>
      );
    }

    return currentSelectedTool.extraDescription;
  }, [currentSelectedTool]);

  return (
    <div className={styles.Text}>
      <h2 className={styles.name}>{currentSelectedTool?.name}</h2>
      <div className={styles.description}>
        <p>{currentSelectedTool?.description}</p>
        {currentSelectedTool?.extraDescription && <p>{extraDescription}</p>}
      </div>
      <p className={styles.recipe}>
        Recipe requires{' '}
        {recipeItems.map((element, index, array) => {
          if (index === 0) {
            return <span key={index}>{element}</span>;
          }

          if (index < array.length - 1) {
            return (
              <Fragment key={index}>
                , <span>{element}</span>
              </Fragment>
            );
          }

          return (
            <Fragment key={index}>
              {' '}
              and <span>{element}</span>
            </Fragment>
          );
        })}
        .
      </p>
    </div>
  );
}
