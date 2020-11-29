const React = require("react");
const { RelayEnvironmentProvider } = require("react-relay/hooks");

const { Suspense } = React;

const App = ({ children, environment }) => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback="loading">{children}</Suspense>;
    </RelayEnvironmentProvider>
  );
};

module.exports = { App };
