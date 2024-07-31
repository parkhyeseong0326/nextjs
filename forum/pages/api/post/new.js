import {connectDB} from "/utils/database.js";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청,응답) {  
    let session = await getServerSession(요청,음답,authOptions);
    if(session) {
        요청.body.auther = session.user.email
    }
    if (요청.method == 'POST') {
        if (요청.body.title == '') {
            return 응답.status(500).json('제목을 작성하세요')
        }
        try {
            let db = (await connectDB).db('forum');
            let result = db.collection('post').insertOne(요청.body)
            응답.redirect(302,'/list');
        } catch (error) {
            console.log("DB에러 발생")
        }
        
    }
}