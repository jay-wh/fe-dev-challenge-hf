# Houseful front-end challenge

Create a simple front-end application that will enable estate agents to manage property listings.
We predominantly use React at Houseful for our applications but we welcome a submission with the tools/technology of your choice.

## Tooling

We've included a basic build setup with Vite, React, Typescript, Vitest and React Testing Library. Feel free to use it or to delete it and write the test in whatever tools/technology you feel comfortable with. If you're using the build setup in this repo, you can use the following commands:

```sh
# Install dependencies
pnpm i

# Start development server
pnpm dev

# Run unit tests
pnpm test
pnpm test:watch
```

## Task

An agent should be able to do the following:

- View a list of properties for sale
- Mark an individual property listing as expired
- See which properties are `active` and which have been `expired`.

We have no requirements on the user experience or look and feel so we welcome you to do what you think is best based off the following criteria.

A property listing should contain the following information:

- Image of property
- Number of bedrooms
- Address (including postcode)
- Asking price
- Status - `active` or `expired`

Create a simple, responsive, application that can perform the tasks outlined above.

Below is a visual design of a listings card to illustrate what an individual listing could look like. **This image is not a specific design to implement**. It is only there to give you an idea. Anything not present in the requirements above does not need to be implemented.

Although responsive layouts are not present in this visual, please build them in a way that you think would offer a good user experience.

![Property Listings Card](/listing-card.png "Property Listings Card")

## Data handling

We would like to see data fetching as part of your application. We recommend you use a tool like [JSON Server](https://github.com/typicode/json-server) or [MSW](https://mswjs.io/) to mock the data, rather than build out any APIs. If you use a mocking tool, please ensure it's installed as a project dependency and not globally. The project should build and run successfully after installing the project's local dependencies.

We do not expect you to persist state or store any updates to the listings.

## Technical Notes

You should also ask yourself the following questions before submitting the test, this is what we value and will mark you on:

- Is your code easy to maintain?
- Does your solution scale if more teams were to contribute?
- Does your application work across different screen sizes?
- Is your logic well tested?
- Is your application accessible to all users?
- Is your code semantic?

Feel free to make and state assumptions on any details not covered in the challenge.

We're not expecting a fully functional solution, we recommend spending **2 - 4 hours**.

## Follow-up discussions

In the follow-up technical interview we will discuss the solution you have submitted. Think about how you would automate the deployment (what should be built into the pipeline) or what infrastructure you would choose to support your application.

Please do reach out to the talent team if you have any questions.

**Good luck!**

## Running the test app

To run the app, now its sort of built, use the following commands in separate terminals:

Terminal 1:

- npm run api

Terminal 2:

- npm run dev

You'll then be able to fully interact with the application.
