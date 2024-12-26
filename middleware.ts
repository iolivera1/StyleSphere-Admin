import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();

    const requestPath = req.nextUrl.pathname;
    const isPublicRoute = requestPath.includes('/api/');

    if (!userId && !isPublicRoute) {
        return redirectToSignIn();
    }

    return;
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
