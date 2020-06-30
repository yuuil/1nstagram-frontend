import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = ({ location: { search } }) => {
  const term = search.split("=")[1];
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term,
    },
  });
  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
};

export default withRouter(SearchContainer);
