import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";
import Container from "../../components/Container";
import { Card, CardBody, CardFooter } from "../../components/Card";
import Loading from "../../components/Loading";
import api from "../../api";

import { getThreads, setLoading } from "./actions";

export default function Home() {
  const dispatch = useDispatch();
  const { threads, loading } = useSelector(store => store.homeReducer);
  console.log("Home");
  React.useEffect(() => {
    dispatch(setLoading());
    async function getThreadsApi() {
      const response = await api.getThreads();
      dispatch(getThreads(response));
    }
    getThreadsApi();
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return threads.map(thread => (
    <Container key={thread.id}>
      <Card id={thread.id} title={thread.title}>
        <CardBody body={thread.body} slug={thread.slug} hasMore />
        <CardFooter
          user={thread.user}
          created_at={thread.created_at}
          total_replies={thread.total_replies}
        />
      </Card>
    </Container>
  ));
}
