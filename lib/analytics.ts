// GA4 Analytics Helper
// Set your GA4 Measurement ID in layout.tsx

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
}

// ===== Calculator Events =====

/** User clicks "Calculate" button */
export function trackCalculate(params: {
  adults: number;
  kids: number;
  totalGuests: number;
  partyType: string;
  duration: number;
  page: string; // which calculator page
}) {
  trackEvent('calculate', {
    ...params,
    event_category: 'calculator',
  });
}

/** User changes party type selection */
export function trackPartyTypeSelect(partyType: string) {
  trackEvent('select_party_type', {
    party_type: partyType,
    event_category: 'calculator',
  });
}

/** User adjusts guest count via +/- buttons */
export function trackGuestAdjust(guestType: 'adults' | 'kids', value: number, method: 'button' | 'preset' | 'input') {
  trackEvent('adjust_guests', {
    guest_type: guestType,
    value,
    method,
    event_category: 'calculator',
  });
}

/** User changes duration slider */
export function trackDurationChange(hours: number) {
  trackEvent('set_duration', {
    hours,
    event_category: 'calculator',
  });
}

// ===== Results Events =====

/** User views calculation results */
export function trackResultsView(params: {
  totalGuests: number;
  itemCount: number;
  page: string;
}) {
  trackEvent('view_results', {
    ...params,
    event_category: 'results',
  });
}

/** User clicks "Generate Shopping List" */
export function trackGenerateShoppingList(itemCount: number) {
  trackEvent('generate_shopping_list', {
    item_count: itemCount,
    event_category: 'results',
  });
}

// ===== Shopping List Events =====

/** User copies shopping list */
export function trackCopyList(itemCount: number) {
  trackEvent('copy_shopping_list', {
    item_count: itemCount,
    event_category: 'shopping_list',
  });
}

/** User prints shopping list / results */
export function trackPrint(page: string) {
  trackEvent('print', {
    page,
    event_category: 'shopping_list',
  });
}

/** User checks/unchecks item in shopping list */
export function trackCheckItem(itemName: string, checked: boolean, checkedCount: number, totalCount: number) {
  trackEvent('check_shopping_item', {
    item_name: itemName,
    checked,
    checked_count: checkedCount,
    total_count: totalCount,
    event_category: 'shopping_list',
  });
}

/** Shopping list completion (all items checked) */
export function trackListComplete(itemCount: number) {
  trackEvent('shopping_list_complete', {
    item_count: itemCount,
    event_category: 'shopping_list',
  });
}

// ===== Navigation Events =====

/** User clicks on a related calculator link */
export function trackCalculatorNavigation(from: string, to: string) {
  trackEvent('calculator_navigation', {
    from_page: from,
    to_page: to,
    event_category: 'navigation',
  });
}

/** User clicks FAQ accordion */
export function trackFAQOpen(question: string, page: string) {
  trackEvent('faq_open', {
    question: question.substring(0, 100),
    page,
    event_category: 'engagement',
  });
}

// ===== Engagement Events =====

/** User scrolls to content sections (below calculator) */
export function trackContentScroll(section: string, page: string) {
  trackEvent('scroll_to_content', {
    section,
    page,
    event_category: 'engagement',
  });
}

/** Track time spent on page before first calculation */
export function trackTimeToFirstCalc(seconds: number, page: string) {
  trackEvent('time_to_first_calc', {
    seconds,
    page,
    event_category: 'engagement',
  });
}

// ===== Error Events =====

/** Track any JS errors */
export function trackError(errorMessage: string, page: string) {
  trackEvent('js_error', {
    error_message: errorMessage.substring(0, 200),
    page,
    event_category: 'error',
  });
}
