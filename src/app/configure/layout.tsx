import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ReactNode } from "react";

const layout = ({children}:{children:ReactNode})=>{
    return(
        <MaxWidthWrapper className="flex flex-1 flex-col p-4">
            {children}
        </MaxWidthWrapper>
    )
}
export default layout