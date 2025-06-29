import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ChartComponent from './components/ChartComponent';
import {fetchAllProducts, fetchRandomProducts} from './utils/helper'

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function loadProducts() {
    setLoading(true);
    setError(null);
    try {
      const allProducts = await fetchAllProducts();
      const randomProducts = await fetchRandomProducts(allProducts);
      setProducts(randomProducts);
      console.log("allProducts:", allProducts);
      console.log("randomProducts:", randomProducts);
    } catch (e) {
      console.error('Error has occured while fetching products', e);
      setError('Dogodila se greška prilikom dohvaćanja podataka! Pokušajet ponovo');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
      loadProducts();
    }, []
  );

return (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Pregled cijena proizvoda</h1>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {error ? (
          <div style={{ color: 'red', fontWeight: 'bold' }}>{error}</div>
        ) : (
          <ChartComponent products={products} />
        )}
      </div>

      {!error && (
        <button onClick={loadProducts} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Osvježi podatke
        </button>
      )}
    </div>
  );
}

export default App
