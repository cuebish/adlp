// Configuration constants for the ADLP website

export const config = {
  // External services
  formspree: {
    contactFormId: 'xdkenoek',
  },

  cognito: {
    dataKey: 'fOVVQ72VBkKUi8WdktrZcg',
    forms: {
      playerRegistration: '5',
      sponsorshipRegistration: '6',
      donations: '8',
    },
  },

  // S3 asset base URL
  s3BaseUrl: 'https://amigosdelaplacita.s3.us-east-2.amazonaws.com',

  // Site metadata
  site: {
    name: 'Amigos de la Placita',
    domain: 'amigosdelaplacita.org',
    phone: '+1 (787) 450-9669',
    email: 'info@amigosdelaplacita.org',
    location: {
      city: 'San Juan',
      region: 'Puerto Rico',
      country: 'PR',
    },
  },

  // Event details
  event: {
    name: 'Placita Open 2025',
    date: '2025-04-04',
    time: '07:15',
    venue: 'Palmas del Mar',
    city: 'Humacao',
    entryFee: 200,
  },

  // Analytics
  analytics: {
    googleAnalyticsId: 'G-17ZRQBXTZ2',
    amplitudeApiKey: 'e44db146841fa45f307cf6712c9d65b2',
  },
} as const;

// Helper function to get S3 URL for an asset
export function getS3Url(path: string): string {
  return `${config.s3BaseUrl}/${path}`;
}

// Image optimization parameters
export function getOptimizedImageUrl(
  path: string,
  options?: { width?: number; quality?: number }
): string {
  const baseUrl = getS3Url(path);
  const params = new URLSearchParams();

  if (options?.width) {
    params.set('w', options.width.toString());
  }
  if (options?.quality) {
    params.set('q', options.quality.toString());
  }

  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}
