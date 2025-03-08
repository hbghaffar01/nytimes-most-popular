Cypress.Commands.add('mockNYTimesAPI', (period = 1) => {
    cy.intercept('GET', '/svc/mostpopular/v2/viewed/*', (req) => {
        req.reply({
            statusCode: 200,
            body: {
                results: [
                    {
                        id: '1',
                        title: 'Test Article',
                        byline: 'Test Author',
                        abstract: 'Test abstract',
                        section: 'Test Section',
                        published_date: '2024-01-01',
                        media: [],
                        url: 'https://api.nytimes.com/svc/mostpopular/v2',
                        adx_keywords: 'keyword1; keyword2',
                        source: 'The New York Times',
                        type: 'Article',
                        subsection: 'Subsection',
                    },
                ],
            },
        });
    });
});