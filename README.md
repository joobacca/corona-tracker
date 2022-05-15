# Coding challenge SDA SE

Hello and welcome to this coding challenge solution! As you can see, I have chosen to implement the given web app using React and Material UI.
It's a simple CRA app which you can run by following these two steps:

- Install the packages using `yarn` or, in case you don't have yarn installed, `npm i`
- To see the development build, run the `start` script, with yarn or npm (`yarn run start` or `npm run start`)
- To see the production build, build the project by running the `build` script (same as above) and copy the output (./build) into a publicly viewable folder of a web server of your choice (`XAMPP` would be my choice if to be kept on localhost)
- Also you can check out the production build [here](https://corona-tracker-umber.vercel.app/), hosted on Vercel!

## Design choices

As I mostly do, I tried to find and extract either reoccuring code or a bunch of state/useEffect hooks into custom hooks, without overengineering too much. With the nature of MUI components, it made sense to make usage of the useMuiInput hook; although it got kind of messy in my attempt to have the "Add" button validate the inputs. It was not possible to do more without exceeding the given time quota; although I still would want to implement the date filter, validation on Add button click, display of a Map with pinnable location, etc.

I had lots of fun implementing this little app and am looking forward to hearing from you.