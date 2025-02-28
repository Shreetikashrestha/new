// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Table, Modal, Input, Form, message } from "antd";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingUser, setEditingUser] = useState(null);
//   const [form] = Form.useForm();

//   // Fetch Users
//   const fetchUsers = async () => {
//     try {
//       const { data } = await axios.get("/api/users");
//       setUsers(data);
//     } catch (error) {
//       message.error("Failed to fetch users.");
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Open Modal for Edit
//   const handleOpenModal = (user) => {
//     setEditingUser(user);
//     form.resetFields();
//     form.setFieldsValue(user);
//     setIsModalOpen(true);
//   };

//   // Update User
//   const handleSubmit = async (values) => {
//     try {
//       if (editingUser) {
//         await axios.put(`/api/users/${editingUser._id}`, values);
//         message.success("User updated successfully.");
//       }
//       fetchUsers();
//       setIsModalOpen(false);
//     } catch (error) {
//       message.error("Failed to update user.");
//     }
//   };

//   // Delete User
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/users/${id}`);
//       message.success("User deleted successfully.");
//       fetchUsers();
//     } catch (error) {
//       message.error("Failed to delete user.");
//     }
//   };

//   const columns = [
//     { title: "Name", dataIndex: "name", key: "name" },
//     { title: "Email", dataIndex: "email", key: "email" },
//     {
//       title: "Actions",
//       render: (record) => (
//         <>
//           <Button onClick={() => handleOpenModal(record)} style={{ marginRight: 8 }}>
//             Edit
//           </Button>
//           <Button danger onClick={() => handleDelete(record._id)}>
//             Delete
//           </Button>
//         </>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <h1>User List</h1>
//       <Table
//         dataSource={users}
//         columns={columns}
//         rowKey="_id"
//         style={{ marginTop: 20 }}
//       />

//       <Modal
//         title="Edit User"
//         open={isModalOpen}
//         onCancel={() => setIsModalOpen(false)}
//         footer={null}
//       >
//         <Form form={form} onFinish={handleSubmit} layout="vertical">
//           <Form.Item
//             name="name"
//             label="Name"
//             rules={[{ required: true, message: "Please enter user name" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true, message: "Please enter user email" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Update User
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default UserList;

// import React, { useState, useEffect } from "react";
// import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
// import axios from "axios";

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("https://api.example.com/users")
//       .then((res) => setUsers(res.data))
//       .catch((err) => console.error("Failed to fetch users:", err));
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete(`https://api.example.com/users/${id}`)
//       .then(() => setUsers(users.filter((user) => user.id !== id)))
//       .catch((err) => console.error("Failed to delete user:", err));
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h4" gutterBottom>
//         User Management
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>ID</TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.id}</TableCell>
//                 <TableCell>{user.name}</TableCell>
//                 <TableCell>{user.email}</TableCell>
//                 <TableCell>
//                   <Button color="error" onClick={() => handleDelete(user.id)}>
//                     Delete
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default UserList;
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";

const API_URL = "https://api.example.com/users";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserList;
