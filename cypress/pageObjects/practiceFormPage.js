import { BasePage } from "./basePage";

export class PracticeFormPage extends BasePage {
    static get url() {
        return '';
    }

    static get nameField() {
        return cy.get('#firstName');
    }

    static get surnameField() {
        return cy.get('#lastName');
    }

    static get emailField() {
        return cy.get('#userEmail');
    }

    static get genderRadioMale() {
        return cy.get('#gender-radio-1');
    }

    static get phoneField() {
        return cy.get('#userNumber');
    }

    static get dateOfBirthField() {
        return cy.get('#dateOfBirthInput');
    }

    static get dateOfBirthMonth() {
        return cy.get('.react-datepicker__month-select');
    }

    static get dateOfBirthYear() {
        return cy.get('.react-datepicker__year-select');
    }

    static get dateOfBirthDay28() {
        return cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)');
    }

    static get subjectsField() {
        return cy.get('.subjects-auto-complete__input-container');
    }

    static subjectSelect(subject) {
        cy.contains('.subjects-auto-complete__option', subject).click();
    }

    static get hobbiesRadioMusic() {
        return cy.get('#hobbies-checkbox-3');
    }

    static get stateField() {
        return cy.get('#react-select-3-input');
    }

    static stateSelect(state) {
        cy.get('[id^="react-select-3-option"]').contains(state).click();
    }

    static get cityField() {
        return cy.get('#react-select-4-input');
    }

    static citySelect(city) {
        cy.get('[id^="react-select-4-option"]').contains(city).click();
    }
}