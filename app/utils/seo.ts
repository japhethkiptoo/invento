type Payload = {
  meta?: any[];
  title: string;
  description: string;
};

export const seo = ({ meta, title, description }: Payload) => ({
  meta: [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title,
    },
    {
      description,
    },
    ...(meta || []),
  ],
});
