const React = require("react");
const TestRenderer = require("react-test-renderer");
const {
  createMockEnvironment,
  MockPayloadGenerator,
} = require("relay-test-utils");
const { App } = require("../App");
const { HookComponent } = require("../HookComponent");

describe("HookComponent", () => {
  it("renders loading state", () => {
    const environment = createMockEnvironment();
    const renderer = TestRenderer.create(
      <App environment={environment}>
        <HookComponent />
      </App>
    );
    expect(renderer.root.findAllByType("h1").length).toEqual(0);
  });

  it("renders data", () => {
    const environment = createMockEnvironment();
    const renderer = TestRenderer.create(
      <App environment={environment}>
        <HookComponent />
      </App>
    );

    environment.mock.resolveMostRecentOperation((op) => {
      return MockPayloadGenerator.generate(op);
    });
    expect(renderer.root.findAllByType("h1").length).toEqual(1);
  });
});
