import React from 'react'
import clsx from 'clsx';

const OptionColor = ({
  classContainer,
  classHeader,
  classList,
  list,
  colorIndex,
  classActive,
  parseColor,
  action
}) => {
  return (
    <div className={classContainer}>
      <h3 className={classHeader}>Colors</h3>
      <ul className={classList}>
        {list.map((color, index) => (
          <li key={index}>
            <button
              type="button"
              className={clsx(parseColor(color), color === list[colorIndex] && classActive)}
              onClick={() => action(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OptionColor