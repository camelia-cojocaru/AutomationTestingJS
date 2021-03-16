import { timeouts, appUrl } from '../../constants/constants'

class Base{
    pauseShort(){
        browser.pause(timeouts.short);
    };
    pauseMedium(){
        browser.pause(timeouts.medium);
    };
    pauseLong(){
        browser.pause(timeouts.long);
    };
    openApp(){
        browser.url (appUrl.baseUrl);
    };
    closeApp(){
        browser.close();
    };
};

export default Base