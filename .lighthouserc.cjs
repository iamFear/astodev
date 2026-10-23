module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['http://localhost/'],
      numberOfRuns: 3,
      settings: {
        onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      },
    },
    assert: {
      assertions: Object.fromEntries(
        ['performance', 'accessibility', 'best-practices', 'seo'].map((category) => [
          `categories:${category}`,
          ['error', { minScore: 0.95, aggregationMethod: 'pessimistic' }],
        ])
      ),
    },
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-reports',
    },
  },
};
