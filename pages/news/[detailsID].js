import { useRouter } from "next/router";

function details() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const newsId = router.query.detailsID;

  return <h2>Details {newsId} </h2>;
}

export default details;
