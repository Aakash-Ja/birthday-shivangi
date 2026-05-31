# 🎂 Birthday Wish

> Celebrate birthdays with a beautiful, interactive web app. This project is designed to be a heartfelt digital experience for someone special, featuring personalized greetings, memory galleries, surprises, and more.

## 🌐 Live Demo

**Visit Birthday Wish**: [https://aakash-ja-birthday.vercel.app](https://aakash-ja-birthday.vercel.app)

---

## 🌟 Features

- **Interactive Pages**: Multiple unique pages to explore and celebrate
- **Birthday Greetings**: Beautiful cards with smooth animations
- **Memory Gallery**: Browse cherished memories and moments
- **Surprise Reveals**: Click to reveal special messages and surprises
- **Celebration Pages**: Multiple celebration pages with festive animations
- **Confetti Animations**: Festive confetti throughout the experience
- **Smooth Animations**: Elegant transitions for a polished feel
- **Responsive Design**: Perfect on mobile, tablet, and desktop
- **Password Protection**: Secure access to keep the surprise special

---

## 🚀 Getting Started

### Prerequisites

- [Node.js & npm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Local Development

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Aakash-Ja/birthday-wish.git
   cd birthday-wish
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the development server:**
   ```sh
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

### Edit in GitHub

- Use the GitHub web editor to make quick changes and commit directly.

### Codespaces

- Launch a cloud development environment with GitHub Codespaces for instant setup.

---

## 🗺️ Navigation & Structure

- **Home**: Welcome and password gate
- **Celebration Pages**: Multiple pages with birthday wishes
- **Memory Gallery**: Photo memories and moments
- **Surprises**: Special surprise reveals

Navigation is always available for easy access between pages.

---

## 🎨 Customization

### Adding Your Own Messages

Edit greeting messages in the page components under `src/components/`

### Update Content

- **Change messages:** Edit text in each page component.
- **Update greeting cards:** Modify greeting messages in page components.
- **Add gallery photos:** Update gallery photos in [src/components/PageMemories.tsx](src/components/PageMemories.tsx).
- **Styling:** Tailwind CSS and shadcn-ui make it easy to tweak colors, animations, and layouts in [src/index.css](src/index.css).

---

## 📂 Project Structure

- `src/pages/` – Main pages (Index, NotFound)
- `src/components/` – UI components (BirthdayNav, Confetti, PasswordGate, PageOne, PageTwo, PageThree, PageCelebrate, PageMemories, PageSurprise)
- `src/hooks/` – Custom React hooks
- `src/lib/` – Utility functions
- `index.html` – Main HTML template

---

## 🎯 How to Use

1. Enter the password to unlock the experience
2. Navigate through the birthday celebration pages
3. Explore memories and surprises
4. Enjoy the festive confetti animations!

---

## 📝 Development

### Adding New Pages

Create a new component in `src/components/` and add routing in `src/App.tsx`

### Modifying Styles

Update global styles in `src/index.css` or component-specific styles using Tailwind classes

### Adding Components

Use shadcn-ui components or create custom components in `src/components/`

## 🧪 Testing

Run tests with:
```bash
npm run test          # Run all tests once
npm run test:watch    # Run tests in watch mode
```

---

## 📄 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `vitest.config.ts` - Vitest configuration
- `components.json` - shadcn-ui configuration

---

## 🛠️ Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy

Deploy the `dist` folder to your preferred hosting:

- Vercel (recommended)
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3

---

## 🧩 Troubleshooting

- If you see errors, make sure your Node.js version is up to date.
- Delete `node_modules` and run `npm install` if dependencies are missing.
- For routing issues, ensure your hosting supports SPA fallback (serve `index.html` for all routes).

---

## 💡 Tips

- Personalize every page for your special celebration.
- Add new sections or animations to make it even more special.
- Share the link with the birthday person!

---

## 👨‍💻 Developer

**Aakash Jaiswal**
- GitHub: [@Aakash-Ja](https://github.com/Aakash-Ja)
- Portfolio: https://aakash-ja.vercel.app

---

## 📄 License  

Copyright © 2026 Aakash Jaiswal  

This project is open source under the MIT License.  
Any use, modification, or distribution must include credit to the original author.

---

# ❤️ Support

If you like this project, give it a ⭐ on GitHub and share it with others!

---

## 🎉 Credits

This project is a celebration of your unique journey. Enjoy, customize, and make it yours!
