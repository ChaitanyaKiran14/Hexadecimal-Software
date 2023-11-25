import React, { useState, useEffect } from 'react';
import "./index.css"
import axios from 'axios';

const UserTable = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/v1/users${searchText ? `?searchText=${searchText}` : ''}`);
        setData(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setData([]);
        setError('Error fetching data. Please try again later.');
      }
    };

    fetchData();
  }, [searchText]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Data is not in the expected format.</div>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <ul>
                  {user.posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
