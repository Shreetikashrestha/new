// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Table, Modal, Input, Form, message } from "antd";

// const ServiceList = () => {
//   const [services, setServices] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingService, setEditingService] = useState(null);
//   const [form] = Form.useForm();

//   // Fetch Services
//   const fetchServices = async () => {
//     try {
//       const { data } = await axios.get("/api/services");
//       setServices(data);
//     } catch (error) {
//       message.error("Failed to fetch services.");
//     }
//   };

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   // Open Modal for Add/Edit
//   const handleOpenModal = (service = null) => {
//     setEditingService(service);
//     form.resetFields();
//     if (service) {
//       form.setFieldsValue(service);
//     }
//     setIsModalOpen(true);
//   };

//   // Add or Edit Service
//   const handleSubmit = async (values) => {
//     try {
//       if (editingService) {
//         await axios.put(`/api/services/${editingService._id}`, values);
//         message.success("Service updated successfully.");
//       } else {
//         await axios.post("/api/services", values);
//         message.success("Service added successfully.");
//       }
//       fetchServices();
//       setIsModalOpen(false);
//     } catch (error) {
//       message.error("Failed to save service.");
//     }
//   };

//   // Delete Service
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/services/${id}`);
//       message.success("Service deleted.");
//       fetchServices();
//     } catch (error) {
//       message.error("Failed to delete service.");
//     }
//   };

//   const columns = [
//     { title: "Name", dataIndex: "name", key: "name" },
//     { title: "Price", dataIndex: "price", key: "price" },
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
//       <h1>Service List</h1>
//       <Button type="primary" onClick={() => handleOpenModal()}>
//         Add New Service
//       </Button>

//       <Table
//         dataSource={services}
//         columns={columns}
//         rowKey="_id"
//         style={{ marginTop: 20 }}
//       />

//       <Modal
//         title={editingService ? "Edit Service" : "Add New Service"}
//         open={isModalOpen}
//         onCancel={() => setIsModalOpen(false)}
//         footer={null}
//       >
//         <Form form={form} onFinish={handleSubmit} layout="vertical">
//           <Form.Item
//             name="name"
//             label="Service Name"
//             rules={[{ required: true, message: "Please enter service name" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             name="price"
//             label="Service Price"
//             rules={[{ required: true, message: "Please enter service price" }]}
//           >
//             <Input type="number" />
//           </Form.Item>

//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               {editingService ? "Update" : "Add"}
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default ServiceList;
import React, { useState, useEffect } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import axios from "axios";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("https://api.example.com/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://api.example.com/services/${id}`)
      .then(() => setServices(services.filter((service) => service.id !== id)))
      .catch((err) => console.error("Failed to delete service:", err));
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Service Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell>{service.id}</TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.price}</TableCell>
                <TableCell>
                  <Button color="error" onClick={() => handleDelete(service.id)}>
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

export default ServiceList;