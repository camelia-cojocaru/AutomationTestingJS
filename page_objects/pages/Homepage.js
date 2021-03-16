import Base from "./Base";

class Homepage extends Base{

    get analitycsButton(){
        return $('.analytics-redirect');
    };

    get clientsButton(){
        return $('img[alt="Clients"]');
    };

    get stylistButton(){
        return $('img[alt="Stylists Management Icon"]');
    };

    redirectToClients(){
        this.clientsButton.click();
    };

    redirectToStylistManagement(){
        this.stylistButton.click();
    };

}
export default new Homepage();