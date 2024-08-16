"use client"

import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { useUploadThing } from "@/lib/uploadthing"
import { cn } from "@/lib/utils"
import { Image, Loader2, MousePointerSquareDashed, MousePointerSquareDashedIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"
import Dropzone, {FileRejection} from "react-dropzone"
import { start } from "repl"

const uploadPage = ()=>{
    const {toast} =useToast()
    const [isDragOver, setIsDragOver] = useState<boolean>(false)
    const router = useRouter()
    const {startUpload, isUploading} = useUploadThing("imageUploader", {
        onClientUploadComplete:([data])=>{
            const configId = data?.serverData?.configId
            startTransition(()=>{
                router.push(`/configure/design?id=${configId}`)
            }
            )

        },
        onUploadProgress(p) {
            setUploadProgress(p)
        }, 
    })

    const [isPending,startTransition] = useTransition()
    const [uploadProgress,setUploadProgress] = useState<number>(0)

    const onDropAccepted = (acceptedFiles:File[])=>{
        console.log("fucking working")
        startUpload(acceptedFiles,{configId:undefined})
        setIsDragOver(false)

    }
    const onDropRejected = (rejectedFiles:FileRejection[])=>{
        const[file] = rejectedFiles
        setIsDragOver(false)
        toast({
            title: `${file.file.type} type is not supported`,
            description: "Please select a png,jpg or jepg file",
            variant: "destructive"
        })

    }

        return(
        <div className={cn("relative h-full w-full flex-1 my-l6 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-grey-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
            {"ring-blue-900/25 bg-blue-900/10" : isDragOver , }
        )}>
            <div className="relative flex flex-col items-center justify-center w-full">
                <Dropzone onDropRejected={onDropRejected} onDropAccepted={onDropAccepted} accept={{
                    "image/png":[".png"],
                    "image/jpeg":[".jpeg"],
                    "image/jpg":[".jpg"]
                }}
                onDragEnter={()=>setIsDragOver(true)}
                onDragLeave={()=>setIsDragOver(false)}
                >
                    {({getRootProps,getInputProps})=>(
                        <div className="h-full w-full flex-1 flex flex-col items-center justify-center"
                        {...getRootProps()}>
                            <input {...getInputProps()}/>
                            {
                                isDragOver?(
                                    <MousePointerSquareDashed className="h-6 w-6 text-zinc-200 mb-2"/>
                                ) : isUploading || isPending ?(
                                   <Loader2 className="animate-spin h-6 w-6 text-zinc-600 mb-2"/>
                                ):(
                                    <Image className="h-6 w-6 text-zinc-600" />
                                )
                            }
                            <div className="flex flex-col items-center mb-2 text-sm text-zinc-700">
                                {
                                 isUploading ?( <div className="flex flex-col items-center">
                                    <p>uploading....</p>
                                    <Progress 
                                    value={uploadProgress}
                                    className="mt-2 w-40 h-2 bg-gray-300"/>
                                 </div>):
                                 isPending ?( <div className="flex flex-col items-center">
                                    <p>Redirecting, please wait.....</p>
                                 </div>):
                                 isDragOver ? 
                                 <p><span className="font-semibold">Upload files here</span></p>:
                                   ( <p><span>click to upload </span> 
                                   or  Drag to upload
                                   </p>) }
                            </div>
                            {isPending?null: (<p className="text-xs text-zinc-500">PNG JPG OR JEPG</p>)}
                        </div>

                    )}

                </Dropzone>

            </div>

        </div>
    )
 }
 export default uploadPage