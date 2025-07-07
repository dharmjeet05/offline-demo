import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setStatus("Data loaded from network");
      })
      .catch(() => {
        setStatus("You are offline - data loaded from cache");
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Offline Demo App</h1>
      <p>{status}</p>
      {data && (
        <div style={{ marginTop: '1rem' }}>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;
