import  Link  from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

//!TODO:create a custom login and signup page

const Navbar = async ()=>{
    const {getUser}= getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    return(<nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
            <Link href='/' className='flex z-40 font-semibold'>
            Frame<span className='text-green-600'>Stitch</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user?(
                <>
                <Link href="/api/auth/logout" className={buttonVariants({size:'sm',variant:'ghost', className:'hover:bg-green-500'})}>
                signout
                </Link>
               {isAdmin?<Link href="/api/auth/logout" className={buttonVariants({size:'sm',variant:'ghost',className:'hover:bg-green-500'})}>
                DashBoard
                </Link>:null} 
                <Link href="/configure/upload" className={buttonVariants({size:'sm',className:'hidden sm:flex items-center gap-1  hover:bg-green-500'})}>
                Create Frame
                <ArrowRight className="h-5 w-5 ml-1.5"/>
                </Link>
                </>
            ):<>
            <Link href="/api/auth/register" className={buttonVariants({size:'sm',variant:'ghost', className:'hover:bg-green-500'})}>
                SignUp
                </Link>
              <Link href="/api/auth/login" className={buttonVariants({size:'sm',variant:'ghost', className:'hover:bg-green500'})}>
                Login
                </Link>
                <div className="h-8 w-px bg-zinc-400 hidden sm:block"/>
                <Link href="/configure/upload" className={buttonVariants({size:'sm',className:'hidden sm:flex items-center gap-1 hover:bg-green-500'})}>
                Create Frame
                <ArrowRight className="h-5 w-5 ml-1.5"/>
                </Link>

            </>}

          </div>

            </div>
        </MaxWidthWrapper>
    </nav>)
}
export default Navbar