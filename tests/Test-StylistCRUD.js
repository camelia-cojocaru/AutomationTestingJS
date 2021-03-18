import {stylistCRUDConst,messages,appUrl} from '../constants/constants';
import Homepage from "../page_objects/pages/Homepage";
import SalonSignIn from "../page_objects/pages/SalonSignIn";
import {stylistAdd, stylistEdit} from "../page_objects/pages/StylistCRUD";
import Navbar from '../page_objects/components/Navbar'

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
        stylistAdd.fillName(stylistCRUDConst.defaultStylistName );
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

     it('Should edit existing stylist ', () => {
        Homepage.redirectToStylistManagement();
        stylistEdit.selectDefaultStylist();
        stylistAdd.fillName(stylistCRUDConst.editedStylistName);
        stylistEdit.clickEditButton();

       expect(stylistEdit.editedStylist).toBeVisible();
    });

    it('Should remove existings stylist', () => {
        Navbar.clickBackButton();
        stylistEdit.selectEditedStylist();
        stylistEdit.clickRemoveButton();

        expect(browser).toHaveUrl(appUrl.stylsitManagementUrl);

    });
});