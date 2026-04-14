import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hindi Course Curriculum | Speak Hindi Fast",
    description: "Explore our structured 30-day Hindi speaking curriculum. From basic verbs to advanced conversation, master Hindi through English.",
    openGraph: {
        title: "Hindi Course Curriculum | Speak Hindi Fast",
        description: "30 days to Hindi fluency. View all lessons and start learning today.",
        url: "https://speakhindifast.in/course",
    }
};

export default function CourseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
