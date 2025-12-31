# Next-Nest Documentation

This is the official documentation repository for **Next-Nest**, a premium full-stack starter kit designed for speed, security, and developer joy. This repo contains all the guides, API references, and tutorials for Next-Nest.

![Next-Nest Banner](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070)

## 🌟 About Next-Nest

Next-Nest is a production-ready boilerplate that combines the power of **Next.js 15** (Frontend) and **NestJS** (Backend) with end-to-end type safety.

-   **Next.js 15**: App Router, Tailwind CSS 4, and Framer Motion.
-   **NestJS**: Robust backend architecture with Prisma ORM.
-   **BetterAuth**: Pre-configured authentication logic.
-   **Fumadocs**: This documentation portal you are looking at!

---

## Running the Documentation Locally

If you want to contribute to the docs or run them locally:

### 1. Clone this repository

```bash
git clone https://github.com/Deveripon/starter-kit-doc.git
cd starter-kit-doc
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
# or
bun install
```

### 3. Start the Docs Server

```bash
npm run dev
```

The documentation will be available at [http://localhost:3000](http://localhost:3000).

---

## 📂 Documentation Structure

The content is organized in the `content/docs` directory using MDX:

```text
├── content/docs/
│   ├── index.mdx          # Home/Introduction
│   ├── essentials/        # Installation & Setup guides
│   ├── features/          # Core feature documentation
│   └── meta.json          # Navigation order and icons
```

## 📝 How to Contribute to the Docs

1. **Create a New Page**: Add a `.mdx` file in `content/docs`.
2. **Add Frontmatter**:
    ```markdown
    ---
    title: Your Guide Title
    description: Brief summary of the guide
    icon: BookOpen
    ---
    ```
3. **Update Navigation**: If adding a new folder, update the `meta.json` within that folder to control the sidebar order.

## 🎨 Branding & Theme

The docs use **Fumadocs UI** and **Tailwind CSS 4**.

-   **Branding**: Change the site title and logo in `lib/layout.shared.tsx`.
-   **Styling**: All global styles are in `app/globals.css`.

---

## 🚢 Deployment

This documentation is optimized for deployment on **Vercel**:

1. Connect your GitHub repository to Vercel.
2. Vercel will automatically detect the Next.js project.
3. Use `npm run build` as the build command.

## 📄 License

The Next-Nest Documentation is licensed under the MIT License.

---

Built with ❤️ by [Deveripon](https://github.com/Deveripon)



# starter-kit-doc
