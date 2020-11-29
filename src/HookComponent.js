const React = require("react");
const { graphql, useLazyLoadQuery } = require("react-relay/hooks");

const HookComponent = () => {
  const data = useLazyLoadQuery(
    graphql`
      query HookComponentQuery {
        name
      }
    `,
    {}
  );
  return <h1>Hello, {data.name}</h1>;
};

module.exports = { HookComponent };
