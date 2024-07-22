import { useEffect, useState } from 'react';
import './main.css';
function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    search(' ');
  }, []);
  
  const search = async (q) =>{
    const response = await fetch(
      'http://localhost:8001?' + new URLSearchParams({ q })
      // 'http://localhost:8901?q='+q
    );

    const data = await response.json();
    setAnimals(data);
    
  };
  
  return (
    <main>
      <h1>Animal Farm</h1>

      <input type="text" placeholder='Search' onChange={(e) => search(e.target.value) } />

      <ul>
        {animals.map((animal) => (
          <Animal key={animal.id} {...animal} />
        ))}

        {animals.length === 0 && 'No animals found'}
      </ul>

    </main>
  )
}

function Animal({ type, name, age }){
  return (
    <li>
      <b>{type}</b> {name} ({age} years old)
    </li>
  );
}

export default App
