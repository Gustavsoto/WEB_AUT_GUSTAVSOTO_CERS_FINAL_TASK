import formPage from "../pageObjects/formPage";

describe('template spec', () => {
  context('Make an Appointment', () => {
    beforeEach(() => {
      //Open https://demoqa.com/automation-practice-form
      formPage.visit()
    });
    it('submit form', () => {
      //Input all the necessary information in the text fields, buttons, etc, where it is not stated otherwise.
      formPage.firstNameInput.type("Gustavs Oto");
      formPage.lastNameInput.type('Cers');
      formPage.emailInput.type('gustavsoto.cers@va.lv');
      formPage.genderLabel.contains('Male').click();
      formPage.phoneInput.type('1234567891');
      formPage.addressInput.type("Some address 12");
      //Set the - Date of Birth - with Calendar widget to - 28th of February, 1930.
      formPage.dateOfBirthInput.click();
      formPage.selectCalendarMonth.select('February');
      formPage.selectCalendarYear.select("1930");
      formPage.selectCalendarDay.contains("28").click();
      //Set Subjects to Economics
      formPage.subjectsInput.type("Economics").type("{enter}");
      //Set Hobbies to Music
      formPage.hobbiesLabel.contains('Music').click();
      //Upload an image of your choice
      formPage.imageInput.click().selectFile('./cypress/files/download.jpg');
      //Set State to NCR
      formPage.stateDropdown.click().type('NCR{enter}');
      //Set City to Delhi
      formPage.cityDropdown.click().type('Delhi{enter}');
      //Click Submit
      formPage.submitButton.click();
      //Validate that each Labeled row contains the correct information
      formPage.tableCell.contains('Student Name').next('td').should('contain', 'Gustavs Oto');
      formPage.tableCell.contains('Student Email').next('td').should('contain', 'gustavsoto.cers@va.lv');
      formPage.tableCell.contains('Gender').next('td').should('contain', 'Male');
      formPage.tableCell.contains('Mobile').next('td').should('contain', '1234567891');
      formPage.tableCell.contains('Date of Birth').next('td').should('contain', '28 January,1930');
      formPage.tableCell.contains('Subjects').next('td').should('contain', 'Economics');
      formPage.tableCell.contains('Hobbies').next('td').should('contain', 'Music');
      formPage.tableCell.contains('Picture').next('td').should('contain', 'download.jpg');
      formPage.tableCell.contains('Address').next('td').should('contain', 'Some address 12');
      formPage.tableCell.contains('State and City').next('td').should('contain', 'NCR Delhi');
    })
  });
})