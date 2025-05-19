Fama Barber Shop and Beauty Salon — Landing Page
A modern, responsive React landing page for Fama Barber Shop and Beauty Salon, built with React and Tailwind CSS. The design features smooth scrolling navigation, a fixed navbar, and sections including Hero, About, Services, Reviews, Contact, and Footer.

Features
Responsive design for mobile and desktop

Fixed navbar with toggleable mobile menu

Smooth scrolling navigation to page sections

Accessible icons with react-icons

Styled with Tailwind CSS

Contact section with location, phone, hours, email, and Google Maps link

Demo

Technologies Used
React

Tailwind CSS

React Icons

Vite / Create React App (specify your setup)

Google Maps embedded link

Getting Started
Prerequisites
Node.js (v14 or higher recommended)

npm or yarn

Installation
Clone the repo

bash
Copy
Edit
git clone https://github.com/yourusername/fama-barber-landing.git
cd fama-barber-landing
Install dependencies

bash
Copy
Edit
npm install
# or
yarn install
Run the development server

bash
Copy
Edit
npm start
# or
yarn start
Open http://localhost:3000 to view in the browser.

Project Structure
css
Copy
Edit
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Services.jsx
    InfoCard.jsx
    Reviews.jsx
    Contact.jsx
    Footer.jsx
  assets/
    Logo.png
  App.jsx
  index.jsx
tailwind.config.js
package.json
README.md
Customization
Update src/assets/Logo.png with your own logo

Modify src/components/Contact.jsx to update contact details and Google Maps link

Customize colors and fonts in tailwind.config.js if needed

Deployment
You can deploy the app using Vercel, Netlify, or any static hosting service:

bash
Copy
Edit
npm run build
Then follow your platform's instructions to deploy the build or dist folder.
