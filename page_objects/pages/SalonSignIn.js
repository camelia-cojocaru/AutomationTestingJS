import {salonSignInConst} from '../../constants/constants';
import Base from './Base';

class SalonSignIn extends Base{

    get salonIdInput() {
        return $('input[name="Salon id"]');
    };

    get signInButton(){
        return $('.sc-jSgupP');
    };

    get error(){
        return $('.message');
    };

    inputIsVisible(){
        this.salonIdInput.waitForExist();
    };

    fillSalonId(salonID) {
        this.salonIdInput.setValue(salonID);
    };

    submitSalonId(){
        
        this.signInButton.click();
    };

    salonSignIn(){
        this.inputIsVisible();
        this.fillSalonId(salonSignInConst.validSalonId);
        this.submitSalonId();
    };
};

export default new SalonSignIn();