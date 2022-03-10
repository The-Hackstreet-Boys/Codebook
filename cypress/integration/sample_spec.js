/// <reference types="cypress"/>

// navigate to homepage, add a text and tags, delete a tag and send message.

describe('Test post', () => {
  it('logs in, creates a text post and adds tags, sends post', () => {
    cy.visit('http://localhost:3000').then(() => {
      cy.login();

      cy.get('.submit-post').click();

      cy.get('.post-form').click().type('test');

      const tagslist = cy.get('.post-tags').click();

      tagslist.should('be.visible');

      cy.get('.tag-option').click();

      cy.get('.create-post').find('[data-testid="rendered-tag"]').click();

      cy.get('.submit-post').click();

      cy.reload();

      cy.get('.post-card').contains('test post');
    });
  });
});

// navigate to homepage, add comments and replies, delete in opposite order
// navigate to homepage, add an image, send message
// naigate to homepage, add a code snippet, send message.
// like message, save the message, navigate to savedposts and see if it is there, back to homepage.
// search by name
// search by user
// search by clicking on tag
// click on theme toggle
// click on logout
// click on chat feature, send comment.
