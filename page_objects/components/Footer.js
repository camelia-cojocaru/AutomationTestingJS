class Footer{

    get saveButton(){
        return $('button=Save');
    };

    get removeButton(){
        return $('button*=Remove');
    };

    get continueButton(){
        return $('button=Continue');
    };


    clickSaveButton(){
        this.saveButton.waitForExist();
        this.saveButton.click();
    };

    clickRemoveButton(){
        this.removeButton.waitForExist();
        this.removeButton.click();
    };

    clickContinueButton(){
        this.continueButton.waitForExist();
        this.continueButton.click();
    }
}

export default new Footer();