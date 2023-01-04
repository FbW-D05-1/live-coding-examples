# API

When we are talking about API's we often need to think about:
* Endpoint
* Paths / Parameters
* Authentication

## API Endpoint

Every Api that interacts with a external system will have an endpoint.
[Kanye.rest](https://kanye.rest/) is a free REST API for random Kanye West quotes. We can see the link "https://api.kanye.rest" at the top this is an endpoint we could use to access random quotes.
Different API will have a different Endpoint. The documentation will always tell you what it is and what the endpoints do.
If you take the endpoint above and paste it in your browser you will get a GET json response with a random quote
Most APIs will have way more data than a bunch of quotes from a single person.

## API Paths && Parameters

Paths/ Params which you can use in order to narrow down to a specific data.
We will use a random jokes API trough the use of Paths/ Params we are going to customize the kind of jokes we want to get back.

>Website we will use as an Example:
>> [Joke API](https://sv443.net/jokeapi/v2/)

This one is a little bit more complex than the previous one. It's more complicated because it has more options for you as the Programmer

1. You can choose which Category you want
2. Select Language
3. You can use Flags to blacklist
4. You can select response format
5. Joke type
6. A You can even Search for a Joke for a particular String withing a joke

--------

If you scroll down to "Endpoints:" You will see a GET starting endpoint

```
GET https://v2.jokeapi.dev/joke/[Category/-ies]
```

This one is to get a joke but unlike Kanye.rest if you put it in your browser you will get an Error: No matching joke found
It's because even if it's endpoint it's missing at least a category of jokes like written in the url

If you scroll to the top again and use the try it out section it goes to:
```
URL: https://v2.jokeapi.dev/joke/Any
```
If you choose just programming jokes:
```
URL: https://v2.jokeapi.dev/joke/Programming
```

Difference here we need to specify specific Path. If you paste any of the urls to the browser you will get your jokes.

As you can see these paths must be predetermined and defined but what about Search? you can't plan every possible outcome a user might type and create an endpoint for it. In order to allow an API to be flexible enough to deal with custom "query's" like this, usually APIs allow you to provide Parameters they go after the question mark like this:
```
URL: https://v2.jokeapi.dev/joke/Programming?contains=Debugging
```
Here we see key value paired that goes into URL. The key is our contains that's our search string and after equal sign is our query. if you look closely flags are queries aswell:
```
URL: https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&contains=Debugging
```
If we have more than one query they're nested with & symbol

## Authentication

More complex applications that are used by many users need to start thinking very carefully about how to monetize or limit the use to a certain threshold. The way they would do that is with Authentication.
They have to keep track of how often you're using their server to get data to charge or limit you accordingly.
We will use [Openweather map](https://openweathermap.org/) for this example. If you take a look at the pricing they will tell you that it's free to use their API as long as you don't make more than 60 requests per minute every single time we would refresh the browser with links above it would be a request call. 60 is more than enough unless you have a big site with many users which would make sense to upgrade.

### Authentication on all websites are basically the same.
* Create a new account.
* Sign In
* Tab over to API Key section
* Create new Key
* Copy entire string

You will be using your Key everytime you use the API

Let's take the simplest one that queries by a city name
```
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
```

Now we see parameters we have to replace: city name and our API Key

```
https://api.openweathermap.org/data/2.5/weather?q=London&appid=randomAPIKEY
```

This should give us current Weather data for London

Temp needs to be replaced with metric for celsius or imperial for fahrenheit units

Now download POSTMAN and give it a go