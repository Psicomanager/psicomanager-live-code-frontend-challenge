import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem !== '') {
      setItems(items.push(newItem));
      setNewItem('');
    }
  };

  // implemente uma função para remover o item da lista
  function handleRemoveItem() {
    // implemente sua solução aqui
  }

  return (
    <div className="App">
      <h1>Lista de itens</h1>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
            <button onClick={handleRemoveItem}>Remove</button>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: 'flex',
          gap: '10px',
        }}
      >
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
}

export default App;
