import exp from "constants";
import { FC } from "react"

interface PageProps{
    params: {username:string}
}

const Page:FC<PageProps> = ({params}) =>{
    const username = params.username;
    return(<a>{username}</a>)
}

export default Page;
