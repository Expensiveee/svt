export default function SEO() {
  const title = "Normalement, par Ghali";
  const description =
    "Réviser c'est bien, une personne qu t'aime c'est mieux. :/";

  return (
    <>
      <title>{title}</title>
      <meta itemProp="name" content={title} />
      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta name="theme-color" content="#766ac4" />

      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
}
