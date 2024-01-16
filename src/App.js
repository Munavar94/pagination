import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Pagination from './Pagination';

function App() {
  const [data, setData] = useState([]); // full Data
  const [perPage, setPerpage] = useState([]); // 10 record

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setData(res.data);
        setPerpage(res.data.slice(0, 10));
      })
  }, []);

  const pageHandler = (pageNumber) => {
    setPerpage(data.slice((pageNumber*10)-10, pageNumber*10))
  };

  return (
    <div className="App">
      {
        data.length >= 1 ? 
          <div>
            {
              perPage.map(post => (
                <div style={{ border: '1px solid', margin: '10px' }}>
                  {post.title}
                </div>
              ))
            }
            <br />
            <Pagination data={data} pageHandler={pageHandler} />
          </div>
          :
          <p>Data Not Loaded</p>
      }
    </div>
  );
}

export default App;
