class Navbar {

    get backButton(){
        return  $('.navbar__back');
    };

    get addButton(){
        return $('.navbar__add-button');
    };

    get searchButton(){
        return $('.search__img');
    };

    clickBackButton(){
        this.backButton.waitForExist();
        this.backButton.click();
    };

    clickAddButton(){
        this.addButton.waitForExist();
        this.addButton.click();
    };
    
    clickSearchButton(){
        this.searchButton.waitForExist();
        this.searchButton.click();
    }

}
export default new Navbar();