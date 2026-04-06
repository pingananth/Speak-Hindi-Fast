"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

/**
 * A bit of a "hack" to sync Clerk users to Convex without webhooks.
 * This runs on the client when a user is signed in.
 */
export default function SyncUser() {
    const { user, isLoaded, isSignedIn } = useUser();
    const storeUser = useMutation(api.users.storeUser);

    useEffect(() => {
        if (isLoaded && isSignedIn && user) {
            storeUser({
                email: user.emailAddresses[0].emailAddress,
                name: user.fullName || undefined,
            }).catch(console.error);
        }
    }, [isLoaded, isSignedIn, user, storeUser]);

    return null;
}
