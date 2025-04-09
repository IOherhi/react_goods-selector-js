import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export function App() {
  const [buttonStates, setButtonStates] = useState(
    Array(goods.length).fill('AddButton')
  );
  const [selectedGood, setSelectedGood] = useState('Jam');

  const toggleButton = (index) => {
    const updatedStates = [...buttonStates];
    updatedStates[index] =
      updatedStates[index] === 'AddButton' ? 'ClearButton' : 'AddButton';
    setButtonStates(updatedStates);

    if (updatedStates[index] === 'ClearButton') {
      setSelectedGood(goods[index]);
    } else if (selectedGood === goods[index]) {
      setSelectedGood('');
    }
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? selectedGood : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setSelectedGood('')}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, i) => (
            <tr
              key={good}
              data-cy="Good"
              className={
                buttonStates[i] === 'ClearButton'
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                <button
                  data-cy="AddButton"
                  type="button"
                  className="button"
                  onClick={() => toggleButton(i)}
                >
                  {buttonStates[i] === 'AddButton' ? '+' : '-'}
                </button>
              </td>
              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
