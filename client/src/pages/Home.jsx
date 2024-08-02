import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

export const Home = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [users, setUsers] = useState(null);

  const handleFileChange = (event) => {
    console.log(event);
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);

    // axios.post(`${window.location.origin}/importUser`, formData)
    axios.post('http://localhost:3000/importUser', formData)
      .then((response) => {
        console.log(response.data);
        handleButton(); // Call handleButton function here
      })
      .catch((error) => {
        console.error(error);
      });

  };

  const handleButton = async () => {
    // axios.get(`${window.location.origin}/getUser`)
    axios.get('http://localhost:3000/getUser')
      .then(users => setUsers(users.data)) 
      .catch(err => console.log(err))
  }

  return (
    <div className="w=100 vh=100 mt-5 d-flex justify-content-center allign-items-center">
      <div className="w=50">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      {users && (
        <table className='data-table'>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                email
              </th>
              <th>
                Adress
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return (
                  <tr key={user._id}>
                    <td>{user.Name}</td>
                    <td>{user.email}</td>
                    <td>{user.Adress}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      )}
      </div>
    </div>
  );
}