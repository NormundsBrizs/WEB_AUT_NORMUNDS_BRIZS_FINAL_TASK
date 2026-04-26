import { PracticeFormPage } from "../pageObjects/practiceFormPage";

describe('DEMO QA', () => {
  context('Practice Form', () => {
    beforeEach(() => {
      PracticeFormPage.visit();
    });

    it.only('Input information and validate', () => {
      // Define test data
      const testData = {
        name: 'John',
        surname: 'Doe',
        email: 'johndoe@test.com',
        mobileNumber: '1234567890',
        subject: 'Economics',
        state: 'NCR',
        city: 'Delhi',
        picture: 'thumbs_up.jpg',
      }
      // Input First Name, Last Name, Email, Gender and Mobile Number with test data
      PracticeFormPage.nameField.type(testData.name);
      PracticeFormPage.surnameField.type(testData.surname);
      PracticeFormPage.emailField.type(testData.email);
      PracticeFormPage.genderRadioMale.click();
      PracticeFormPage.phoneField.type(testData.mobileNumber);
      // Set Date of Birth to 28th of February, 1930
      PracticeFormPage.dateOfBirthField.click();
      PracticeFormPage.dateOfBirthMonth.select('February');
      PracticeFormPage.dateOfBirthYear.select('1930');
      PracticeFormPage.dateOfBirthDay28.click();
      // Set Subjects to Economics
      PracticeFormPage.subjectsField.type(testData.subject);
      PracticeFormPage.subjectSelect(testData.subject);
      // Set Hobbies to Music
      PracticeFormPage.hobbiesRadioMusic.click();
      // Upload an image of your choice
      PracticeFormPage.uploadPicture(testData.picture);
      // Set State to NCR
      PracticeFormPage.stateField.click();
      PracticeFormPage.stateSelect(testData.state);
      // Set City to Delhi
      PracticeFormPage.cityField.click();
      PracticeFormPage.citySelect(testData.city);
      // Click Submit
      PracticeFormPage.submitButton.click();
      // Validate that each Labeled row contains the correct information
      cy.contains('td', 'Student Name').next().should('have.text', testData.name + ' ' + testData.surname);
      cy.contains('td', 'Student Email').next().should('have.text', testData.email);
      cy.contains('td', 'Gender').next().should('have.text', 'Male');
      cy.contains('td', 'Mobile').next().should('have.text', testData.mobileNumber);
      cy.contains('td', 'Date of Birth').next().should('have.text', '28 February,1930');
      cy.contains('td', 'Subjects').next().should('have.text', testData.subject);
      cy.contains('td', 'Hobbies').next().should('have.text', 'Music');
      cy.contains('td', 'Picture').next().should('have.text', testData.picture);
      cy.contains('td', 'Address').next().should('have.text', '');
      cy.contains('td', 'State and City').next().should('have.text', testData.state + ' ' + testData.city);
    })
  })
})