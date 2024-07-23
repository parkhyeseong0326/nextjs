'use client'
import { useState } from "react"
export default function List() {
    let 상품 = ['Tomatoes','Pasta','Pizza']
    let [수량,수량변경] = useState(0);
    return(
        <div>
            <h4 className="title">상품목록</h4>
            {
                상품.map((a,i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`}  className="food-img"></img>
                        <h4>{a} 14000원</h4>
                        <sapn>1 </sapn>
                        <button onClick={()=>{console.log(1)}}>+</button>
                        </div>
                    )
                })
            }
        </div>
    )
}