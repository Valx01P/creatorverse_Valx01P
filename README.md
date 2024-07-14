## Website structure and features:

## Hero Component:
  The first part of the site you see, has a title to welcome users, and 2 buttons:
   -Button 1 is a view creators button which reroutes us to the Home Feed
   -Button 2 is a upload creator button which reroutes us to the Upload Creator Form

## Home Feed Page:
  This page is where users can see the uploaded creators of other users, the page is made of Creator Card Components.
  Furthermore, in this page we make a GET request to our database to get all creators if there are any, this data is
  then passed as props to our Creator Card Components using a map function

## Creator Card Component:
  This component is passed props from the Home Feed Page relating to a creator's name, description, image url,
  id, and social media. With this data we create the creator card which has multiple social links as well as
  a link to edit the creator and to view them directly, in other words, we have some CRUD buttons

## Upload Creator Form:
  This page is exactly how it sounds, it's the page that allows a user via a form to input a creator's name,
  description, image url, and social media (optionally). It has basic validation, just requiring input for
  necessary parts. There is also a back button for easy navigation to the previous route. Once the user
  finishes there inputs they can submit the form which makes a POST request to our database and gives us
  a new entry and likewise creator card for our Home Feed Page.

## Edit Creator Form:
  This page allows us to retrieve a specific creator based on their unique ID and get their respective data as
  well, this allows us to easily propagate our edit form with the current creator data for users to easily edit.
  Once any edits are complete and the form is submitted, a PUT request will be sent to our database and will
  make changes to the creator entry accordingly. There is also a back button as the Upload Form had, and
  there is a delete button, this delete button when pressed creates a basic confirmation dialogue box or
  modal (whichever you prefer to call it) that when confirmed, a DELETE request is sent to our database
  which deletes the given entry based on it's unique ID.

## Profile Page:
  This page shows only one creator, it's accessed by clicking the info link on a respective creator card
  in the Home Feed Page. Each of these pages are dynamically made, as is our Edit Page, both based on
  current data. In this page there is a back button, as well as a delete creator button and edit creator
  button, both of which we've discussed previously in their functionality.

## Note:
### Our Supabase credentials are in a dot env file, here's how that would look like:
```env
# example env
VITE_SUPABASE_URL=https://yoururl.supabase.co
VITE_SUPABASE_KEY=yourkey123abc
```

## **Thanks for Reading!**
