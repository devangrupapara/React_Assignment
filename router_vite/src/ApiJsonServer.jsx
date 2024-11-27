import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiJsonServer = () => {
    const [id, setId] = useState("");
    const [data, setData] = useState({
        name: "",
        age: "",
        gender: ""
    });
    const [allData, setAllData] = useState([]);
    const [loading, setLoading] = useState(false);

    const saveData = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (id) {
                // Update existing data
                await axios.put(`http://localhost:3000/users/${id}`, data);
            } else {
                // Insert new data
                await axios.post("http://localhost:3000/users", data);
            }
            await fetchData();
            resetForm();
        } catch (error) {
            console.error("Error saving data:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            setAllData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const editData = async (id) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/users/${id}`);
            setData(response.data);
            setId(id);
        } catch (error) {
            console.error("Error fetching user data:", error);
        } finally {
            setLoading(false);
        }
    };

    const deleteData = async (id) => {
        if (!window.confirm("Are you sure you want to delete this record?")) return;
        try {
            setLoading(true);
            await axios.delete(`http://localhost:3000/users/${id}`);
            await fetchData();
        } catch (error) {
            console.error("Error deleting user:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const resetForm = () => {
        setData({ name: "", age: "", gender: "" });
        setId("");
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>User Management</h2>
            <form onSubmit={saveData} style={{ marginBottom: "20px" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={handleChange} 
                        value={data.name} 
                        style={{ marginLeft: "10px", padding: "5px", width: "200px" }} 
                    />
                </div>
                
                <div style={{ marginBottom: "10px" }}>
                    <label>Age:</label>
                    <input 
                        type="number" 
                        name="age" 
                        onChange={handleChange} 
                        value={data.age} 
                        style={{ marginLeft: "10px", padding: "5px", width: "100px" }} 
                    />
                </div>
                
                <div style={{ marginBottom: "10px" }}>
                    <label>Gender:</label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        onChange={handleChange} 
                        checked={data.gender === "male"} 
                        style={{ marginLeft: "10px" }}
                    /> Male
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female" 
                        onChange={handleChange} 
                        checked={data.gender === "female"} 
                        style={{ marginLeft: "10px" }}
                    /> Female
                </div>
                
                <button 
                    type="submit" 
                    disabled={loading} 
                    style={{ padding: "10px 20px", marginRight: "10px", background: "#4CAF50", color: "#fff", border: "none", cursor: "pointer" }}
                >
                    {loading ? "Saving..." : "Save Data"}
                </button>
                <button 
                    type="button" 
                    onClick={resetForm} 
                    style={{ padding: "10px 20px", background: "#f44336", color: "#fff", border: "none", cursor: "pointer" }}
                >
                    Reset
                </button>
            </form>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ background: "#f2f2f2" }}>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Id</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Age</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Gender</th>
                        <th style={{ padding: "10px", border: "1px solid #ddd" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allData.map((user) => (
                        <tr key={user.id}>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.id}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.name}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.age}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.gender}</td>
                            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                                <button 
                                    onClick={() => editData(user.id)} 
                                    style={{ padding: "5px 10px", marginRight: "5px", background: "#2196F3", color: "#fff", border: "none", cursor: "pointer" }}
                                >
                                    Edit
                                </button>
                                <button 
                                    onClick={() => deleteData(user.id)} 
                                    style={{ padding: "5px 10px", background: "#f44336", color: "#fff", border: "none", cursor: "pointer" }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApiJsonServer;
