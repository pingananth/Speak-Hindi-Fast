import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        tokenIdentifier: v.string(), // Clerk's unique ID for the user
        email: v.string(),
        name: v.optional(v.string()),
        isPro: v.boolean(), // Whether they've paid for the full course
        subscriptionStartedAt: v.optional(v.number()), // Unix timestamp
    }).index("by_token", ["tokenIdentifier"]),

    userProgress: defineTable({
        userId: v.id("users"),
        lessonId: v.number(),
        completedAt: v.number(),
        lastAccessedAt: v.number(),
    }).index("by_user_lesson", ["userId", "lessonId"]),
});
