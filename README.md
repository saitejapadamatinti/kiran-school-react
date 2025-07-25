# LCA Optimization Review

A lightweight Next.js 15 (App Router) + React 19 + Tailwind CSS 4 demo that showcases a Human-in-the-Loop (HiL) review interface for AI-generated Life Cycle Assessment (LCA) optimization suggestions. Engineers can compare Original vs AI-Optimized carbon impact values, inspect the reasoning, and Approve or Reject the suggestion.

## ✨ Features

- Human-in-the-Loop UI for sustainability optimization decisions
- Clear comparison of Original vs Optimized LCA metrics with % reduction
- Accessible feedback messages (aria-live, focus management ready)
- Responsive, mobile-friendly layout using Tailwind utilities and clamp() typography
- Local mock JSON data (no backend required) – easily swappable for an API route
- Simple action simulation with approve/reject logic & transient status messaging
- Ready for deployment and testing

## 🧱 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** React 19 (JavaScript)
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint 9 with eslint-config-next

## 📂 Project Structure

```
saiteja-padamatinti-wta-test/
├─ app/
│  ├─ page.js                  # Redirects / → /LCAOptimizationReview
│  └─ LCAOptimizationReview/
│     └─ page.jsx              # Renders the component
├─ components/
│  ├─ LCAOptimizationReview.jsx
│  └─ icons/
│     ├─ IconSpinner.jsx
│     ├─ IconCheck.jsx
│     └─ IconX.jsx
├─ public/mock/lca-optimization.json  # Mock data source
├─ styles/globals.css          # Tailwind base
├─ next.config.js
├─ package.json
└─ README.md
```

## 🚀 Quick Start

### 1. Prerequisites

- Node.js v20+ (LTS recommended)

### 2. Clone the Repository

```bash
git clone https://github.com/<your-username>/saiteja-padamatinti-wta-test.git
cd saiteja-padamatinti-wta-test
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) – it auto-redirects to `/LCAOptimizationReview`.

### 5. Build for Production

```bash
npm run build
npm start
```

The app serves at [http://localhost:3000](http://localhost:3000) in production mode.

### 6. Lint (Optional)

```bash
npm run lint
```

## 🔄 Redirect Setup

The root route redirects `/` to `/LCAOptimizationReview`:

```javascript
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/LCAOptimizationReview');
}
```

## 📊 Mock Data

**public/mock/lca-optimization.json:**

```json
{
  "status": "success",
  "statusCode": 200,
  "message": "Data fetched successfully",
  "data": {
    "originalLCA": 150,
    "optimizedLCA": 120,
    "unit": "kg CO2e",
    "optimizationReason": "Replaced foam type X with foam type Y, reducing material emissions by 20%. Also optimized wall thickness while maintaining structural integrity."
  }
}
```

## 🗂️ Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development: `npm run dev`
4. Visit: [http://localhost:3000/LCAOptimizationReview](http://localhost:3000/LCAOptimizationReview)

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
