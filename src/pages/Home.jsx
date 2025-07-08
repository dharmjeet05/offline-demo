import { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setStatus('Online - Home data loaded');
      })
      .catch(() => {
        setStatus('Offline - Home data from cache');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>🏠 Home Page</h2>
      <p>{status}</p>
      {data && (
        <>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
}

export default Home;
