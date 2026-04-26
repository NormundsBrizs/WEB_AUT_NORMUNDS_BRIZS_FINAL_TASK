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
      // Set State to NCR
      // Set City to Delhi
      // Click Submit
      // Validate that each Labeled row contains the correct information
    })
  })
})