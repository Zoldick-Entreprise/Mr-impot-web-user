export type Category = {
    id: string;
    name: { en: string; fr: string };
    slug: string;
    icon: string;
    description: string;
    subCategories?: {
        id: string;
        name: { en: string; fr: string };
        slug: string;
        categoryId: string;
    }[];
};