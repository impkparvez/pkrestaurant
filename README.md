# Full Stack RESTAURANT Website - TypeScript, Zustanc, Zod, Stripe

## Folder Structures

### Create `project`

```
mkdir project-name && cd project-name
```

### Create `client` and `server`

```
mkdir client server
```

### Setup `shadcn/ui` for frontend

Go to [Shadcn Installlation](https://ui.shadcn.com/docs/installation), select framework, follow installation process

### Add colors in `index.css`

```
root: {
    --button: #d19254;
    --hover-button: #d18c47;
}
```

## Authentication UI

Create `src/auth` and `src/admin` folder

- `auth` contains login, signup pages

### Create Login and Signup page

### Setup Zod for Form validation

Create `schema/userSchema` for zod

```
import { z } from "zod";

export const userSignupSchema = z.object({
  id: z.string(),
  fullname: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  contact: z.string().min(10, "Contact number must be at least 10 digits"),
});

export type SignupInputTypes = z.infer<typeof userSignupSchema>;
```
