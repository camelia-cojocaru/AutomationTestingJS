import {stylistCRUDConst,messages,appUrl} from '../constants/constants';
import Homepage from "../page_objects/pages/Homepage";
import SalonSignIn from "../page_objects/pages/SalonSignIn";
import {stylistAdd, stylistEdit} from "../page_objects/pages/StylistCRUD";
import Navbar from '../page_objects/components/Navbar'

describe('Stylist CRUD functionalities', () => {

    context('Test the Add Stylist Functionality', () => {

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

    });

    context('Test the Edit Stylist Functionality ', () => {
        it('Error when user edits stylist with name that is already taken', () => {
            Homepage.redirectToStylistManagement();
            stylistEdit.selectDefaultStylist();
            stylistAdd.inputIsVisible();
            stylistAdd.fillNam(stylistCRUDConst.defaultStylistName);
            stylistEdit.clickEditButton();

            const message= stylistEdit.error;
            expect(message).toHaveText(messages.stylistAlreadyExists);
        });

        it('Should edit existing stylist ', () => {

            stylistAdd.inputIsVisible();
            stylistAdd.fillName(stylistCRUDConst.editedStylistName);
            stylistEdit.clickEditButton();

            expect(stylistEdit.editedStylist).toBeVisible();
        });
    });
   

    context('Test the Remove Stylist Functionality', () => {
        
        it('Error when trying to remove the stylist you are logged in as', () => {

            stylistEdit.selectLoggedInStylist();
            stylistAdd.fillName(stylistCRUDConst.defaultStylistName+'ss');
            stylistEdit.clickRemoveButton();
            stylistEdit.clickConfirmRemoveButton();
            const message=stylistAdd.error;
            expect(message).toHaveText(messages.cannotRemoveYourselfErr);
        }); 

        it('Should remove existings stylist', () => {
        
            Navbar.clickBackButton();
            stylistEdit.selectEditedStylist();
            stylistEdit.clickRemoveButton();
            stylistEdit.clickConfirmRemoveButton();

            expect(browser).toHaveUrl(appUrl.stylsitManagementUrl);
        });

    });
  
});