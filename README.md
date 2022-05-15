# Coding challenge SDA SE

Hello and welcome to this coding challenge solution! As you can see, I have chosen to implement the given web app using React and Material UI.
It's a simple CRA app which you can run by following these two steps:

- Install the packages using `yarn` or, in case you don't have yarn installed, `npm i`
- To see the development build, run the `start` script, with yarn or npm (`yarn run start` or `npm run start`)
- To see the production build, build the project by running the `build` script (same as above) and copy the output (./build) into a publicly viewable folder of a web server of your choice (`XAMPP` would be my choice if to be kept on localhost)
- Also you can check out the production build [here](https://corona-tracker-umber.vercel.app/), hosted on Vercel!

The tracker app allows the user to hold and edit their own corona tracking list, residing in the localStorage of the browser. Currently, there is no option to delete entries - to do so, the user must clear their localStorage either using the Developer Tools or the Delete cache function of the browser.

## Design choices

As I mostly do, I tried to find and extract either reoccuring code or a bunch of state/useEffect hooks into custom hooks, without overengineering too much. With the nature of MUI components, it made sense to make usage of the useMuiInput hook; although it got kind of messy in my attempt to have the "Add" button validate the inputs. Instead of using own folders for features, I chose to go with the default way of having "meta" like folders for components, hooks, types and utility functions.

UI wise, I decided not to focus on it too much, since I was eager on writing and organizing the code instead of pushing pixels around. Still, I think the background image and the nature of MUI elements being slick gave the whole thing a halfway nice touch.


## Conclusion 
It was not possible to do more without exceeding the given time quota; although I still would want to implement the date filter, validation on Add button click, display of a Map with pinnable location, testing, etc.

I had lots of fun implementing this little app and am excited on what I could and will implement in the future.