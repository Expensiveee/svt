import { useRouter } from "next/router";

const Flashcards = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  //If no data return 404
  if (!data) {
    return <p>404</p>;
  }

  return <p>Post: {JSON.stringify(data)}</p>;
};

export async function getServerSideProps(context) {
  // Fecth category data from https://svt.expensiveee.me/api/categories/get with slug from context params and check erros if any and return data
  const res = await fetch(`https://svt.expensiveee.me/api/categories/get`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ slug: context.params.slug }),
  });
  const data = await res.json();

  //Check status
  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Flashcards;
