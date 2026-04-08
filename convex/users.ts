import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Syncs a user from Clerk to the Convex database.
 * This is called once a user logs in.
 */
export const storeUser = mutation({
    args: {
        email: v.string(),
        name: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const identity = await ctx.auth.getUserIdentity();
        console.log("🛠️ storeUser mutation: Identity is:", identity ? "VERIFIED" : "NULL");
        
        if (!identity) {
            console.error("❌ storeUser mutation: Failed because identity is NULL. Verify Clerk JWT template 'convex'.");
            throw new Error("Called storeUser without authentication");
        }

        console.log("👤 User details from token:", {
            tokenIdentifier: identity.tokenIdentifier,
            name: identity.name,
            email: identity.email,
        });

        // Check if the user already exists
        const user = await ctx.db
            .query("users")
            .withIndex("by_token", (q) =>
                q.eq("tokenIdentifier", identity.tokenIdentifier)
            )
            .unique();

        if (user !== null) {
            // Already exists, update name or email if they changed
            if (user.name !== args.name || user.email !== args.email) {
                await ctx.db.patch(user._id, {
                    name: args.name,
                    email: args.email,
                });
            }
            return user._id;
        }

        // Return the new user's ID
        return await ctx.db.insert("users", {
            tokenIdentifier: identity.tokenIdentifier,
            email: args.email,
            name: args.name,
            isPro: false, // Default to false, upgraded via payment webhook later
        });
    },
});

/**
 * Checks if the current user has "Pro" access.
 */
export const currentUser = query({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) return null;

        return await ctx.db
            .query("users")
            .withIndex("by_token", (q) =>
                q.eq("tokenIdentifier", identity.tokenIdentifier)
            )
            .unique();
    },
});

