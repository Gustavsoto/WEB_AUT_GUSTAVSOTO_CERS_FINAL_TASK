export default class formPage {
    static get url(){
        return '/automation-practice-form';
    }

    static visit(){
        cy.visit(this.url);
    }

    static get firstNameInput(){
        return cy.get('input#firstName');
    }

    static get lastNameInput(){
        return cy.get('input#lastName');
    }
    
    static get emailInput(){
        return cy.get('input#userEmail');
    }

    static get genderLabel(){
        return cy.get('label.custom-control-label');
    }

    static get phoneInput(){
        return cy.get('input#userNumber');
    }

    static get addressInput(){
        return cy.get('textarea#currentAddress');
    }

    static get dateOfBirthInput(){
        return cy.get('input#dateOfBirthInput');
    }

    static get selectCalendarMonth(){
        return cy.get('select.react-datepicker__month-select');
    }

    static get selectCalendarYear(){
        return cy.get('select.react-datepicker__year-select');
    }

    static get selectCalendarDay(){
        return cy.get('div.react-datepicker__month div.react-datepicker__week div');
    }

    static get subjectsInput(){
        return cy.get('input#subjectsInput');
    }

    static get hobbiesLabel(){
        return cy.get('label.custom-control-label');
    }

    static get imageInput(){
        return cy.get('input#uploadPicture');
    }

    static get stateDropdown(){
        return cy.get('div#state');
    }

    static get cityDropdown(){
        return cy.get('div#city');
    }

    static get submitButton(){
        return cy.get('button#submit');
    }

    static get tableCell(){
        return cy.get('td');
    }
}