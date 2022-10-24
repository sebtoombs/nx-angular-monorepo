# nx-angular-monorepo

This is an example project using Angular in a monorepo with NX & (npm) workspaces.

Each application is an independent package within `apps/*`. Shared packages & tooling live within `packages/*` and `tools/*` respectively.

## Development

First, clone the repo:

```
git clone git@github.com:sebtoombs/nx-angular-monorepo.git
```

Jump into the project:
```
cd nx-angular-monorepo
```

Then install dependencies:

```
npm install
```

Start an application:

```
npx nx start transaction
```

Note: This usage assumes we're using nx pipelines etc, which currently we aren't. You could also do `npm start -w apps/transaction`

## Monorepo notes

There are a few handy things to know when working with a workspaces (npm, yarn etc) monorepo

- There should only ever be one package lockfile (whether npm or yarn or pnpm or other) at the root of the project.
- Each project should specify it's own `package.json` with it's own dependencies, scripts
- The root should know as little about the applications, packages as possible and instead only maintain scripts & dependencies needed for global "things" (this is very case-by-case)
- To run commands within apps/packages, one should always use the workspace provider's method (that is - we never `cd packages/...`). For `npm` that would be `npm run <command> -w apps/my-app`
