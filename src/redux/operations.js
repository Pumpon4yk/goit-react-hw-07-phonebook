import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://642471239e0a30d92b1c13a6.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
try {
  const response = await axios.get('/contacts');
  return response.data;
} catch (error) {
  toast.error(`${error.message}`)
  return thunkAPI.rejectWithValue(error.message)
}
});

export const addContact = createAsyncThunk('contacts/addContant', async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', contact);
    toast.success("Contact added.")
  return response.data;
  } catch (error) {
    toast.error(`${error.message}`)
    return thunkAPI.rejectWithValue(error.message)
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContant', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    toast.success("Contact deleted.")
    return response.data;
  } catch (error) {
    toast.error(`${error.message}`)
    return thunkAPI.rejectWithValue(error.message)
  }
});