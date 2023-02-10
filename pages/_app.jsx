import '@/styles/globals.css'
import Header from '@/components/Header'
import { auth, db } from '@/firebase'
import { SessionProvider } from "next-auth/react"
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Loading from '@/components/Loading';

export default function App({
    Component,
    pageProps: { session, ...pageProps }
}) {

    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            db.collection('users').doc(user.uid).set({
                name: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }, { merge: true });
        }
    }, [user]);

    if (loading) return <Loading />;
    // if (!user) return <Hero />;
    
    return (
        <SessionProvider session={session}>
            {/* pass here loading state and while loading use skeleton loader */}
            <Header />
            <Component {...pageProps} user={user} />
        </SessionProvider>
    )
}