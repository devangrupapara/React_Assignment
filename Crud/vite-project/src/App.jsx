import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the User Management App</h1>
      <p>Use the navigation menu to manage user data.</p>
    </div>
  );
}

function UserForm({ data, setData, saveData, hendelChange }) {
  return (
    <form action="#" method='post' onSubmit={saveData} className="user-form">
      <table>
        <tr>
          <td><h2>Name:</h2></td>
          <td><input type="text" name="name" id="name" value={data.name} onChange={hendelChange} required /></td>
        </tr>
        <tr>
          <td><h2>Age:</h2></td>
          <td><input type="number" name="age" id="age" value={data.age} onChange={hendelChange} required /></td>
        </tr>
        <tr>
          <td><h2>Salary:</h2></td>
          <td><input type="number" name="Salary" id="Salary" value={data.Salary} onChange={hendelChange} required /></td>
        </tr>
        <tr>
          <td>
            <input type="radio" name="gender" value="male" onChange={hendelChange} checked={data.gender === "male"} required /> Male
            <input type="radio" name="gender" value="female" onChange={hendelChange} checked={data.gender === "female"} required /> Female
          </td>
        </tr>
        <tr>
          <td colSpan="2">
            <button type='submit' className='save'>Save</button>
          </td>
        </tr>
      </table>
    </form>
  );
}

function UserList({ alldata, delData, editData }) {
  const navigate = useNavigate();

  return (
    <table border={2} className="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {alldata.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.Salary}</td>
            <td>{user.gender}</td>
            <td>
              <button onClick={() => delData(index)}>Delete</button>
              <button onClick={() => { editData(index); navigate('/form'); }}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function App() {
  const [data, setData] = useState({ name: '', age: '', Salary: '', gender: '' });
  const [id, setId] = useState('');
  const [alldata, setAlldata] = useState([]);

  const hendelChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const saveData = (e) => {
    e.preventDefault();
    if (id !== '') {
      const updatedData = alldata.map((item, index) =>
        index === Number(id) ? { ...item, ...data } : item
      );
      setAlldata(updatedData);
    } else {
      setAlldata([...alldata, data]);
    }
    setData({ name: '', age: '', Salary: '', gender: '' });
    setId('');
  };

  const delData = (id) => {
    setAlldata(alldata.filter((_, index) => index !== id));
  };

  const editData = (id) => {
    const selectedData = alldata[id];
    setData(selectedData);
    setId(id);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/form">Add/Edit User</Link>
          <Link to="/list">User List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<UserForm data={data} setData={setData} saveData={saveData} hendelChange={hendelChange} />} />
          <Route path="/list" element={<UserList alldata={alldata} delData={delData} editData={editData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
