// import NextAuth from "next-auth";
// // import FacebookProvider from "next-auth/providers/facebook";
// // import GoogleProvider from "next-auth/providers/google";
// // import EmailProvider from "next-auth/providers/email";
// import Providers from "next-auth/providers";

// export default NextAuth({
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
// });

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);

// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// const options = {
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//   ],
// };

// export default (req, res) => NextAuth(req, res, options);

// import NextAuth from "next-auth"

// export default NextAuth({
//   ...
// })
