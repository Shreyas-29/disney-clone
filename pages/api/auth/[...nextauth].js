import { FirestoreAdapter } from '@next-auth/firebase-adapter';
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    adapter: FirestoreAdapter(firebaseConfig)
}

export default NextAuth(authOptions);

// log