import { useEffect, useState } from 'react';
import './App.css';

interface ProductProps {
  id: number;
  thumbnail: string;
  title: string;
}

function App() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  async function fetchProducts() {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
    const data = await res.json();
    if (data && data.products) {
      console.log(data )
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / 10));
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (selectedPage: number) => {
    if (selectedPage >= 1 && selectedPage <= totalPages && selectedPage !== page) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => {
            return (
              <span className="products__single" key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>
            ◀
          </span>

          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span onClick={() => selectPageHandler(page + 1)} className={page < totalPages ? "" : "pagination__disable"}>
            ▶
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
