import { useState } from 'react';
import styles from './styles';
import classnames from 'classnames';


interface ItemProps {
  value: number | null;
}

function Item({ value }: ItemProps) {
  const [marked, setMarked] = useState(false);

  const toggleMarked = () => {
    if(value) {
      setMarked(!marked);
    }
  }
  console.log(value);
  return (
    <div
      className={classnames(
        'item',
        {number: !!value},
        {null: !value},
        {marked: !!marked}
      )}
      onClick={toggleMarked}
    >
      <style jsx>{styles}</style>
      {value && <span>{value}</span>}
    </div>
  )



}

export default Item;
