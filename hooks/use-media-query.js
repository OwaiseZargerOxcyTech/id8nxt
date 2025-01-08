'use client';

import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const updateMatches = () => setMatches(media.matches);

    updateMatches(); // Set initial match state
    media.addEventListener('change', updateMatches); // Use addEventListener

    return () => {
      media.removeEventListener('change', updateMatches); // Use removeEventListener
    };
  }, [query]);

  return matches;
}
