export type BlogType = {
    id: number;
    title: string;
    content: string;
    profile?: string;
    date?: string;
    min_to_read: number;
    user: {
      name: string;
      profile_image: string;
    };
    blog_image: string;
    tags: string[];
}