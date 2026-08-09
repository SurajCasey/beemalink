# Beemalink

Beemalink is a modern and responsive insurance landing website designed for a Nepal-based insurance aggregation platform. The website helps users explore insurance services, learn about the company, request a consultation, and view customer testimonials through a clean and professional interface.

## Features

- Responsive navigation bar with a mobile side drawer
- Full-width hero section with responsive background imagery
- About Company section with an image collage
- Insurance Services section with reusable service cards
- Free consultation form
- Customer testimonial section
- Responsive footer with newsletter subscription, contact details, and social links
- Smooth hover effects and transitions
- Mobile, tablet, laptop, and desktop responsive layouts

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Lucide React**
- **React Icons**

## Project Structure

```text
src/
├── assets/
│   ├── beemalink.svg
│   ├── hero.png
│   ├── car.jpg
│   ├── drive.jpg
│   ├── nepal.jpg
│   └── family.jpg
│
├── components/
│   ├── About.tsx
│   ├── Card.tsx
│   ├── Consultation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   └── Testimonial.tsx
│
├── pages/
│   └── LandingPage.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/beemalink.git
```

### 2. Go to the project directory

```bash
cd beemalink
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs the configured linting checks.

## Design

The website uses a clean insurance-focused visual style with:

- Beemalink blue as the primary brand colour
- Montserrat Alternates for prominent headings
- Poppins for general interface and body text
- Large hero imagery
- Rounded call-to-action buttons
- Responsive layouts for different screen sizes

Example Tailwind theme configuration:

```css
@theme {
  --color-primary: #022D9D;
  --color-secondary: #1E40AF;
  --color-accent: #D4AF37;
  --color-bg: #F5F8FF;
  --color-card: #FFFFFF;
  --color-heading: #0F172A;
  --color-bodytext: #475569;
  --color-border: #E2E8F0;

  --font-poppins: "Poppins", sans-serif;
  --font-montserrat: "Montserrat Alternates", sans-serif;
}
```

## Main Sections

### Hero

Introduces Beemalink with the main message:

> Protect What Matters Most

It includes primary actions for requesting a quote and contacting the company.

### About Company

Provides an introduction to Beemalink and presents supporting imagery in a responsive collage.

### Services

Displays key insurance categories such as:

- Motor Insurance
- Property Insurance
- Compulsory Insurance
- Travel Insurance
- Health Insurance
- Insurance services for foreign visitors

### Consultation

Allows visitors to submit their:

- Full name
- Phone number
- Email address

to request a consultation or insurance quote.

### Testimonials

Displays customer feedback in responsive testimonial cards.

### Footer

Includes:

- Beemalink branding
- Newsletter subscription
- Insurance service links
- Email and phone contact information
- Social media links
- Privacy Policy
- Terms of Use

## Responsive Design

The website is designed using a mobile-first approach with Tailwind CSS breakpoints.

Layouts adapt for:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors
- Portrait and landscape screen sizes

## Future Improvements

Potential additions include:

- React Router navigation
- Functional quote submission
- Backend/API integration
- Form validation
- Email notifications
- Dynamic testimonials
- CMS integration
- Insurance comparison tools
- SEO improvements
- Accessibility testing
- Performance optimisation

## Screenshots


## Deployment

The project can be deployed using platforms such as:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

Before deploying, create a production build:

```bash
npm run build
```

## License

This project is intended for Beemalink. All branding, images, content, and related assets should be used according to their respective ownership and licensing requirements.

---

Built with React, TypeScript, Vite, and Tailwind CSS.
