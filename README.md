[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)

# 💻 Atlan SQL Editor

**Link to the application:** [Atlan SQL Editor](https://atlan-garvit.vercel.app/)

## Introduction

This is a web app that allows users to run SQL queries in an online editor and analyze the query results.

## Data

The data used in the application is generated from [Mockaroo](https://www.mockaroo.com/), a website that provides mock data. The data is stored as a local JSON object, but CSV files can also be used with a different logic or a pre-existing format conversion library.

## Page Speed and Optimization

For analyzing page optimization, I have utilized Google's Lighthouse tool and Page Speed Insights to evaluate page load time and compliance with web standards. Additionally, GTMetrix has been used to cross-check the results. On a laptop browser, the time to be interactive for both the Homepage and the SQL Editor page is **0.5 seconds**.

### 1. Page Load Time

The page load time considered here is the time it takes for the site to become interactive, and in all cases shown below, it falls well within Google's specified time for mobile and desktop devices. This is a critical metric from the user's perspective as it enables quick navigation on the site.

The detailed screenshots with respective page load times are attached in a later section of this document.

### 2. Optimizing the Page Load Time and other Metrics

1. The application has been turned into a **PWA (Progressive Web App)** to optimize it, as Google promotes the use of such installable apps. This also allows the web app to be used offline as it can be installed.

2. The website has been designed to be responsive, even though such an application is less likely to be used on mobile devices. Absolute sizing has been minimized, and sizing units like **em, rem, vh, and vw** have been utilized. Media queries have been employed in most cases, except for a few instances where Bootstrap was used for rapid development.

3. The website is hosted on Vercel, a fast and free hosting service for JavaScript-based web apps, offering the benefits of a CDN and caching. It also provides free SSL during hosting, enhancing page security and ranking.

4. React lazy loading has been implemented to load parts of the page that are not immediately required in the background.

5. Minimal dependencies have been used for the creation of the page.

6. The code has been restructured to reuse components and minimize imports where necessary.

## Screenshots

### Functionality

(Include relevant screenshots here)

### Page Load Times (Google Lighthouse used, in Incognito Browser Mode)

**Homepage Load Time (Desktop): 0.5 seconds**

![]("https://raw.githubusercontent.com/garvitvirmani/atlan-screenshots/master/atlan1.png)

<img width="720" alt="Screenshot" src="https://raw.githubusercontent.com/garvitvirmani/atlan-screenshots/master/atlan1.png">
<img width="720" alt="Screenshot" src="https://raw.githubusercontent.com/garvitvirmani/atlan-screenshots/master/Screenshot%20(48).png">
<img width="720" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/Screenshot%20(49).png?raw=true">
<img width="720" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/Screenshot%20(50).png?raw=true">
<img width="720" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/Screenshot%20(51).png?raw=true">
<img width="720" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/Screenshot%20(52).png?raw=true">
<img width="720" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/Screenshot%20(53).png?raw=true">
<img width="720" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/Screenshot%20(54).png?raw=true">
<img width="360" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/WhatsApp%20Image%202023-07-25%20at%2014.29.54.jpeg?raw=true">
<img width="360" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/WhatsApp%20Image%202023-07-25%20at%2014.29.55%20(1).jpeg?raw=true">
<img width="360" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/WhatsApp%20Image%202023-07-25%20at%2014.29.55.jpeg?raw=true">
<img width="360" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/WhatsApp%20Image%202023-07-25%20at%2014.29.56.jpeg?raw=true">
<img width="360" alt="Screenshot" src="https://github.com/garvitvirmani/atlan-screenshots/blob/master/WhatsApp%20Image%202023-07-25%20at%2014.29.57.jpeg?raw=true">

## Problem Statement

### SQL Editor

Create a SQL editor view where users can easily query a table using SQL and view the results. Focus on features, style, design, and layout to provide a beautiful, smooth, and efficient query experience. Concentrate on the frontend only; no backend development is required. You may use stubs and mocks where necessary for the backend.

**Ideal User:** Data analysts from any organization who will use the interface to query data and pass on the results to their business team.

**Things to Note:**

1. Use a JavaScript framework for the task, preferably Vue.js/Nuxt.js, but any framework would work. **DO NOT code** in vanilla JS.
2. You are **NOT** restricted to using this particular data. You can use any external data as well if you prefer.
3. Calculate the page load time of your app and include it in the README. Also, explain how you calculated the page load time.
4. If you made any changes to optimize the page load time of your app, write all the steps you took in the README.

**Submission Details:**

1. Host the code in a version control system (e.g., Github, Gitlab) and provide the link to the repository.
2. Host the web app online using services like Netlify, Surge, etc., and provide the link.

**You will be judged on the following:**

1. Code structure and readability.
2. Page layout and feature set.
3. Information hierarchy of all the content and components shown on the page(s) of your app.
4. Page load time of your app.

**Good luck!**

## 👨‍💻 Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/garvitvirmani"><img src="https://avatars.githubusercontent.com/u/100471242?s=400&u=e3c94955cdd57de6b95f0ecd175bd92620ddf26e&v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Garvit Virmani</b></sub></a><br /></td>  
  </tr>
</table>
