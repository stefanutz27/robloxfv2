# PlayBox – Roblox-Style Home Screen (Next.js + Tailwind + Vercel)

PlayBox is a Roblox-inspired login interface built with **Next.js**, **React**, and **TailwindCSS**.
Users can enter their **name** and **username**, which are stored locally, and then get redirected to the **official Roblox website**.

This project is fully deployable on **Vercel**.

---

## 🚀 Features

* Roblox-style UI
* Sign In / Sign Out system
* Local data storage using `localStorage`
* Redirect to official Roblox website
* Mobile-friendly UI
* Ready-to-deploy on Vercel

---

## 📁 Project Structure

```
playbox_nextjs/
│── pages/
│   └── index.jsx
│── public/
│── styles/
│── package.json
│── next.config.js
│── postcss.config.js
│── tailwind.config.js
│── vercel.json
└── README.md
```

---

## ⚙️ Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Now open the app at:

👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📦 Build for production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

1. Push project to GitHub
2. Go to **[https://vercel.com/](https://vercel.com/)**
3. Click **New Project**
4. Import your GitHub repo
5. Click **Deploy**

Vercel will automatically detect the Next.js settings.

---

## 🔧 Git commands (for your project)

```bash
cd "C:\Users\Stefan\Downloads\playbox_nextjs"
git init
git add .
git commit -m "Initial commit for PlayBox Next.js"
git branch -M main
git remote add origin https://github.com/stefanutz27/robloxfv2.git
git push -u origin main
```

---

## 📜 License

This project is free to use for personal or educational purposes.
