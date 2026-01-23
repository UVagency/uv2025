export interface Job {
    id: string;
    title: string;
    type: string;
    location: string;
    description: string;
    applyUrl: string;
}

export const jobsData: Job[] = [
    {
        id: "creative-director",
        title: "Creative Director",
        type: "Full-time",
        location: "Remote",
        description: "Lead our creative vision and oversee the development of groundbreaking campaigns. You'll work with top brands to create work that resonates emotionally and measurably.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-creative-director/viewform"
    },
    {
        id: "social-media-manager",
        title: "Social Media Manager",
        type: "Full-time",
        location: "Hybrid",
        description: "Develop and execute social media strategies that engage audiences and build brand loyalty. Experience with multicultural campaigns is a plus.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-social-media-manager/viewform"
    },
    {
        id: "account-executive",
        title: "Account Executive",
        type: "Full-time",
        location: "On-site",
        description: "Serve as the primary liaison between clients and our creative teams. Build lasting relationships and ensure exceptional project delivery.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-account-executive/viewform"
    },
    {
        id: "motion-designer",
        title: "Motion Designer",
        type: "Full-time",
        location: "Remote",
        description: "Create stunning motion graphics and animations that bring our campaigns to life. Proficiency in After Effects and Cinema 4D required.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-motion-designer/viewform"
    },
    {
        id: "event-producer",
        title: "Event Producer",
        type: "Full-time",
        location: "On-site",
        description: "Design and execute immersive brand experiences and events. From concept to completion, you'll create moments that move people to become customers.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-event-producer/viewform"
    },
    {
        id: "digital-strategist",
        title: "Digital Strategist",
        type: "Full-time",
        location: "Hybrid",
        description: "Develop data-driven digital strategies that drive results. You'll combine creative thinking with analytical insights to optimize campaigns.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-digital-strategist/viewform"
    },
    {
        id: "copywriter",
        title: "Copywriter",
        type: "Full-time",
        location: "Remote",
        description: "Craft compelling copy that tells stories and drives action. Experience writing for multicultural audiences in multiple languages is highly valued.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-copywriter/viewform"
    },
    {
        id: "ux-ui-designer",
        title: "UX/UI Designer",
        type: "Full-time",
        location: "Hybrid",
        description: "Design human-centered digital experiences that blend aesthetics with functionality. You'll work on websites, apps, and interactive installations.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-ux-ui-designer/viewform"
    },
    {
        id: "influencer-marketing-manager",
        title: "Influencer Marketing Manager",
        type: "Full-time",
        location: "Hybrid",
        description: "Lead influencer outreach, campaign strategy, and relationship management to drive brand awareness and engagement across social platforms.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-influencer-marketing-manager/viewform"
    }
];
