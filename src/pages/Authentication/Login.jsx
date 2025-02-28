// import React, { useState, useContext } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   InputAdornment,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import { Email as Mail, Lock } from "@mui/icons-material";
// import { AuthContext } from "../../context/authContext";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const GlassCard = styled(Box)({
//   background: "rgba(255, 255, 255, 0.1)",
//   backdropFilter: "blur(10px)",
//   borderRadius: "20px",
//   padding: "40px",
//   boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//   border: "1px solid rgba(255, 255, 255, 0.18)",
// });

// const StyledTextField = styled(TextField)({
//   "& .MuiOutlinedInput-root": {
//     color: "white",
//     "& fieldset": {
//       borderColor: "rgba(255, 255, 255, 0.3)",
//     },
//     "&:hover fieldset": {
//       borderColor: "rgba(255, 255, 255, 0.5)",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#f8a5c2",
//     },
//   },
//   "& .MuiInputLabel-root": {
//     color: "rgba(255, 255, 255, 0.7)",
//   },
//   marginBottom: "20px",
// });

// const LoginPage = () => {
//   // State hooks for email and password
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Access login function from AuthContext
//   const { login } = useContext(AuthContext);

//   // Handle form submission

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = { email, password };
//     // Add form submission logic here
//     console.log("Form submitted:", formData);

//     try {
//       const response = await login(formData);

//       navigate("/");
//     } catch (error) {
//       toast.error("Error login ");
//       console.log("error registering", error);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ py: 8 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <GlassCard>
//           <Typography
//             variant="h3"
//             sx={{ color: "white", mb: 2, textAlign: "center" }}
//           >
//             Welcome Back
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{ color: "#f8a5c2", mb: 4, textAlign: "center" }}
//           >
//             Login to your account
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <StyledTextField
//               fullWidth
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Mail sx={{ color: "#f8a5c2" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <StyledTextField
//               fullWidth
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Lock sx={{ color: "#f8a5c2" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button
//               fullWidth
//               variant="contained"
//               size="large"
//               type="submit"
//               sx={{
//                 mt: 2,
//                 bgcolor: "#f8a5c2",
//                 color: "#2c3e50",
//                 "&:hover": {
//                   bgcolor: "#f8a5c2cc",
//                 },
//                 py: 1.5,
//               }}
//             >
//               Login
//             </Button>
//           </form>
//         </GlassCard>
//       </motion.div>
//     </Container>
//   );
// };

// export default LoginPage;

// import React, { useState, useContext } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   InputAdornment,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import { Email as Mail, Lock } from "@mui/icons-material";
// import { AuthContext } from "../../context/authContext";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Ensure axios is installed

// // Glass effect styling
// const GlassCard = styled(Box)({
//   background: "rgba(255, 255, 255, 0.1)",
//   backdropFilter: "blur(10px)",
//   borderRadius: "20px",
//   padding: "40px",
//   boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//   border: "1px solid rgba(255, 255, 255, 0.18)",
// });

// const StyledTextField = styled(TextField)({
//   "& .MuiOutlinedInput-root": {
//     color: "white",
//     "& fieldset": {
//       borderColor: "rgba(255, 255, 255, 0.3)",
//     },
//     "&:hover fieldset": {
//       borderColor: "rgba(255, 255, 255, 0.5)",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#f8a5c2",
//     },
//   },
//   "& .MuiInputLabel-root": {
//     color: "rgba(255, 255, 255, 0.7)",
//   },
//   marginBottom: "20px",
// });

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useContext(AuthContext); // Assuming you use context for auth

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = { email, password };

//     try {
//       // Mock API call (replace with your backend endpoint)
//       const response = await axios.post("https://api.example.com/auth/login", formData);

//       if (response.data.success) {
//         const userRole = response.data.role; // Example: "admin" or "user"
//         localStorage.setItem("role", userRole); // Store role for route protection
//         toast.success("Login successful!");
//    // Redirect based on role
//    navigate(userRole === "admin" ? "/admin" : "/");
//   } else {
//     toast.error(response.data.message || "Invalid credentials!");
//   }
// } catch (error) {
//   console.error("Login error:", error);
//   toast.error("Failed to login. Please check your credentials.");
// }
// };
//   return (
//     <Container maxWidth="sm" sx={{ py: 8 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <GlassCard>
//           <Typography
//             variant="h3"
//             sx={{ color: "white", mb: 2, textAlign: "center" }}
//           >
//             Welcome Back
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{ color: "#f8a5c2", mb: 4, textAlign: "center" }}
//           >
//             Login to your account
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <StyledTextField
//               fullWidth
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Mail sx={{ color: "#f8a5c2" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <StyledTextField
//               fullWidth
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Lock sx={{ color: "#f8a5c2" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Button
//               fullWidth
//               variant="contained"
//               size="large"
//               type="submit"
//               sx={{
//                 mt: 2,
//                 bgcolor: "#f8a5c2",
//                 color: "#2c3e50",
//                 "&:hover": { bgcolor: "#f8a5c2cc" },
//                 py: 1.5,
//               }}
//             >
//               Login
//             </Button>
//           </form>
//         </GlassCard>
//       </motion.div>
//     </Container>
//   );
// };

// export default LoginPage;

// import React, { useState, useContext } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   InputAdornment,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { motion } from "framer-motion";
// import { Email as Mail, Lock } from "@mui/icons-material";
// import { AuthContext } from "../../context/authContext";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const API_URL = "http://localhost:8080/auth/login"; // Update with your actual backend URL

// // Glass effect styling
// const GlassCard = styled(Box)({
//   background: "rgba(255, 255, 255, 0.1)",
//   backdropFilter: "blur(10px)",
//   borderRadius: "20px",
//   padding: "40px",
//   boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
//   border: "1px solid rgba(255, 255, 255, 0.18)",
// });

// const StyledTextField = styled(TextField)({
//   "& .MuiOutlinedInput-root": {
//     color: "white",
//     "& fieldset": {
//       borderColor: "rgba(255, 255, 255, 0.3)",
//     },
//     "&:hover fieldset": {
//       borderColor: "rgba(255, 255, 255, 0.5)",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#f8a5c2",
//     },
//   },
//   "& .MuiInputLabel-root": {
//     color: "rgba(255, 255, 255, 0.7)",
//   },
//   marginBottom: "20px",
// });

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useContext(AuthContext);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = { email, password };

//     try {
//       const response = await axios.post(API_URL, formData);
//       console.log("Login Response:", response.data);

//       if (response.data.success) {
//         localStorage.setItem("role", response.data.role);
//         toast.success("Login successful!");
//         navigate(response.data.role === "admin" ? "/admin" : "/");
//       } else {
//         toast.error(response.data.message || "Invalid credentials!");
//       }
//     } catch (error) {
//       console.error("Login Error:", error.response ? error.response.data : error.message);
//       toast.error("Failed to login. Please check your credentials.");
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ py: 8 }}>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <GlassCard>
//           <Typography
//             variant="h3"
//             sx={{ color: "white", mb: 2, textAlign: "center" }}
//           >
//             Welcome Back
//           </Typography>
//           <Typography
//             variant="h6"
//             sx={{ color: "#f8a5c2", mb: 4, textAlign: "center" }}
//           >
//             Login to your account
//           </Typography>

//           <form onSubmit={handleSubmit}>
//             <StyledTextField
//               fullWidth
//               label="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Mail sx={{ color: "#f8a5c2" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <StyledTextField
//               fullWidth
//               label="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Lock sx={{ color: "#f8a5c2" }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Button
//               fullWidth
//               variant="contained"
//               size="large"
//               type="submit"
//               sx={{
//                 mt: 2,
//                 bgcolor: "#f8a5c2",
//                 color: "#2c3e50",
//                 "&:hover": { bgcolor: "#f8a5c2cc" },
//                 py: 1.5,
//               }}
//             >
//               Login
//             </Button>
//           </form>
//         </GlassCard>
//       </motion.div>
//     </Container>
//   );
// };

// export default LoginPage;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080/auth/login";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter email and password.");
      return;
    }

    const formData = { email, password };

    try {
      const response = await axios.post(API_URL, formData);
      console.log("Login Response:", response);
      
      if (response.data?.success) {
        localStorage.setItem("role", response.data.role);
        toast.success("Login successful!");
        navigate(response.data.role === "admin" ? "/admin" : "/");
      } else {
        toast.error(response.data?.message || "Invalid credentials!");
      }
    } catch (error) {
      if (error.response) {
        console.error("Login Error Data:", error.response.data);
        toast.error(error.response.data?.message || "Invalid email or password.");
      } else {
        console.error("Network Error:", error.message);
        toast.error("Server unreachable. Try again later.");
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
