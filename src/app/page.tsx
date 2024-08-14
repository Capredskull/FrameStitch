import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import WallFrame from "@/components/WallFrame";
import { ArrowRight, Check,  Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-100">
      {/* hero section of the landing page */}
      <section>
      <MaxWidthWrapper className="pb-20 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 -top-12 hidden lg:block">
              <img src="/Layerslogo.png" className="w-full"/>
            </div>
            <h1 className="relative w-fit tracking-light text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">Make your wall a <span className="text-green-500 px-2">custom</span> experience</h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
            Unleash your creativity with a <span className="font-semibold">custom-crafted</span> Frame. <span className="text-green-500">FrameStitch</span>—where your wall wears what you love."
            </p>
            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-300"/>
                  Millirtary grade, Tough like a tank
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-300"/>
                 30 years print guranteed
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-300"/>
                  All recycled materials
                </li>
              </div>
            </ul>
            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex -space-x-3 ">
                <img  className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100" src="/user1.jpg" alt="user image" />
                <img  className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100" src="/user2.jpg" alt="user image" />
                <img  className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100" src="/user3.jpg" alt="user image" />
                <img  className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100" src="/user4.jpg" alt="user image" />
                <img  className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100" src="/user5.jpg" alt="user image" />
                <img  className="inline-block h-10 w-10 rounded-full ring-2 ring-green-100" src="/user6.jpg" alt="user image" />
              </div>
              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
                <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
                 </div>
                 <p> Over <span className="font-semibold">2000</span> satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
        <div className="relative md:max-w-xl">
          <img src="/yourimage.png" className="absolute w-40 lg:w-52 left-56 lg:-top-36 select-none md:-top-28 hidden sm:block lg:hidden xl:block" />
          <img src="/line.png" className="absolute w-20 -left-3 -bottom-4 select-none" />
          <WallFrame className="w-74" imgSrc="tes-5.jpg"/>
        </div>
        </div>
      </MaxWidthWrapper>
      </section>
      {/* why buy from us section */}
      <section className="bg-slate-100 py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 !leading-tight tracking-tight text-center text-balance text-gray-900 font-bold text-5xl md:text-6xl">what our <span className="relative px-2">customers <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-400"/></span> say {' '}</h2>
          <img src="/Layerslogo.png" className="w-24 order-0 lg:order-2"/>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:mx-w-none lg:grid-cols-2 gap-y-16">
          <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            </div>
            <div className="text-lg leading-8">
              <p>I am so impressed with Framestitch's custom photo frames. <span className="font-semibold text-green-400">The frames are gorgeous</span>, and the images look amazing. The service was fast and reliable, with <span className="font-semibold text-green-400">excellent attention to detail</span>. Highly recommend for anyone wanting to personalize their space!"</p> 
            </div>
            <div className="flex gap-4 mt-2">
              <img className="rounded-full h-12 w-12 object-cover ring-2 ring-green-200" src="/user5.jpg"/>
              <div className="flex flex-col">
                <p className="font-bold">Maria</p>
                <div className="flex items-center text-zinc-600">
                  <Check className="h-5 w-5 stroke-[3px] text-green-400"/>
                  <p className="text-sm">Verified purchase</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            <Star className="h-5 w-5 text-yellow-500 fill-yellow-400"/>
            </div>
            <div className="text-lg leading-8">
              <p>Framestitch provided me with beautiful custom frames that exceeded my expectations.<span className="font-semibold text-green-400">The quality of the prints and frames is top-notch.</span>, The process was easy, and delivery was prompt. These frames have added a personal touch to my home!""</p> 
            </div>
            <div className="flex gap-4 mt-2">
              <img className="rounded-full h-12 w-12 object-cover ring-2 ring-green-200" src="/user3.jpg"/>
              <div className="flex flex-col">
                <p className="font-bold">Edwarodoo</p>
                <div className="flex items-center text-zinc-600">
                  <Check className="h-5 w-5 stroke-[3px] text-green-400"/>
                  <p className="text-sm">Verified purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="pt-16">
      <Reviews/>
      </div>
      </section>
      <section>
      <MaxWidthWrapper className ="py-24">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto mx-w-2xl sm:text-center">
          <h2 className="order-1 mt-2 !leading-tight tracking-tight text-center text-balance text-gray-900 font-bold text-5xl md:text-6xl">Upload your own <span className="relative px-2">custom <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-green-400"/></span> images now {' '}</h2>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
            <img src="arrow.png" className="absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 md:rotate-0 rotate-90 "/>
            <div className="relative h-auto w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl">
            <img src="tes-5.jpg" className="rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full"/>
            </div>
            <WallFrame className="w-60" imgSrc="/tes-5.jpg"/>
          </div>
        </div>
        <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
          <li className="w-fit">
            <Check className="text-green-500 h-5 w-5 inline mr-1.5"/>
            Recycled Material
          </li>
          <li className="w-fit">
            <Check className="text-green-500 h-5 w-5 inline mr-1.5"/>
            Build to last
          </li>
          <li className="w-fit">
            <Check className="text-green-500 h-5 w-5 inline mr-1.5"/>
            100+ frame choice
          </li>
          <li className="w-fit">
            <Check className="text-green-500 h-5 w-5 inline mr-1.5"/>
            Life time warranty
          </li>
          <div className="flex justify-center">
            <Link href="/configure/upload" className={buttonVariants({
              size:"lg",
              className:"mx-auto mt-8"
            })}>
              Create Now <ArrowRight className="h-4 w-4 ml-1.5"/>
            </Link>
          </div>
        </ul>
      </MaxWidthWrapper>
      </section>
     
    </div>
  );
}
