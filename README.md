# Next TypeScript TailwindCSS Template

## Template Cloning

```bash
git clone https://github.com/haneulab/next-ts-tailwind-auth-template ./my-next-app
```

## Prepare Project

```bash
yarn && yarn prepare
```

## Add Husky Hooks

```bash
npx husky add .husky/pre-commit 'yarn lint && yarn format && yarn type-check'
npx hussky add .husky/pre-push 'yarn build`
```

## Deploy

You can deploy your application to **vercel** using

```bash
vercel login
.
.
.
vercel .
# or --prod flag if production deployment
vercel --prod
```
