module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      startServerReadyPattern: 'ready on',
      startServerReadyTimeout: 30000,
      url: ['http://localhost:3000'],
      numberOfRuns: 3,
      settings: {
        preset: 'desktop',
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
        },
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        
        // Performance metrics
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        'speed-index': ['warn', { maxNumericValue: 3000 }],
        
        // Best practices
        'uses-http2': 'error',
        'uses-long-cache-ttl': 'warn',
        'uses-optimized-images': 'warn',
        'modern-image-formats': 'warn',
        'uses-text-compression': 'error',
        'uses-responsive-images': 'warn',
        
        // Accessibility
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'valid-lang': 'error',
        
        // SEO
        'meta-description': 'error',
        'document-title': 'error',
        'link-text': 'warn',
        'crawlable-anchors': 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};