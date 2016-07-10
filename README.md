# Turing School Community Events

**Nota bene**: This is very much beta software.

What is this?
-------------

This is a little API and script for injecting events from the Turing
Community Calendar into the daily outline or for working with Slackbots
or really whatever your imagination can come up with. [Here is a quick
example](https://turing-community-events.herokuapp.com) of what it looks like in action.

Basically, you can just add all of the details for a certain event into
the description and the API will even convert the Markdown to HTML. As
long as everything is in the calendar invite, you don’t have to worry
about the rest.

All you need is an element on the page with the `id` of
`community-events` and then add one of the follow two scripts to the
page.

-   `script.js`
-   `script.js?min=true` for a minified version of the script.

You can also pass the a `target` query parameter with some other `id` as
the value if you’d like to use something other than `community-events`.
The script will look for an element of whatever value you provide
instead.

What does the API look like?
----------------------------

You can make a call to `events` and get back today and tomorrows events
by default.

The response will look something like this:

```json
{
  "events": [
    {
      "title": "The Internet's Own Boy Screening",
      "date": "Thursday, July 14th",
      "start": "6:00pm",
      "end": "8:00pm",
      "location": "Big Workspace",
      "description": ""
    }
  ]
}
```


The API also takes a number of query parameters to customize the output:

-   `start` will allow you to provide a custom start date for
    your query. If you don’t provide a start date, the API will default
    to today.
-   `end` will allow you to provide a custom end date for your query. If
    you don’t provide an end date, the API will default to the day after
    the start date.
-   `html` will also give you the formated HTML that I use the
    script above.

Known Issues
------------

This currently doesn’t work with repeated events, which is kind of a
deal killer.
