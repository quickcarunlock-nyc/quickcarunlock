/**
 * Single source of truth for business facts shown on the site.
 * Only set a value here after the client has confirmed it.
 */
export const business = {
  name: 'Quick Car Unlock',
  phoneDisplay: '(347) 801-7119',
  phoneTel: '3478017119',
  phoneE164: '+13478017119',
  /** Client has confirmed the technicians are insured. */
  insured: true,
  /**
   * NYC locksmith license number. Client has agreed to supply it.
   * While this is null the site does NOT claim to be licensed anywhere.
   * Example once confirmed: '#0000000'
   */
  licenseNumber: null as string | null,
  /** Starting prices. Client has agreed to confirm these; update here to change everywhere that imports them. */
  startingPrices: [
    { service: 'Emergency car unlock', price: '$55+' },
    { service: 'Key replacement', price: '$120+' },
    { service: 'Ignition repair', price: '$150+' },
    { service: 'Fob programming', price: '$145+' },
  ],
};

export const trustLine = business.licenseNumber
  ? `Licensed (NYC license ${business.licenseNumber}) and insured technicians`
  : business.insured
    ? 'Insured technicians'
    : '';
