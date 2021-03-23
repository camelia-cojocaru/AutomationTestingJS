import Base from './Base';
import SalonSignIn from './SalonSignIn';
class StylistAdd extends Base{

    get nameInput(){
        return $('#input');
    };

    get error(){
        return $('.message');
    };

    get saveStylistButton(){
        return $('button=Save');
    };

    get addStylistButton(){
        return $('.new-stylist--add');
    };

    get confirmSaveButton(){
        return $('.message__button');
    };

    clickAddStylistButton(){
        this.addStylistButton.click();
    };

    inputIsVisible(){
        this.nameInput.waitForExist();
    };

    fillName(name){
        this.nameInput.setValue(name);
    };

    clickSaveButton(){
        this.saveStylistButton.click();
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

    get editButton(){
        return $('button=Save');
    };

    get removeButton(){
        return $('button*=Remove');
    };

    get editedStylist(){
        return $('.name=EditedTest');
    };

    get confirmRemoveButton(){
        return $('#root > div > div.sc-idOhPF.kGntgQ > div > div.sc-hKgILt.gTLZXx.modal.modal--open.enter-done > div > button.sc-jSgupP.gpRcVU.button--dark')
    }

    get error(){
        return $('p');
    };

    clickEditButton(){
        this.editButton.click();
    };

    clickRemoveButton(){
        this.removeButton.waitForExist();
        this.removeButton.click();
    };

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

export const stylistAdd = new StylistAdd();
export const stylistEdit = new StylistEdit();

