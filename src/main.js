import { getAllContacts, getContactById, createContact, updateContact, deleteEl } from "./js/api"
import contactsMarkup from "./js/markup/contactsMarkup";
import refs from "./js/refs";
const { addButton, delButton } = refs;
addButton.addEventListener('click', onAddEl);
delButton.addEventListener('click', onDel);
async function showAllContacts() {
    try {
        const res = await getAllContacts()
        contactsMarkup(res)
   console.log(res); 
   } catch (error) {
  console.log(error);  
   } 
}
// showAllContacts();

async function showContactById(id) {
    try {
        const res = await getContactById(id)   
        console.log(res);
    } catch (error) {
        console.log(error);
    }

}
// showContactById('18');
function onAddEl() {
  createContact({name: 'QWE', phone:'123456'})
    
}
async function update(id) {
    const res =await updateContact({name: "ABCD", phone: "654321"}, id)
    
}
async function onDel() {
      getContactById()
    deleteEl('66')

}

// update('66');
showAllContacts();
