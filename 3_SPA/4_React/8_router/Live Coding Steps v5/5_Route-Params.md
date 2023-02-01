# Route Parameters

## What we want to do
What I'd like to do now is add a little read more linked to each one of the Articles so that when a user clicks on that, they go to a _dynamic_ details page for that specific article.

So what would the routes look like for those article pages?

for example:
```
localhost:3000/articles/:id
```
Well, they'd probably look something like this forward slash(/) articles, then forward slash(/), then some kind of id where the ID part is changeable and would just be the id of the article that we want to see if we clicked on the second article.

for example:
```
localhost:3000/articles/1
localhost:3000/articles/2
localhost:3000/articles/3
```

So this changeable part of the route is called a route parameter.

The general structure of a route is always the same forward slash articles(/articles), forward slash some id(/:id). It's just that the id part could be anything.

And when we go to one of those routes, no matter what the ID is, we always want to load in the same article details components. We just want to fetch a different article to display in that component for each path dependent on the id route parameter.

## So let's see how we can set this up in our project.

So the first thing I want us to do is create some kind of link from each article inside the home page, so we could come down and do an router Link that says something like "Read more...":

```jsx
// don't forget to import Link first

<div key={article.id} className="card">
    <h3>{article.title}</h3>
    <p>{article.author}</p>
    // now we use a to prop instead of path
    <Link to="/articles/id" >Read more...</Link>

    // Now how can we make it dynamic and give them id of an article?
    <Link to={`/articles/${article.id}`} >Read more...</Link>
</div>
```

OK, so now we have this link setup. But we don't have a route set up for this yet.

Before we do that let's see if each article will show us correct ID in the browser. And it works.

As i said before currently, when we go to one of those routes, we're not seeing any component injected here, and that's because we've not set up a route for it inside the App.jsx component.

### So let's do that now.

First let's create a new file called ArticlePage.jsx in our pages folder and then let's use rfc then we can leave that for now.

So now we're going to place this route at the bottom of the route stack in App.jsx and give it a path:

```jsx
// rest of the code above

    // so how will our path look like since id's are dynamic?
    // first obv it's /articles
    // for ids we can't just hardcode it, what if we have 200 articles we would need to copy paste this 200 times with different id "/articles/120"
    //instead we will create a route parameter
    // how we do that is just writing : and then give it a name like id
        <Route path="/articles/:id">
            <ArticlePage />
          </Route>
        </Switch>
    </BrowserRouter>
</div>
```

So why does it work in a string just like that?

It's the colon(:). This colon, it tells to react router that this is a route parameter and it might change. That's how it works. 

Note: it doesn't have to be called id you can call parameter whatever you want ofc but let's keep it _id_ so it makes more sense to us. Especially in the future incase we revisit our code.

For now, the important part is that colon(:) tells react-router-dom that this is a changeable part of the route, so it could be anything.

It could be a number.

It could be a string.

It really doesn't matter and it's going to match against that route.

And now when we click load more our ArticlePage loads up.

So all of these now are going to the same page.

The same component is being loaded in for each of the article routes using this route parameter.

Now the next step is to identify inside this component, the _id_ from the route. And once we have the _id_, we can fetch the data for that particular article and show it all on this page.