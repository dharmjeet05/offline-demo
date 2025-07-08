import { useEffect, useState } from 'react';

function About() {
  const [data, setData] = useState(null);
  // const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        // setStatus('Online - About data loaded');
      })
      .catch(() => {
        // setStatus('Offline - About data from cache');
      });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>ℹ️ About Page</h2>
      {/* <p>{status}</p> */}
      {data && (
        <>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
}

export default About;
