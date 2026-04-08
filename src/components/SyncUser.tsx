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
        console.log("🔄 SyncUser mounted. isLoaded:", isLoaded, "isSignedIn:", isSignedIn);
        
        if (isLoaded && isSignedIn && user) {
            console.log("🚀 SyncUser: Attempting to sync user to Convex:", user.emailAddresses[0].emailAddress);
            
            storeUser({
                email: user.emailAddresses[0].emailAddress,
                name: user.fullName || undefined,
            })
            .then((id) => {
                console.log("✅ SyncUser: Successfully stored user in Convex. ID:", id);
            })
            .catch((err) => {
                console.error("❌ SyncUser: Failed to store user in Convex:", err);
            });
        } else if (isLoaded && !isSignedIn) {
            console.log("ℹ️ SyncUser: User is not signed in.");
        }
    }, [isLoaded, isSignedIn, user, storeUser]);

    return null;
}

