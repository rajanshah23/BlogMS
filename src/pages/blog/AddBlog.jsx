import React from "react";
import Layout from "../../components/layout/layout";
import axios from "axios";
import { baseUrl } from "../../config";
import Form from "./components/card/form/Form";
import { useNavigate } from "react-router-dom";
 
const AddBlog = () => {
  const navigate = useNavigate();
  const handleCreateBlog = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/blog`, data, {

        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": localStorage.getItem('token'),
        },
      });
  
      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Blog creation failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <Layout>
      <Form type="Create" onSubmit={handleCreateBlog} />
    </Layout>
  );
};

export default AddBlog;
