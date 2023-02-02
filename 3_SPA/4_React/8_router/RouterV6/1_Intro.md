# Router V6

Remember everything changes quick don't rely on old knowledge and/or tutorials always look at the [docs](https://reactrouter.com/en/main) to stay up to date.

I'm going to introduce you to this new version and explain the changes you'll need to make to your code if you want to use it, and then will also refactor few older projecet store, recipes app(which was used with router v5.1). We'll be updating the projects to use React router version 6 so that we can see clearly where it differs from the previous version.


So first of all we can install newest router version(at the time this was written it was 6 so add @6 at the end of npm install)

```bash
npm i react-router-dom
```

If we would run _npm start_ now we would get a ton of errors, try it out and see. This is because the code is outdated now. We are going to address all the issues now and make it work with router v6 in da next lesson