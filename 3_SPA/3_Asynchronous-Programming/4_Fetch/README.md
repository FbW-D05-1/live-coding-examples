# Why Do We Need APIS's?

## APIs
### Application Programming Interfaces

If you spent any time on the Internet at all you have most likely already heard this term. So what is API and why do we need it? 

An Application Programming Interface is a set of commands, functions, protocols and objects that programmers can use to create software or interact with an external system.

Example: You're in an Restaurant, you know it sells various cakes and desserts but if you would go to the Kitchen you would find all the raw ingredients(and most likely very surprised chefs looking at you).Imagine you would go straight up to the kitchen and eat a spoon of Mayo then the restaurant will be shocked and pissed. There are Certain things they sell and have on display and others are off limits. That's similar with Data. Example: Facebook, they won't give you access to private information about their users(unless you're a chinese billionaire) and everything else they freely provide the information. Just like Restaurant Menu, They will show what you can access but everything else will be hidden.


If you would visit the [Yahoo Website](https://yahoo.com/) and look at the right middle section you will see a Weather with your current location. Now if we wanted to implement a module like that in our Website, we won't be going around the world and collecting data like that. We aren't really able to get the wind speed and forecast for upcoming days. Where do we get this data?

Premade API's have already almost everything we need. For example above we have [OpenWeather](https://openweathermap.org/) which is great and has everything we would need covered

Similarly when you go to Tinder, you have different sections like shared Friends, Interests... all these pieces of data come from [Facebook API](https://developers.facebook.com/docs/).

```mermaid
A[Someones Server] --> B[API] --> C[Your Server]
```


## What is difference between REST and API?
REST basically is a style of web architecture that governs the behavior of clients and servers. While API is a more general set of protocols and is deployed over the software to help it interact with some other software.
REST is only geared towards web applications. And mostly deals with HTTP requests and responses.

REST is a type of API. Not all APIs are REST, but all REST services are APIs.



### Extra API's

> [Rapid API](https://rapidapi.com/hub) a collection of many many API services

> [Nasa API](https://api.nasa.gov/) NASA data, including imagery, eminently accessible to application developers.

> [Pokemon](https://pokeapi.co/api/v2/pokemon) Collection of Pokemon's and their abilities

> [Chhuck Norris](https://api.chucknorris.io) Chuck Norris Joke Collection

> [SpaceX API](https://github.com/r-spacex/SpaceX-API) Elon Musk

> [FBI CRIME](https://crime-data-explorer.fr.cloud.gov/pages/docApi)