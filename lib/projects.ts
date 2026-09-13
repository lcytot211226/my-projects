export type Project = {
  slug: string;
  titleKey: string;
  descriptionKey: string;
};

// Single source of truth for every project mounted under "/".
// Add an entry here whenever a new app/<slug>/page.tsx route is created.
export const projects: Project[] = [
  {
    slug: "profile",
    titleKey: "projects.profile.title",
    descriptionKey: "projects.profile.description",
  },
  {
    slug: "accounting",
    titleKey: "projects.accounting.title",
    descriptionKey: "projects.accounting.description",
  }
];
