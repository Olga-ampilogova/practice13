import axios from "axios";
const BASE_URL = 'https://64859281a795d24810b7146a.mockapi.io/'
//https://64859281a795d24810b7146a.mockapi.io/work/:endpoint

async function getAllContacts() {
    try {
        const result = await axios.get(`${BASE_URL}/work/contacts`)
        return result.data;
    } catch (error) {
        console.log(error);
        
    } 
    
}
async function getContactById(id) {
    try {
        const res = await axios.get(`${BASE_URL}work/contacts/${id}`)
        return res.data;
    } catch (error) {
      console.log(error);  
    }
    
}

async function createContact(contact) {
    try {
        const res = await axios.post(`${BASE_URL}work/contacts/`, contact)  
        return res.data;
    } catch (error) {
        console.log(res);
    }
    
}
async function updateContact(contact, id) {
    try {
        const res = await axios.put(`${BASE_URL}work/contacts/${id}`, contact)
        return res.data;
    } catch (error) {
    console.log(error);   
    }
    
}

async function deleteEl(id) {
    try {
        const res = await axios.delete(`${BASE_URL}work/contacts/${id}`)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
    
}
export  {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteEl,
}

