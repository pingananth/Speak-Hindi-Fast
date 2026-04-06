/**
 * Gating configuration for SpeakHindiFast lessons.
 */

// Lessons 1-5 are completely public.
export const PUBLIC_LESSON_COUNT = 5;

// Lesson 6 is free but requires authentication (Clerk login).
export const AUTH_GATED_LESSON_ID = 6;

// Lessons 7+ require "Pro" status (Payment).
export const PAID_LESSON_START_ID = 7;

/**
 * Helper to check the access requirements for a given lesson ID.
 */
export function getLessonAccessLevel(lessonId: number): "public" | "auth" | "paid" {
    if (lessonId <= PUBLIC_LESSON_COUNT) {
        return "public";
    }
    if (lessonId === AUTH_GATED_LESSON_ID) {
        return "auth";
    }
    return "paid";
}
