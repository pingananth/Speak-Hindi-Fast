"use client";

import { useEffect } from 'react';
import { initAll } from '@amplitude/unified';

// Move guard outside the component to ensure it persists across re-renders/mounts
let isInitialized = false;

/**
 * Initializes Amplitude Analytics and Session Replay on the client side.
 * This component should be included once in the root layout.
 */
export default function AmplitudeInit() {
    useEffect(() => {
        // Strict initialization as per documentation
        if (typeof window !== "undefined" && !isInitialized) {
            console.log("📊 Initializing Amplitude Unified SDK...");
            initAll('58421a302bbbb09dd168b75d9472daf6', {
                "analytics": {
                    "autocapture": true
                },
                "sessionReplay": {
                    "sampleRate": 0.1
                }
            });

            isInitialized = true;
        }
    }, []);

    return null;
}


