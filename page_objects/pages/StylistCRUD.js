import Base from './Base'


class StylistAdd extends Base{

    get nameInput(){
        return $('#input');
    };

    get error(){
        return $('.message');
    };

    get saveStylistButton(){
        return $('button');
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

    get defaultStylist(){
        return $('=Test');
    };

    selectDefaultStylist(){
        this.waitForExist();
        this.defaultStylist.click();
    };
};

export const stylistAdd = new StylistAdd();
export const stylistEdit = new StylistEdit();

