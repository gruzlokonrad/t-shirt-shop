import React from 'react'
import clsx from 'clsx';

const OptionSize = ({
  classContainer,
  classHeader,
  classList,
  list,
  sizeIndex,
  classActive,
  action
}) => {
  return (
    <div className={classContainer}>
      <h3 className={classHeader}>Sizes</h3>
      <ul className={classList}>
        {list.map(({ name }, index) => (
          <li key={index}>
            <button
              type="button"
              className={clsx(name === list[sizeIndex].name && classActive)}
              onClick={() => action(index)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OptionSize;