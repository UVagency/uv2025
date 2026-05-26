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
        title: "EJECUTIVO/A DE CUENTAS",
        type: "Full-time",
        location: "Hybrid",
        description: "Serve as the primary liaison between clients and our creative teams. Build lasting relationships and ensure exceptional project delivery.",
        applyUrl: "https://forms.gle/bGtZk5bAE5XFAZzD7"
    },
    {
        id: "designer",
        title: "DISEÑADOR/A",
        type: "Full-time / Part-time",
        location: "Hybrid",
        description: "Create visual concepts that inspire, inform, and captivate consumers. Develop the overall layout and production design for various applications.",
        applyUrl: "https://forms.gle/Qpq7VxTzss2yQGLb7"
    },
    {
        id: "media-planner",
        title: "MEDIA PLANNER",
        type: "Full-time / Part-time",
        location: "Hybrid",
        description: "Identify which media platforms would best advertise a client's brand or product. Maximize the impact of advertising campaigns through strategic planning.",
        applyUrl: "https://forms.gle/kAXFumdP5rrgCr7F9"
    },
    {
        id: "copywriter",
        title: "REDACTOR",
        type: "Full-time / Part-time",
        location: "Hybrid",
        description: "Craft compelling copy that tells stories and drives action. Experience writing for multicultural audiences in multiple languages is highly valued.",
        applyUrl: "https://forms.gle/nTqtJENXxxeVbkBU9"
    },
    {
        id: "senior-art-director",
        title: "DIRECTORA DE ARTE SENIOR",
        type: "Full-time / Part-time",
        location: "Hybrid",
        description: "Lead the visual direction of campaigns and projects. Define creative standards and mentor the design team to deliver exceptional brand experiences.",
        applyUrl: "https://forms.gle/3io9JrjjtW1HrFGH7"
    },
    {
        id: "digital-content-editor",
        title: "EDITOR CONTENIDO DIGITAL",
        type: "Full-time / Part-time",
        location: "Hybrid",
        description: "Edit and produce digital content across platforms. Ensure quality, consistency, and brand alignment in every piece of visual and written content.",
        applyUrl: "https://forms.gle/iFLP9D68AE5nn49E8"
    },
    {
        id: "content-creator-chile",
        title: "CONTENT CREATOR CHILE",
        type: "Contract",
        location: "Hybrid",
        description: "Create engaging content tailored for the Chilean market. Produce high-quality visual and written material that resonates with local audiences.",
        applyUrl: "https://forms.gle/cLA1Lz2h59iu3WPQ7"
    },
    {
        id: "design-intern",
        title: "PRÁCTICA DISEÑADOR/A",
        type: "Internship",
        location: "Hybrid",
        description: "Join our design team as an intern and grow your skills in a real agency environment. Work alongside senior designers on live projects for top brands.",
        applyUrl: "https://forms.gle/neKsLtPKmrUeNRyj8"
    }
];
