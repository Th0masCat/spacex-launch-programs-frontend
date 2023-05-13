# Techdome Assessment Round
### By: Sahil Jangra-A2305220093

To develop the landing page, I have used the Next.js framework, which provides server-side rendering by default. For the UI, I have used the Tailwind CSS library to style the components.

To implement the filter functionality, I have created a separate route for each filter, and on clicking any filter option, it navigates to that route with the selected filter value as a query parameter. Then, I have used the getServerSideProps function to fetch the data from the API based on the query parameters and pass it as props to the Landing page component.

For the responsive design, I have used a custom media query implementation, following the mobile-first design approach. For the tablet version, I have used a 2-column product tile layout and followed the desktop design for the desktop viewport.

To optimize the performance, I have used several performance best practices, such as lazy-loading images, and reducing the number of requests. I have also used SEO best practices by setting appropriate metadata and implementing accessible design to ensure high accessibility. To measure the performance, I have used Google Lighthouse and have achieved high scores for Performance, SEO, and Accessibility.

### Website Link(Deployed on Vercel): https://spacex-launch-programs-frontend.vercel.app/

### Lighthouse Report:
![image](https://github.com/Th0masCat/spacex-launch-programs-frontend/assets/74812563/2f39c82e-fd4a-45ec-84ab-8c9e53e79d5f)

## Screenshots:
### Desktop:
![image](https://github.com/Th0masCat/spacex-launch-programs-frontend/assets/74812563/bb097012-d54b-4e89-9f8b-f9c0557ff149)

### Tablet:
![image](https://github.com/Th0masCat/spacex-launch-programs-frontend/assets/74812563/a494b99a-f0e4-428e-8514-75c7175c14f0)

### Mobile:
![image](https://github.com/Th0masCat/spacex-launch-programs-frontend/assets/74812563/5a969e4e-b0be-4a06-975f-73451cda0e48)

### Filters Applied:
![image](https://github.com/Th0masCat/spacex-launch-programs-frontend/assets/74812563/cf6c244b-edb8-463a-a55f-d7d463ebb5e6)
