![What is this](https://media.giphy.com/media/L2qukNXGjccyuAYd3W/giphy.gif)

# What's this all about?!?

It's a React SPA, connecting to the ChatFood testing API to simulate a food ordering application. The frontend displays dishes mapped to their respective categories and their selections (cart) persisting through local storage.

![what is it made of](https://media.giphy.com/media/1fgkYeb2kdLihhZArq/giphy.gif)

## What cool tech is being used here?

Glad you asked!

- ReactJS bootstrapped with CRA
- Tailwind CSS
- Enzyme and Jest for unit testing

![what is it made of](https://media.giphy.com/media/ck61zO2pN8AU7CYoHj/giphy.gif)

## How did you go about making this?

Bootstrapped with CRA, the screen the user interacts with is a menu, populated with Dishes mapped to their respected categories from a provided API which I re-hosted to avoid CORS.

I used Tailwind CSS to rapidly create component styling as it is quite flexible and comes in handy for conditional styled components.

I've also used the latest React Hooks for state management as well as for custom hooks for local storage.

Speaking of local storage, the user selected dishes persist through local storage like a shopping cart and can be cleared on click of the back arrow to start over. Depending on the stock availability, dishes are capped so as to not go over the order limit and give chefs a heart attack.

![How to use](https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif)

## Very cool! How do I get this up and running on my end?

Just clone this repo, `cd` in and run `npm install` and then `npm start`.
For testing, run `npm run test`
EZ PZ!
