# WEB103 Prework - *Creatorverse*

Submitted by: **Pablo Valdes**

About this web app: **A platform to see and share your favorite creators**

Time spent: **19** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Basic Form Validation
* [x] More Concise Design
* [x] Back Button


## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Lice Cap for Windows

## Notes

While creating this app I knew the longest part would be the CSS, especially using Pure CSS, but I figured I could make it work, so in an effort to make the CSS clean, I tried using multiple
CSS files, one for every component for the sake of modularization, but one thing I never knew was that for some reason, even if you have two CSS variables in two seperate files, if they have
the same variable name, they will conflict, it's very strange to me considering two of these components or pages would never be up at the same time, so there should be no reason for conflicts,
yet regardless of that fact there was and it was frustrating to figure out, no sources or online help could assist me, so after 2 hour of troubleshooting and removing different variables, files
and changing variable names. I came to the realization, since I added react router after all my designs, maybe it was somehow merging their CSS files or taking them in all at once because that
could help in faster rendering, just kidding I didn't think of that, but I did realize that same variable CSS names were conflicting which ultimately led me to wonder why, and I came to the
conclusion it had to do with react router messing something up, which then led me to believe it could somehow be taking all the individual CSS files at once and confusing them, which seems to
have been the case, as when I changed the variable names of two variables which were the same, but in different CSS files for different components, I noticed the problems were fixed, I did this
with all files, and then the design was once again back to normal. Truly a solution of trial and error, and a lesson learned, never to be repeated (wouldn't have happened with TailwindCSS though haha)

## License

Copyright 2024. Pablo Valdes.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

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
