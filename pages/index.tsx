import { useState, useEffect } from 'react';
import styles, { globalStyles } from '../pageStyles/styles';
import Item from '../components/Item';

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getColumn(min: number, max: number, items?: number) {
  if (items === 2) {
    const value1 = random(min, max-5);
    const value2 = random(min+5, max);

    if (value2 - min > 7) {
      return [value1, null, value2];
    }

    return [value1, value2, null];
  }

  // 1 item
  const value = random(min, max);
  if (value - min <= 3) {
    return [value, null, null];
  }
  if (value - min <= 7) {
    return [null, value, null];
  }
  return [null, null, value];
}

const initialNumbers = [
  getColumn(1,9, 2),
  getColumn(10, 19),
  getColumn(20, 29, 2),
  getColumn(30, 39),
  getColumn(40, 49, 2),
  getColumn(50, 59, 2),
  getColumn(60, 69, 2),
  getColumn(70, 79,),
  getColumn(80, 89, 2),
];


function Index() {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    setNumbers(initialNumbers);
  },[]);

  return (
    <div className="board">
      <style jsx>{globalStyles}</style>
      <style jsx>{styles}</style>
      {numbers.map((column, c) => (
        <div className="column" key={`column-${c}`}>
          {column.map((value, i) => (
            <Item value={value} key={`item-${value}-${c}-${i}`} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Index;
