# Mazda Progressive Web Application
This is a sample Progressive Web App based on Mazda.com.au

I have been working on mazda.com.au for a while and I decided to implement the website in other way as a complete progressive web application.

I am also writing a blog which after publishing the post, I will update this readme


I am using Mazda.com.au as a sample of styles and content!


# Step 1: Initilizing the project!
I am using Next.js because it gives me:
- Server Side Rendering
- HMR (Hot Module Reloading) and Error Reporting

# Step 2: Adding Styled Component to the project
I am using Styled-Component in this project because:
- It has an awesome server-rendering
- It's readable 
- CSS like synstax

# Step 3: Enabling Service workers
I want to cache everything for next.js in production to be able to see the website offline


# Step 4: Background Sync Data
I have created background sync data to be called by a button, therefore I cache another request

# Step 5: Send Notifications
After going to offline mode, Event listener will fire a sync command to trigger background sync functionality of servicer workers.

# Step 6: Creting Manifest
Just creating Manifest to have experience of installing the app on your devices

# Step 7: Making website ready for sharing
The concept of OpenGrah exists for managing what you want to be shared on social media!

# Step 8: Working on Server Rendering
Because we are using next.js with the help of getInitialProps and passing responses to props of the page, we can simply have SSR in this project

# Step 9: Securing with HTTPS 
It depends where you want to deploy your app.


# How to Start this project for development:
Run commands below
```
npm i
npm run dev
```

# How to Start this project for production:
Run commands below
```
npm i
npm run build
npm run start
```
