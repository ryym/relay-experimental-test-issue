/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RendererComponentQueryVariables = {||};
export type RendererComponentQueryResponse = {|
  +name: string
|};
export type RendererComponentQuery = {|
  variables: RendererComponentQueryVariables,
  response: RendererComponentQueryResponse,
|};
*/


/*
query RendererComponentQuery {
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RendererComponentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RendererComponentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0d4ae52fc5a8001182eed1ce575bc9db",
    "id": null,
    "metadata": {},
    "name": "RendererComponentQuery",
    "operationKind": "query",
    "text": "query RendererComponentQuery {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eb1ec00a0d7cdbfdb9c71582ce1f2271';

module.exports = node;
