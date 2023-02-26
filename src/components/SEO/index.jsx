export default function SEO(){
    const title = "Normalement, par Ghali";
    const description = 'Réviser c\'est bien, une personne qu t\'aime c\'est mieux. :/';
    
    
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta name="theme-color" content="#ff7f00" />
      </>
    );
 }