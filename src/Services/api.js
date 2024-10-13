// src/api.js
import axios from 'axios';

// Set your base URL depending on your Django API setup
const API_BASE_URL = 'http://localhost:8000/BlogApp/'; // Adjust as necessary

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch all posts
export const fetchPosts = async (token) => {
  try {
    const response = await api.get('posts/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Adjust based on your response structure
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Create a new post
export const createPost = async (postData, token) => {
  try {
    const response = await api.post('posts/', postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// User registration
export const registerUser = async (userData) => {
  try {
    const response = await api.post('users/', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// User login
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('login/', credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// User logout
export const logoutUser = async (token) => {
  try {
    await api.post('logout/', {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error logging out:', error);
    throw error;
  }
};
