# Portfolio Next

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS 4.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Engaging UI with react-type-animation and scroll-based interactions
- **Contact Form**: Integrated with EmailJS for seamless communication
- **Toast Notifications**: User-friendly feedback with react-toastify
- **Icon Library**: Beautiful icons from Lucide and React Icons
- **Performance Optimized**: Fast loading and efficient rendering
- **Easy to Deploy**: Ready for Vercel or any Node.js hosting

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16.2.4
- **Language**: [React](https://reactjs.org/) 19.2.4
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [React Type Animation](https://www.npmjs.com/package/react-type-animation) & [React Scroll](https://www.npmjs.com/package/react-scroll)
- **Forms**: [EmailJS](https://www.emailjs.com/) for email handling
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- **Linting**: [ESLint](https://eslint.org/) with Next.js config

## 📁 Project Structure

```
portfolio-next/
├── public/
│   └── profile_pic.jpg
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   └── globals.css
│   └── components/
│       ├── Hero.jsx
│       ├── ExperienceTimeline.jsx
│       ├── Navbar.jsx
│       ├── Contact.jsx
│       ├── ToastProvider.jsx
│       └── ClientProviders.jsx
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hammad-Asif/portfolio-next.git
   cd portfolio-next
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Linting

Check for code style issues:
```bash
npm run lint
```

## 🎨 Customization

### Personal Information

Edit the content in the components to reflect your personal information:

- **Hero Section**: `src/components/Hero.jsx`
- **Experience Timeline**: `src/components/ExperienceTimeline.jsx`
- **Navbar**: `src/components/Navbar.jsx`
- **Contact Form**: `src/components/Contact.jsx`

### Styling

The project uses Tailwind CSS 4. Modify `src/app/globals.css` for global styles or use utility classes directly in components.

### Configuration

- Next.js configuration: `next.config.mjs`
- PostCSS configuration: `postcss.config.mjs`
- ESLint configuration: `eslint.config.mjs`

## 📱 Responsive Breakpoints

The design follows a mobile-first approach with these breakpoints:

- **Mobile**: < 640px
- **Tablet**: ≥ 640px
- **Desktop**: ≥ 1024px
- **Large Desktop**: ≥ 1280px

## 🔧 Available Scripts

In `package.json`, you'll find:

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Add your environment variables
4. Deploy!

Alternatively, you can deploy to any Node.js hosting service.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [EmailJS](https://www.emailjs.com/) for email service integration
- All the open-source libraries used in this project

---

**Created with ❤️ by Hammad Asif**

[![Portfolio Preview](public/profile_pic.jpg)](https://github.com/Hammad-Asif/portfolio-next)