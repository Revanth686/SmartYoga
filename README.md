# SmartYoga - Smart Yoga Products E-commerce Platform

SmartYoga is a e-commerce website for innovative smart yoga products, built with Nextjs.

## 🚀 Features

- Server-side rendered product catalog
- Dynamic blog section
- Responsive admin dashboard
- Real-time analytics
- Mobile-first design
- Dark mode support

## 🛠️ Tech Stack

- **Framework:** Nextjs
- **Styling:** Tailwindcss with shadcnUi components
- **Database:** PostgreSQL with Prisma
- **State Management:** React Hooks
- **Charts:** Recharts

## 🌟 Next.js Features Utilized

- **SSR:** Optimized performance with server-side rendering for product and blog post pages
- **API Routes:** App router based structure for handling data operations
- **Metadata API:** SEO optimization
- **Image Optimization:** Used Nextjs Image component
- **Dynamic Imports:** Lazy loading and dynamic loading for optimization

## 💡 Development Approach

1. **Architecture Planning**

   - Modular components
   - Reusable UI components

2. **Database Schema**

   - Products
   - Blog posts
   - Analytics
   - Admin users

3. **Performance Optimization**
   - Server-side rendering for data-heavy pages
   - Image optimization
   - Code splitting
   - Dynamic imports for heavy components

## 🎯 Challenges & Solutions

### 1. 3D Model Integration

**Challenge:** Implementing an interactive 3D model viewer with proper lighting and controls.

**Solution:**

- Used React Three Fiber for React integration
- Implemented custom controls for model interaction
- Added proper lighting and environment mapping
- Optimized performance with suspense and dynamic loading

### 2. SSR with Interactive Components

**Challenge:** Balancing SSR features with client-side interactivity.

**Solution:**

- Implemented dynamic imports for client components
- Maintained SEO benefits with server components

### 3. Responsive Design with Complex UI

**Challenge:** Creating a consistent experience across devices.

**Solution:**

- Mobile-first approach
- Shadcn ui components
- Tailwindcss breakpoints
- Conditional rendering for mobile/desktop

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Revanth686/SmartYoga.git

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

## 🔧 Environment Variables

```env
DATABASE_URL="postgresql://..."
```

## 📚 Project Structure

```
smart-yoga/
├── app/
│   ├── admin/           # Admin dashboard
│   ├── blog/            # Blog section
│   └── products/        # Product catalog
├── components/          # Reusable components
│   ├── ui/             # UI components
│   └── 3d/             # 3D model components
├── lib/                 # Utility functions
├── prisma/             # Database schema
└── public/             # Static assets
```
