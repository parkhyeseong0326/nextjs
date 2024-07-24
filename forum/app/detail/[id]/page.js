import { ObjectId } from "mongodb";
import { connectDB } from "@/utils/database";

export default async function Detail() {
    let db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
    console.log(result)

    return (
        <div>
            <h4>상세페이지입니다</h4>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}