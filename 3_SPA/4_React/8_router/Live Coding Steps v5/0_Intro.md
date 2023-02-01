# Routes Intro

## What are Routes and why do we need them?

Pretty simple: 
think about creating react websites with more than just one page(routes), because so far everything that we've done has been on a single page and we're not linking to other pages or anything like that.

So what we are going to learn is how to do that using the React router dom

Now, the react router is a package that we can install into a react project to implement this idea of different pages.

But remember, when we create a react site, it's still technically only ever a single HTML page that makes up the website.

And this makes the experience of switching pages much quicker and slicker.

For example, we might have a site with three routes or pages, like a home page, about page and a contact page, and we could set up the React router so that if we go to just forward slash then page name, it injects a the said component.

```
    this could be our HomePage component
     localhost:3000/
    
    this could be our AboutPage component
    localhost:3000/about

    and finally our ContactPage component
    localhost:3000/contact
```

So we build up this site structure whereby each page, so to speak, is its own components. And then inside that page component, you can always nest all the components as well, which make up the different parts of that page.(like navbar, footer, sidebar etc...)

## So let's start by having a completely new project set up so that we can start from scratch.

Right after installing with CRA or VITE we have to install a package:

We need to install the React router package so that we can link to different pages.
The React router package isn't included in the React library(even though it's made by React), we have to install that separately into our project.
We open up a terminal.
```bash
npm i react-router-dom@5.1
```
Why 5.1 we will tackle the latest router dom 6 a bit later and see what changed

Like always when using CRA delete all the files we don't need (or keep them I'm not your mom).

**VERY IMPORTANT INSIDE _index.js_ YOU HAVE TO DELETE <React.StrictMode></React.StrictMode> AND LEAVE JUST <APP/> ALONE THERE OR ELSE ROUTING WON'T WORK**

We will use json-server again to fetch some articles
Create folder _data_ in root and inside file named _db.json_

paste this inside

```json
{
  "articles": [{
      "id": "1",
      "title": "Welcome to the Site",
      "author": "Joe",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
    },
    {
      "id": "2",
      "title": "5 React Tips for Beginners",
      "author": "Joe's Mum",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
    },
    {
      "id": "3",
      "title": "VS Code Best Packages",
      "author": "Joe's Step Ladder",
      "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ullam eos dignissimos aperiam rerum qui suscipit cum nobis, totam ea tenetur perferendis praesentium corporis possimus ducimus et minima voluptatum. Numquam mollitia culpa consectetur unde illum est aut dicta eligendi vero molestias impedit sint, maiores saepe voluptas necessitatibus excepturi ducimus repudiandae, non quidem nobis veritatis! Libero neque, cumque illo est corrupti eaque recusandae ipsum, ut debitis vitae molestias deleniti voluptates distinctio sapiente autem. Tempore aperiam minima sit atque, tempora doloribus blanditiis id ipsum. Distinctio quos nisi, totam sunt ex voluptatum? Neque alias laborum ipsum doloremque fuga earum in autem. Hic alias omnis facilis facere eum assumenda deleniti ad, maiores laudantium temporibus odio non, molestiae dolorum! Quo mollitia ex sapiente maiores excepturi?"
    }
  ]
}
```

that's all for now Folks