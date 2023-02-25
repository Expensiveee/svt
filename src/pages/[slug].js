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

  return <p>Post: {JSON.stringify(data, null, 4)}</p>;
};

export async function getServerSideProps(context) {
  const res = await fetch("https://svt.expensiveee.me/api/getAllCategories", {
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
