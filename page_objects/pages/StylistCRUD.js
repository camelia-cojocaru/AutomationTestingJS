import Base from './Base';
import SalonSignIn from './SalonSignIn';


class Stylist extends Base{

    get addNewStylistLink(){
        return $('.new-stylist--add');
    };
    get nameInput(){
        return $('#input');
    };

    get title(){
        return $('.navbar__stylists__title');
    };

    fillName(name){
        this.nameInput.waitForExist();
        this.nameInput.setValue(name);
    };

    clickAddNewStylistLink(){
        this.addNewStylistLink.waitForExist();
        this.addNewStylistLink.click();
    };
    
    clickSelectedStylist(data){

        var stylist = $('.name=' + data); 
        stylist.waitForExist();
        stylist.click();
    }
}
class StylistAdd extends Base{

    get nameInput(){
        return $('#input');
    };

    get error(){
        return $('.message');
    };
;

    get addStylistButton(){
        return $('.new-stylist--add');
    };

    get confirmSaveButton(){
        return $('.message__button');
    };

    clickAddStylistButton(){
        this.addStylistButton.click();
    };

    fillName(name){
        this.nameInput.waitForExist();
        this.nameInput.setValue(name);
    };

    clickConfirmSaveButton(){
        this.confirmSaveButton.waitForExist();
        this.confirmSaveButton.click();
    };
};

class StylistEdit extends Base{

    get error(){
        return $('.edit-stylists__message');
    };

    get loggedInStylist(){
        return $('.name=Test');
    };

    get defaultStylist(){
        return $('.name=Test1');
    };

    get editedStylist(){
        return $('.name=EditedTest');
    };

    get confirmRemoveButton(){
        return $('#root > div > div.sc-idOhPF.kGntgQ > div > div.sc-hKgILt.gTLZXx.modal.modal--open.enter-done > div > button.sc-jSgupP.gpRcVU.button--dark')
    }


    clickConfirmRemoveButton(){
        this.confirmRemoveButton.waitForExist();
        this.confirmRemoveButton.click();
    };

    selectDefaultStylist(){
        this.defaultStylist.waitForExist();
        this.defaultStylist.click();
    };

    selectEditedStylist(){
        this.editedStylist.waitForExist();
        this.editedStylist.click();
    };

    selectLoggedInStylist(){
        this.loggedInStylist.waitForExist();
        this.loggedInStylist.click();
    };

    enterHomepageWithDefaultStylsit(){
        SalonSignIn();
        this.selectDefaultStylist();

    };



};

export const stylistCommon = new Stylist();
export const stylistAdd = new StylistAdd();
export const stylistEdit = new StylistEdit();

