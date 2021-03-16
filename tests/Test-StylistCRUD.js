import {stylistCRUDConst,messages,appUrl} from '../constants/constants';
import Homepage from "../page_objects/pages/Homepage";
import SalonSignIn from "../page_objects/pages/SalonSignIn";
import {stylistAdd, stylistEdit} from "../page_objects/pages/StylistCRUD";

describe('Stylist CRUD functionalities', () => {

    it('Error appears when to many characters are entered', () => {
        SalonSignIn.openApp();
        SalonSignIn.salonSignIn();
        stylistAdd.clickAddStylistButton();
        stylistAdd.inputIsVisible();
        stylistAdd.fillName(stylistCRUDConst.invalidStylistName);

        const message=stylistAdd.error;
        expect(message).toHaveText(messages.maxCharLenght);
    }); 
    
    it('Error appears when user tries to enter stylist that already exists', () => {
        stylistAdd.inputIsVisible();
        stylistAdd.fillName(stylistCRUDConst.duplicateStylistName );
        stylistAdd.clickSaveButton();

        const message=stylistEdit.error;
        expect(message).toHaveText(messages.stylistAlreadyExists);
    });

    it('Should create stylist with valid name', () => {
        stylistAdd.inputIsVisible();
        stylistAdd.fillName(stylistCRUDConst.validStylistName );
        stylistAdd.clickSaveButton();
        stylistAdd.clickConfirmSaveButton();

        expect(browser).toHaveUrl(appUrl.homepageUrl);
    });

     it('Should edit stylist ', () => {
        Homepage.redirectToStylistManagement();

    });

    it('Should remove stylist', () => {
        
    });
});