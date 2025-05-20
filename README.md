# **TaskBoard** : Secured on the Cloud

**TaskBoard** is a Notes App built with the **MERN stack**. It helps users securely store and access their notes **anytime, anywhere** via the cloud.

---

## 🚀 Technologies Used

### 🔹 Frontend

- **ReactJS**
- **Styling**: Tailwind CSS, `clsx`, `class-variance-authority`, `tailwind-merge`, `tailwindcss-animate`
- **UI**: `shadcn-ui`, `radix-ui`, `next-themes`, `react-hot-toast`
- **Validation**: TypeScript, Zod, `use-form`
- **Icons**: `lucide-react`
- **HTTP Client**: `axios`

### 🔹 Backend

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **bcryptjs**
- **jsonwebtoken**

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/abd766/TASKBOARD.git
cd TASKBOARD
```

### 2. Install Dependencies

In the root directory:

```bash
npm run init
```

### 3. Setup Environment Variables

#### 🔸 Backend - `.env` (Inside `Backend` Folder)

```env
JWT_SIGNATURE=your_jwt_secret
MONGO_URI=your_mongo_db_url
FRONTEND_DEV=http://localhost:3000
FRONTEND=your_deployed_frontend_url
```

#### 🔸 Frontend - `.env` (Inside `Frontend` Folder)

```env
VITE_HOST=http://localhost:5000
# Or in production:
# VITE_HOST=your_deployed_backend_url
```

### 4. Start the App

```bash
npm run dev
```

Your app should now be running on:

- **Frontend**: `http://localhost:3000`
- **Backend**: `http://localhost:5000`

---

## ✏️ Update the App

### Common Git Workflow

```bash
git branch -M main
git checkout -b your_feature_branch
# Make changes...
git add .
git commit -m "Your commit message"
git push -u origin your_feature_branch
```

Your changes are now pushed to GitHub.

---

## 🚀 Deploying the App

### 1. Create a Vercel Account

- Go to [Vercel](https://vercel.com)
- Connect your GitHub account
- Grant access to the repository

---

### 🔹 Deploy Frontend

- Click **New Project**
- Select your repository
- Set the **root directory** to `Frontend`
- Set **output directory** to `build`

#### Environment Variables

```env
Name: YOUR_APP_NAME
Branch: main
Root Directory: Frontend
Publish Directory: build
```

- Click **Deploy**
- Copy the frontend **website URL** (needed for backend deployment)

---

### 🔹 Deploy Backend

- Click **New Project**
- Select your repository
- Set the **root directory** to `Backend`

#### Environment Variables

```env
FRONTEND=your_frontend_website_url
FRONTEND_DEV=http://localhost:3000
JWT_SIGNATURE=your_jwt_secret
MONGO_URI=your_mongo_db_url
```

- Click **Deploy**
- Copy the backend **website URL**

---

### 🔹 Update Frontend `.env` on Vercel

- Go to your **Frontend Project** on Vercel
- Add the following environment variable:

```env
VITE_HOST=your_backend_website_url
```

---

## ✅ Your TaskBoard App is Now Live!

Access it using your deployed frontend URL. Happy Note Taking! 📝