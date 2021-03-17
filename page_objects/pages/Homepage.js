import Base from "./Base";

class Homepage extends Base{

    get analitycsButton(){
        return $('.analytics-redirect');
    };

    get clientsButton(){
        return $('=Clients');
    };

    get stylistButton(){
        return $('=Stylists Management');
    };

    redirectToClients(){
        this.clientsButton.click();
    };

    redirectToStylistManagement(){
        this.stylistButton.click();
    };

}
export default new Homepage();