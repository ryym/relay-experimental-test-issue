const React = require("react");
const { graphql, QueryRenderer } = require("react-relay");
const { useRelayEnvironment } = require("react-relay/hooks");

const RendererComponent = () => {
  const environment = useRelayEnvironment();
  return (
    <QueryRenderer
      environment={environment}
      variables={{}}
      query={graphql`
        query RendererComponentQuery {
          name
        }
      `}
      render={({ props }) => {
        return props && props.name ? <h1>Hello, {props.name}</h1> : null;
      }}
    />
  );
};

module.exports = { RendererComponent };
