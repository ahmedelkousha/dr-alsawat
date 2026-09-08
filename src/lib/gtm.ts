import { sendGTMEvent } from '@next/third-parties/google';

/**
 * Send a custom event to Google Tag Manager via @next/third-parties/google
 */
export const trackGTMEvent = (data: Record<string, any>) => {
  sendGTMEvent(data);
};

/**
 * Helper to track user conversion actions (e.g., booking, calling, messaging on WhatsApp)
 */
export const trackConversion = (action: string, label?: string, value?: number) => {
  sendGTMEvent({
    event: 'conversion',
    conversion_action: action,
    conversion_label: label || '',
    value: value ?? 0,
  });
};
