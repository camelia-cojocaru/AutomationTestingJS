import Base from "./Base";

class Homepage extends Base{

    get analitycsButton(){
        return $('.analytics-redirect');
    };

    get clientsButton(){
        return $('div=Clients');
    };

    get stylistButton(){
        return $('#root > div > div:nth-child(5)');
    };

    redirectToClients(){
        this.clientsButton.click();
    };

    redirectToStylistManagement(){
        this.stylistButton.click();
    };

}
export default new Homepage();