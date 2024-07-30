import { ObjectId } from "mongodb";
import { connectDB } from "@/utils/database";

export default async function handler(요청,응답) {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    let time = new Data()

    console.log(time);
    if (요청.method == 'GET') {
        응답.status(200).json(time);
    }
    if (요청.method == 'POST') {
        응답.status(200).json({name : 'POST입니다.'});
    }
    
    
}