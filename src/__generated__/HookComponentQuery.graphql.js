/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HookComponentQueryVariables = {||};
export type HookComponentQueryResponse = {|
  +name: string
|};
export type HookComponentQuery = {|
  variables: HookComponentQueryVariables,
  response: HookComponentQueryResponse,
|};
*/


/*
query HookComponentQuery {
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
    "name": "HookComponentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HookComponentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4d650db7f3801575c527a838694626ad",
    "id": null,
    "metadata": {},
    "name": "HookComponentQuery",
    "operationKind": "query",
    "text": "query HookComponentQuery {\n  name\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df370385d270e89dd7861a3da212ca4a';

module.exports = node;
