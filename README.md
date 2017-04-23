## About
This project is an example for using Typescript, React to build UI components module, which could be used by other client
typescript project.

This project will generate TypeDefinitions(*.d.ts) files for the UI components, thus providing code completion and type
checking.

Libraries which used inside this project:
* React
* Typescript
* Bootstrap@3
* Storybook
* Standard-version

### Usage
* Install dependencies
```bash
$ npm install -S bootstrap@3
$ npm i -S NPM-path/ui-widgets-ts
```

* Import
```js
// CSS Assets
import "bootstrap/dist/css/bootstrap.min.css";

// JS Assets
import "jquery";
import "bootstrap/dist/js/bootstrap.js";

```

* Use components, e.g. Button
```js

import { Button as MyTestBtn } from  "ui-widgets-ts";
or
import { Button as MyTestBtn } from  "ui-widgets-ts/dist/Button";

...
<MyTestBtn type="danger">My Test Button</MyTestBtn>
...
```

### Development

* Open first terminal
```
$ npm install
$ npm run watch
```

* open second terminal
§```
$ npm run build
$ npm run storybook
```
visit: http://localhost:9001/

Folder `src` is all the place we write our components

Folder `storybook` is the place we view/test our components. New component
should always be added as stories in the [react-storybook](https://storybooks.js.org/).

#### Test
[JEST](https://facebook.github.io/jest/) framework.

Create files `*.(test|spec).tsx` under `src` folder and then write test code. Code coverage must be fulfilled.

```
$ npm run test
```

#### Production build
* `npm run build`
This `/dist` folder could be used as the module dependency such as in NPM, or in Github Repo