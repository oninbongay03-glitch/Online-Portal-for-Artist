# NextAuth Google Provider Setup Guide

## ✅ Completed Steps

1. ✅ Installed `next-auth` package
2. ✅ Created NextAuth configuration in `src/lib/auth.ts`
3. ✅ Set up API route handler in `src/app/api/auth/[...nextauth]/route.ts`
4. ✅ Added TypeScript type definitions in `src/types/next-auth.d.ts`

## 🔧 Required Configuration

### Step 1: Set Up Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API"
   - Click "Enable"
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs:
     - For development: `http://localhost:3000/api/auth/callback/google`
     - For production: `https://yourdomain.com/api/auth/callback/google`
   - Click "Create"
   - Copy the Client ID and Client Secret

### Step 2: Configure Environment Variables

Add the following variables to your `.env.local` file:

```env
# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_here

# For production, use your actual domain:
# NEXTAUTH_URL=https://yourdomain.com
```

**Generate NEXTAUTH_SECRET:**
Run this command in your terminal:
```bash
openssl rand -base64 32
```
Or use this Node.js command:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Step 3: Update Your Application

#### Using NextAuth in Your Components

**Client Component Example:**
```tsx
'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <button onClick={() => signIn('google')}>
      Sign in with Google
    </button>
  );
}
```

**Server Component Example:**
```tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function ServerComponent() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Not authenticated</div>;
  }

  return <div>Welcome {session.user?.name}</div>;
}
```

#### Wrap Your App with SessionProvider

Update your root layout to include the SessionProvider:

```tsx
// src/app/layout.tsx
import { SessionProvider } from 'next-auth/react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
```

## 📁 Files Created/Modified

- ✅ `src/lib/auth.ts` - NextAuth configuration with Google provider
- ✅ `src/app/api/auth/[...nextauth]/route.ts` - API route handlers
- ✅ `src/types/next-auth.d.ts` - TypeScript type definitions
- ✅ `package.json` - Added next-auth dependency

## 🔐 Authentication Flow

1. User clicks "Sign in with Google"
2. User is redirected to Google OAuth consent screen
3. After approval, Google redirects back to your app
4. NextAuth creates a session with user information
5. User is authenticated and can access protected routes

## 🛡️ Protecting Routes

**Middleware Protection (Recommended):**
Create `middleware.ts` in your root directory:

```typescript
export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/profile/:path*",
    "/api/protected/:path*"
  ]
};
```

**API Route Protection:**
```typescript
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ data: 'Protected data' });
}
```

## 🧪 Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to: `http://localhost:3000/api/auth/signin`

3. Click "Sign in with Google" and test the authentication flow

## 📚 Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth Setup Guide](https://next-auth.js.org/providers/google)
- [NextAuth.js with App Router](https://next-auth.js.org/configuration/nextjs#in-app-router)

## ⚠️ Important Notes

- Never commit your `.env.local` file to version control
- Use different OAuth credentials for development and production
- Regularly rotate your `NEXTAUTH_SECRET` in production
- Consider implementing additional security measures like CSRF protection
- The current setup uses JWT sessions; consider database sessions for production

## ✅ Login Page Fixes Applied

### Issues Fixed:
1. **Incorrect Import**: Changed from server action `login()` to client-side `signIn()` from next-auth/react
2. **Button Functionality**: Updated Google sign-in button to use proper NextAuth `signIn('google', { callbackUrl: '/' })`
3. **CSS Error**: Fixed malformed background URL class (removed extra `)`)
4. **Enhanced UX**: Added hover effects and better styling to the Google button

### Updated Files:
- ✅ `src/app/(auth)/login/page.tsx` - Fixed Google authentication button
- ✅ `src/app/components/AuthButton.tsx` - Created reusable auth component

## 🐛 Troubleshooting

**Issue: "Configuration error"**
- Ensure all environment variables are set correctly
- Restart your development server after adding env variables

**Issue: "Redirect URI mismatch"**
- Check that your Google OAuth redirect URIs match exactly
- Include the protocol (http:// or https://)

**Issue: "Session not persisting"**
- Verify NEXTAUTH_SECRET is set
- Check that cookies are enabled in your browser
- Ensure NEXTAUTH_URL matches your current domain

**Issue: "signIn is not a function"**
- Make sure you're importing from "next-auth/react" in client components
- Ensure SessionProvider is wrapping your app (already set up in Providers.tsx)

**Issue: "Server action error"**
- Don't use server actions for NextAuth signIn/signOut
- Use client-side functions directly in client components

## 🎉 Next Steps

1. Add environment variables to `.env.local`
2. Set up Google OAuth credentials
3. Test the authentication flow
4. Integrate with your existing user system
5. Add protected routes and pages
6. Customize the sign-in page (optional)
