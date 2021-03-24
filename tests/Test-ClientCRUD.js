import { stylistEdit } from "../page_objects/pages/StylistCRUD";

describe('Clients CRUD functionalities ', () => {
    context('Test The Add Client Functionality', () => {
        stylistEdit.enterHomepageWithDefaultStylsit();
        Navbar.clickAddButton();
        
    });

    context('Test The Edit Client Functionality', () => {
        
    });

    context('Test the Remove Client Functionality', () => {
        
    });
});