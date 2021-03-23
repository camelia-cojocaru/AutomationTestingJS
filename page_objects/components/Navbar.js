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

    get searchField(){
        return $('#input');
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
    };

    fillSearch(data){
        this.searchField.waitForExist();
        this.searchField.setValue(data);
    };



}
export default new Navbar();