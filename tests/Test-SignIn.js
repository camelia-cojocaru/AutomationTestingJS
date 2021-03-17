import  {salonSignInConst, messages, appUrl} from  '../constants/constants';
import SalonSignIn from '../page_objects/pages/SalonSignIn';

describe('Activate your device functionality', () => {
    it('Should not login with invalid credentials', () => {
        SalonSignIn.openApp();
        SalonSignIn.inputIsVisible();
        SalonSignIn.fillSalonId(salonSignInConst.invalidSalonId);
        SalonSignIn.submitSalonId();
        
        const message=SalonSignIn.error;
        expect(message).toHaveText(messages.incorrectSalonId);
    });
    it('Error appears when to many characters are entered', () => {

        SalonSignIn.openApp();
        SalonSignIn.inputIsVisible();
        SalonSignIn.fillSalonId(salonSignInConst.maxCharSalonId);

        const message=SalonSignIn.error;
        expect(message).toHaveText(messages.maxCharLenght);
        
    });
    it('Should login with valid credentials', () => {
        SalonSignIn.openApp();
        SalonSignIn.inputIsVisible();
        SalonSignIn.fillSalonId(salonSignInConst.validSalonId);
        SalonSignIn.submitSalonId();

        expect(browser).toHaveUrl(appUrl.stylistUrl);

    }); 
});