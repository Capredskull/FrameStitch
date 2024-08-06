import { cn } from "@/lib/utils"
import { HTMLAttributes, ReactNode } from "react"
interface WallProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string,
    dark?:boolean
}

const WallFrame = ({imgSrc,className,dark=false,...props}:WallProps)=>{
    return (<div className={cn(
    "relative pointer-events-none z-50 overflow-hidden",
    className)} {...props} >
    <img src={dark?"/darkFrame.png":"/whiteFrame.png"} className="pointer-events-none z-50 select-none" alt="wall image"/>
    <div className="absolute -z-10 inset-0">
        <img className="object-cover "src={imgSrc} alt="overlayed image"/>
    </div>
    </div>)

}
export default WallFrame