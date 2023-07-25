[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)

# 💻 Atlan SQL Editor

**Link to the application:** [Atlan SQL Editor](https://atlan-garvit.vercel.app/)

This is a web app that allows users to run SQL queries in an online editor and analyze the query results. build on **Next.js** with animations from **framer-motion** and light weight css **tailwind-css**

## Data Dump

The data used in the application is generated online from a website that provides mock data. The data is stored as a local JSON object, but CSV files can also be used with a different logic or a pre-existing format conversion library.

## Page Speed and Optimization

I've employed Google's Lighthouse tool and Page Speed Insights to assess the loading speed and adherence to web standards of the website. Furthermore, I've cross-verified the results using GTMetrix. When accessing the Homepage and the SQL Editor page on a laptop browser, the time it takes for both pages to become interactive is an impressive **0.5 seconds**.

### 1. Website Load Time

In this analysis, we are focusing on the page load time, which refers to the duration it takes for the website to become fully interactive. In all instances demonstrated below, the page load time comfortably meets Google's recommended standards for both mobile and desktop devices. This is an essential measure as it significantly impacts the user experience, ensuring swift and smooth navigation on the website.

For more comprehensive information, you can find detailed screenshots depicting the respective page load times in a later section of this document.

### 2. Optimizing the Page Load Time and other web vitals

1. I added caching control headers to optimize the utilization of the browser's public caching mechanism. This configuration minimizes the number of requests sent to the server and enables the serving of pages from the cache memory whenever possible.

2. The website has been carefully designed to be responsive, despite its lesser likelihood of being accessed on mobile devices. We have minimized the use of absolute sizing and instead opted for sizing units like **em, rem, vh, and vw** to ensure flexibility. Media queries have been applied in most cases to achieve responsiveness, with only a few instances where Bootstrap was utilized for faster development.

3. Implemented optimizations suggestions from framer-motion documents , By using the m and LazyMotion components, you can bring this down significantly, to just under 4.6kb for the initial render.

4. I utilized Next.js as the framework, leveraging its Static Site Generation (SSG) feature to serve pages statically also configure Nex.tjs for reducing the JS bundle size and chunk splitting . For lightning-fast user experiences, I deployed it on Vercel's CDN.

5. The website is hosted on Vercel, a fast and free hosting service for JavaScript-based web apps, offering the benefits of a CDN and caching. It also provides free SSL during hosting, enhancing page security and ranking.

6. Implemented optimizations suggestions from framer-motion documents , By using the m and LazyMotion components, you can bring this down significantly, to just under 4.6kb for the initial render.

7. The code has been restructured to reuse components and minimize imports where necessary.

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

## 👨‍💻 Contributor

<table>
  <tr>
    <td align="center"><a href="https://github.com/garvitvirmani"><img src="https://avatars.githubusercontent.com/u/100471242?s=400&u=e3c94955cdd57de6b95f0ecd175bd92620ddf26e&v=4" width="100px;" alt="" style="border-radius:50%"/><br /><sub><b>Garvit Virmani</b></sub></a><br /></td>  
  </tr>
</table>
