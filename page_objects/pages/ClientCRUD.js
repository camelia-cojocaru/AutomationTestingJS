
class Clients extends Base{
get clientNameInput(){
    return $('input[name="ClientName"');
};

get phoneInput(){
    return $('.input__style');
};

fillClientName(data){
    this.clientNameInput.waitForExist();
    this.clientNameInput.setValue(data);
}

fillPhone(date){
    this.phoneInput.waitForExist();
    this.phoneInput.setValue(data);
};


};

export const clients = new Clients();


