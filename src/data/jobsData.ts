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
        id: "account-executive",
        title: "EJECUTIVO/A CUENTAS",
        type: "Full-time",
        location: "On-site",
        description: "Serve as the primary liaison between clients and our creative teams. Build lasting relationships and ensure exceptional project delivery.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-account-executive/viewform"
    },
    {
        id: "designer",
        title: "DISEÑADOR/A",
        type: "Full-time",
        location: "Hybrid",
        description: "Create visual concepts that inspire, inform, and captivate consumers. Develop the overall layout and production design for various applications.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-designer/viewform"
    },
    {
        id: "media-planner",
        title: "MEDIA PLANNER",
        type: "Full-time",
        location: "Hybrid",
        description: "Identify which media platforms would best advertise a client's brand or product. Maximize the impact of advertising campaigns through strategic planning.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-media-planner/viewform"
    },
    {
        id: "community-manager",
        title: "COMMUNITY MANAGER",
        type: "Full-time",
        location: "Hybrid",
        description: "Build and manage our online communities. Engage with audiences, moderate discussions, and represent the brand across social channels.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-community-manager/viewform"
    },
    {
        id: "copywriter",
        title: "REDACTOR",
        type: "Full-time",
        location: "Remote",
        description: "Craft compelling copy that tells stories and drives action. Experience writing for multicultural audiences in multiple languages is highly valued.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-copywriter/viewform"
    },
    {
        id: "influencer-manager",
        title: "INFLUENCER MANAGER",
        type: "Full-time",
        location: "Hybrid",
        description: "Lead influencer outreach, campaign strategy, and relationship management to drive brand awareness and engagement across social platforms.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-influencer-manager/viewform"
    },
    {
        id: "event-producer",
        title: "PRODUCTOR EVENTOS",
        type: "Full-time",
        location: "On-site",
        description: "Design and execute immersive brand experiences and events. From concept to completion, you'll create moments that move people to become customers.",
        applyUrl: "https://docs.google.com/forms/d/e/placeholder-event-producer/viewform"
    }
];
