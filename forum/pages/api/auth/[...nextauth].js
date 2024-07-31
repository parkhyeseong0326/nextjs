import { connectDB } from "@/utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
    providers : [
        GithubProvider({
            clientId : 'Ov23liRCTRC07WMi02Vw',
            clientSecret : '58dd4e290e0d889d567b08729680fb22b9fe2db9'

        }),
    ],
    secret : 'qwer1234',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);