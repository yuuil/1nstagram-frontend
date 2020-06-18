import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { defaults, resolvers } from "./LocalState";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4000",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export default new ApolloClient({
  cache,
  link: authLink.concat(link),
  resolvers,
});

cache.writeData({
  data: defaults,
});
