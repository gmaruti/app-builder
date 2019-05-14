/* eslint-disable */
import { BREAKPOINT_NAMES, BREAKPOINT_RANGES } from './BreakpointConstants';

/**
 * Breakpoints Utility
 * @constructor
 * Global breakpoint tracking utility. Provides awareness of the current breakpoint to components that implement this
 * utility. Also contains the ability to trigger a 'breakpointChange' event on resize.
 */

const Breakpoints = {

  getMediaType() {
    const current = this.getBreakpointNameFromViewportWidth();

    if (current === 'mobile') return 'mobile';
    if (current === 'tablet') return 'tablet';
    if (current === 'large_desktop') return 'large_desktop';
    return 'desktop';
  },

  getBreakpointNameFromViewportWidth() {
    const width = window.innerWidth;
    console.log(width);
    if (!width) {
      return BREAKPOINT_NAMES[BREAKPOINT_NAMES.length-1];
    }

    return BREAKPOINT_NAMES.reduce((foundName, bpName) => {
      if (foundName) return foundName;

      return width <= BREAKPOINT_RANGES[bpName].max ? bpName : null;
    }, null);
  }
};

export default Breakpoints;
