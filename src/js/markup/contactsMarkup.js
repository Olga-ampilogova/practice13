import refs from "../refs"
    
const { contactList } = refs;
export default function contactsMarkup(data) {

    const markup =  data.map(({name, phone, id}) => {
        return `<li id='${id}'>
        <p>${name}</p>
        <p>${phone}</p>
        </li>`
    }).join('')
    contactList.insertAdjacentHTML("beforeend", markup);
   
}