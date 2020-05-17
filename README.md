# drawio-viewer

Preview the draw.io file on GitHub.

## Install

    $ npm install

## Development

    npm run dev

## Build

    npm run build

## Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts.

## Docs

- [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)

# package-info

## Why separate `app/scripts` and `app-src/*` ?

- It is because to reduce the size of the zip.
- When `.ts` files under the `scripts` folder, `webextension-toolbox` build TypeScript, also output the `.ts` file together. (Even test files!)
- This folder is to suppress this issue.
