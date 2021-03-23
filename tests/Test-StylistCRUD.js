
import {stylistCRUDConst,messages,appUrl,pageTitle} from '../constants/constants';
import Homepage from "../page_objects/pages/Homepage";
import SalonSignIn from "../page_objects/pages/SalonSignIn";
import {stylistAdd, stylistEdit,stylistCommon} from "../page_objects/pages/StylistCRUD";
import Navbar from '../page_objects/components/Navbar';
import Footer from '../page_objects/components/Footer';


describe('Stylist CRUD functionalities', () => {

    context('Test the Add Stylist Functionality', () => {

        it('Check Add new stylist hyperlink functionality', () => {
            SalonSignIn.openApp();
            SalonSignIn.salonSignIn();
            stylistCommon.clickAddNewStylistLink();

            expect(stylistCommon.title).toHaveText(pageTitle.addStylist);
            
        });
        it('Error appears when to many characters are entered', () => {
        
            Navbar.clickBackButton();
            //stylistEdit.clickSelectedStylist('Test');
            stylistEdit.selectLoggedInStylist();
           
            Homepage.redirectToStylistManagement();
            Navbar.clickAddButton();
            
            stylistCommon.fillName(stylistCRUDConst.invalidStylistName);
            const message=stylistAdd.error;
            expect(message).toHaveText(messages.maxCharLenght);
        }); 


        it('Error appears when user tries to enter stylist that already exists', () => {
            stylistCommon.fillName('Stylist');
            Footer.clickSaveButton();

            const message=stylistEdit.error;
            expect(message).toHaveText(messages.stylistAlreadyExists);
        });

        it('Should create stylist with valid name', () => {
           
            stylistCommon.fillName(stylistCRUDConst.validStylistName );
            Footer.clickSaveButton();
            //Footer.clickContinueButton();

            expect(browser).toHaveUrl(appUrl.homepageUrl);
        });

    });

    context('Test the Edit Stylist Functionality ', () => {
        it('Error when user edits stylist with name that is already taken', () => {
            Homepage.redirectToStylistManagement();
            stylistEdit.selectDefaultStylist();
            
            stylistCommon.fillName(stylistCRUDConst.defaultStylistName);
            Footer.clickSaveButton();

            const message= stylistEdit.error;
            expect(message).toHaveText(messages.stylistAlreadyExists);
        });

        it('Should edit existing stylist ', () => {

            stylsitCommon.fillName(stylistCRUDConst.editedStylistName);
            Footer.clickSaveButton();

            expect(stylistEdit.editedStylist).toBeVisible();
        });
    });
   

    context('Test the Remove Stylist Functionality', () => {
        
        it('Error when trying to remove the stylist you are logged in as', () => {


           stylistEdit.clickSelectedStylist('Test');

            stylistCommon.fillName(stylistCRUDConst.defaultStylistName+'ss');
            Footer.clickRemoveButton();
            stylistEdit.clickConfirmRemoveButton();
            
            const message=stylistAdd.error;
            expect(message).toHaveText(messages.cannotRemoveYourselfErr);
        }); 

        it('Should remove existings stylist', () => {
        
            Navbar.clickBackButton();
            stylistEdit.selectEditedStylist();
            Footer.clickRemoveButton();
            stylistEdit.clickConfirmRemoveButton();

            expect(browser).toHaveUrl(appUrl.stylsitManagementUrl);
        });

    });
  
});