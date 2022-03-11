/// <reference types="cypress"/>

// navigate to homepage, add a text and tags, delete a tag and send message.

beforeEach(() => {
  cy.visit('http://localhost:3000').then(() => {
    cy.login();
  });
});

describe('Test post', () => {
  it.only('creates a text post and adds tags, sends post', () => {
    cy.get('[data-testid="submit-post"]').click();

    cy.get('[data-testid="post-form"]').click().type('test post');

    const tagslist = cy.get('[data-testid="post-tags"]').click();

    tagslist.should('be.visible');

    cy.get('[data-testid="tag-option"]').click();

    cy.get('[data-testid="create-post"]').find('[data-testid="rendered-tag"]').click();

    cy.get('[data-testid="submit-post"]').click();

    cy.reload();

    cy.get('[data-testid="post-card"]').first().contains('test post');
  });
});

describe('Comment, reply and delete check', () => {
  it.only('adds a comment and a reply to a post and then deletes in the opposite order', () => {
    const selectedPost = cy.get('[data-testid="post-card"]').first();

    selectedPost.find('[data-testid="comment-button"]').click();

    cy.get('[data-testid="comment-form"]').type('test comment');

    cy.get('[data-testid="submit-comment"]').click();

    cy.get('[data-testid="reply-button"]').first().click();

    cy.get('[data-testid="reply-form"]').type('test reply');

    cy.get('[data-testid="submit-reply"]').click();

    cy.get('[data-testid="delete-button"]').click();
  });
});
// });

// navigate to homepage, add comments and replies, delete in opposite order
// like and save an external post
// navigatation between different pages
