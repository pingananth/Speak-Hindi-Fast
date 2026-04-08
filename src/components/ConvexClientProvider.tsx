"use client";

import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { useAuth, ClerkProvider } from "@clerk/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
    const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;
    
    // Masked log for debugging: pk_test_...abc
    const maskedKey = clerkKey ? `${clerkKey.slice(0, 10)}...${clerkKey.slice(-3)}` : "MISSING";
    console.log("🔐 Clerk Publishable Key detected:", maskedKey);

    return (
        <ClerkProvider
            publishableKey={clerkKey}
        >

            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
}
