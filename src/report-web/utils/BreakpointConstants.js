export const BREAKPOINT_MOBILE = 'mobile';
export const BREAKPOINT_TABLET = 'tablet';
export const BREAKPOINT_SMALL_DESKTOP = 'small_desktop';
export const BREAKPOINT_MEDIUM_DESKTOP = 'medium_desktop';
export const BREAKPOINT_LARGE_DESKTOP = 'large_desktop';

export const BREAKPOINT_NAMES = [
  BREAKPOINT_MOBILE,
  BREAKPOINT_TABLET,
  BREAKPOINT_SMALL_DESKTOP,
  BREAKPOINT_MEDIUM_DESKTOP,
  BREAKPOINT_LARGE_DESKTOP,
];

export const BREAKPOINT_RANGES = {
  [BREAKPOINT_MOBILE]: {
    min: 1,
    max: 599,
  },
  [BREAKPOINT_TABLET]: {
    min: 600,
    max: 899,
  },
  [BREAKPOINT_SMALL_DESKTOP]: {
    min: 900,
    max: 1199,
  },
  [BREAKPOINT_MEDIUM_DESKTOP]: {
    min: 1200,
    max: 1799,
  },
  [BREAKPOINT_LARGE_DESKTOP]: {
    min: 1800,
    max: 999999,
  },
};
