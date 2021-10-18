
import './App.css';
import data from './data';

// Components
import List from './components/List';
import { useState } from 'react';

function App() {


  const [people, setPeople] = useState(data)


  return (
    <main>
      <section className="container">
        <h3>{people.length} cumpleaños hoy</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>Limpiar todo</button>
      </section>
    </main>
  );
}

export default App;
