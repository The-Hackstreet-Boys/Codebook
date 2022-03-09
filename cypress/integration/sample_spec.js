describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:3000').then(() => {
      cy.login();
      cy.logout();
    });
  });
});

// navigate to homepage, add a text and tags and send message.
// navigate to homepage, add an image, send message
// naigate to homepage, add a code snippet, send message.
// like message, save the message, navigate to savedposts and see if it is there, back to homepage.
// search by name
// search by user
// search by clicking on tag
// click on theme toggle
//
