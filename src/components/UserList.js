import React, { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

const UserList = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetched, setFetched] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setFetched(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold">Users List</h2>

      <button 
        onClick={fetchUsers}
        className="bg-blue-500 text-white mt-4 py-2 px-4 rounded"
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Get Users'}
      </button>

      {loading && (
        <div className="flex justify-center mt-4">
          <ThreeDots 
            height="50" 
            width="50" 
            radius="9"
            color='black'
            ariaLabel="three-dots-loading"
          />
        </div>
      )}

      {error && <p className="text-red-500 mt-4">Error fetching users: {error}</p>}

      {fetched && !loading && !error && (
        <>
          <h6 className='mt-6'>Click a user to create a post</h6>
          <ul className='flex flex-wrap justify-center'>
            {users.map((user) => (
              <li
                key={user.id}
                className="p-4 m-2 bg-gray-900 text-white rounded cursor-pointer hover:bg-gray-700"
                onClick={() => onSelectUser(user)}
              >
                {user.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default UserList;
