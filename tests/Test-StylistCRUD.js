import allureReporter from '@wdio/allure-reporter'
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
            allureReporter.addFeature('Add Hyperlink');
            allureReporter.addSeverity('Critical');
            
        });
        it('Error appears when to many characters are entered', () => {
            Navbar.clickBackButton();
            stylistCommon.clickSelectedStylist(stylistCRUDConst.defaultStylistName);          
            Homepage.redirectToStylistManagement();
            Navbar.clickAddButton();
            stylistCommon.fillName(stylistCRUDConst.invalidStylistName);

            const message=stylistAdd.error;
            expect(message).toHaveText(messages.maxCharLenght);

        }); 


        it('Error appears when user tries to enter stylist that already exists', () => {
            stylistCommon.fillName(stylistCRUDConst.firstStylistName);
            Footer.clickSaveButton();

            const message=stylistEdit.error;
            expect(message).toHaveText(messages.stylistAlreadyExists);
        });

        it('Should create stylist with valid name', () => {
            stylistCommon.fillName(stylistCRUDConst.validStylistName );
            Footer.clickSaveButton();

            expect(browser).toHaveUrl(appUrl.stylistManagementUrl);
        });

    });

    context('Test the Edit Stylist Functionality ', () => {
        //// This is the it that should be enabled once the stylist 
        
        // it('Error when user edits stylist with name that is already taken', () => {
        //     stylistEdit.selectLoggedInStylist();
            
        //     stylistCommon.fillName(stylistCRUDConst.validStylistName);
        //     Footer.clickSaveButton();

        //     const message= stylistEdit.error;
        //     expect(message).toHaveText(messages.stylistAlreadyExists);
        // });

        it('Should edit existing stylist ', () => {
            stylistCommon.clickSelectedStylist(stylistCRUDConst.defaultStylistName);
            stylistCommon.fillName(stylistCRUDConst.editedStylistName);
            Footer.clickSaveButton();

            expect(stylistEdit.editedStylist).toBeVisible();
        });
    });
   

    context('Test the Remove Stylist Functionality', () => {
        
        it('Error when trying to remove the stylist you are logged in as', () => {
            stylistCommon.clickSelectedStylist(stylistCRUDConst.validStylistName);
            stylistCommon.fillName(stylistCRUDConst.defaultStylistName+'ss');
            Footer.clickRemoveButton();
            stylistEdit.clickConfirmRemoveButton();
            
            const message=stylistEdit.error;
            expect(message).toHaveText(messages.cannotRemoveYourselfErr);
        }); 

        it('Should remove existings stylist', () => {
            Navbar.clickBackButton();
            stylistCommon.clickSelectedStylist(stylistCRUDConst.editedStylistName);
            Footer.clickRemoveButton();
            stylistEdit.clickConfirmRemoveButton();

            expect(browser).toHaveUrl(appUrl.stylistManagementUrl);
        });

    });
  
});