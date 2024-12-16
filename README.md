# Todo List Frontend

A modern, responsive Todo List application built with Next.js 15+ (App Router), TypeScript, and Tailwind CSS, featuring a robust component library and real-time task management.

I went ahead and tried to use the server-side features, such as actions this time around.

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd todo-frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## 📋 Prerequisites

- Node.js 18+
- npm or yarn
- Running instance of the Todo API (backend)

## 🛠️ Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create `.env.local`:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🧱 Project Structure

```
src/
├── app/              # App Router pages and layouts
├── components/       # Shared UI components
├── forms/           # Form components
├── lib/             # Utilities and shared functions
└── styles/          # Global styles and Tailwind config
```

## 🎨 Component Library

Our components are built using a combination of:

- Tailwind CSS for styling
- class-variance-authority for component variants
- lucide-react for icons
- shadcn/ui components as a base

### Key Components

- `Button` - Base button component with multiple variants
- `ColorPicker` - Custom color selection component
- `Task` - Task display component with interactive features
- `TaskList` - Container component for task management

## 🔧 Development Tools

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for styling

## 🤝 Contributing

We welcome contributions! Here are our current priorities:

### 1. Form Validation Enhancement

- Implement Zod for form validation
- Create reusable validation schemas
- Add error handling components

```typescript
// Example Zod schema implementation
import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  color: z.string().min(1, "Color is required"),
  completed: z.boolean().default(false),
});
```

### 2. Component System Enhancement

- Add variants to existing components using class-variance-authority
- Create a comprehensive set of component states.

I didn't really flesh these out, but these could be expanded upon.

```typescript
// Example Button variant enhancement
const buttonVariants = cva("rounded-md transition-colors", {
  variants: {
    intent: {
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-500 text-white hover:bg-gray-600",
      danger: "bg-red-500 text-white hover:bg-red-600",
    },
    size: {
      small: "text-sm px-2 py-1",
      medium: "text-base px-4 py-2",
      large: "text-lg px-6 py-3",
    },
    outline: {
      true: "bg-transparent border-2",
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      outline: true,
      className: "border-blue-500 text-blue-500 hover:bg-blue-50",
    },
    // Add more compound variants
  ],
});
```

### 3. Asset Organization

- Move SVG components to dedicated assets folder
- Create an icon system
- Implement SVG optimization

```
assets/
├── icons/
│   ├── index.ts
│   ├── ClipboardIcon.tsx
│   ├── CompletedIcon.tsx
│   └── ...
├── illustrations/
└── logos/
```

### 4. Storybook Integration

- Set up Storybook for component development
- Create stories for all components
- Add documentation and examples

```bash
# Setup Storybook
npx storybook init

# Create component story
# components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};
```

### 5. Testing Infrastructure

- Set up Jest and React Testing Library
- Add component tests
- Implement E2E tests with Cypress

```typescript
// Example test setup
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
```

### 6. Additional Enhancements

- Add animations and transitions
- Eager UI updates
- Caching
- Create loading states and skeletons
- Implement error boundaries
- Improve accessibility

## 🔄 Development Workflow

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
