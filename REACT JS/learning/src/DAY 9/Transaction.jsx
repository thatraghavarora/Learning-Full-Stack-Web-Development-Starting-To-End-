import React, { useState, useTransition } from 'react';

const dummyData = [
  'Apple',
  'Banana',
  'Orange',
  'Mango',
  'Grapes',
  'Pineapple',
  'Strawberry',
  'Blueberry',
  'Watermelon',
];

function SearchComponent() {
  const [input, setInput] = useState('');
  const [list, setList] = useState(dummyData);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const filtered = dummyData.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setList(filtered);
    });
  };

  return (
    <div>
      <input
        value={input}
        onChange={handleChange}
        placeholder="Search fruits..."
      />
      {isPending && <p>Filtering...</p>}
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
