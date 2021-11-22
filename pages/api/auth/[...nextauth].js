// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { FirebaseAdapter } from "@next-auth/firebase-adapter";
// import { initializeApp, getApp, getApps } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyBSW84y5CN5nO58LGRLJq1V3EU97Qk26n8",
//   authDomain: "next-movie-2b9af.firebaseapp.com",
//   projectId: "next-movie-2b9af",
//   storageBucket: "next-movie-2b9af.appspot.com",
//   messagingSenderId: "623738648258",
//   appId: "1:623738648258:web:0a1b319197a761ddc86d5b",
// };

// const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore(app);

// // For more information on each option (and a full list of options) go to
// // https://next-auth.js.org/configuration/options
// export default NextAuth({
//   // https://next-auth.js.org/providers/overview
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
//   adapter: FirebaseAdapter(db),
// });
