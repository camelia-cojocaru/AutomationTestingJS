
class Clients extends Base{
get clientNameInput(){
    return $('input[name="ClientName"');
};

get phoneInput(){
    return $('.input__style');
};

get emailInput(){
    return $('input[name="email"]');
};

get termsCheckbox(){
    return $('#root > div > div.create--edit-client > div.create--edit-client__form > div > div > div:nth-child(4) > div > div > input');
};

get salonCheckbox(){
    return $('#root > div > div.create--edit-client > div.create--edit-client__form > div > div > div:nth-child(5) > div > div > input');
};

get wellaCheckbox(){
    return $('#root > div > div.create--edit-client > div.create--edit-client__form > div > div > div:nth-child(6) > div > div.form > input');
};

fillClientName(data){
    this.clientNameInput.waitForExist();
    this.clientNameInput.setValue(data);
}

fillPhone(data){
    this.phoneInput.waitForExist();
    this.phoneInput.setValue(data);
};

fillEmail(data){
    this.emailInput.waitForExist();
    this.emailInput.setValue(data);
};

clickTermsCheckbox(){
    this.termsCheckbox.waitForExist();
    this.termsCheckbox.click();
};

clickSalonCheckbox(){
    this.salonCheckbox.waitForExist();
    this.salonCheckbox.click();
};

clickWellaCheckbox(){
    this.wellaCheckbox.waitForExist();
    this.wellaCheckbox.click();
}

};

export const clients = new Clients();


