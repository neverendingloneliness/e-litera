import { fadeInAnimationVariant } from "@/components/animation/variant";
import { FEATURESLIST } from "@/constant/landing/LANDINGCONSTANT";
import { animate, motion } from "framer-motion";
import React from "react";

type FeaturesProps = {
    title:string,
    subtitle:string,
    Icon:any,
    index:number
}

const HoverFeaturesCards = () => {
  return (
    <div className="p-5 px-32 flex flex-col gap-16 items-center ">
      <p className="text-4xl font-semibold ">Features</p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {FEATURESLIST.map((features, index ) => (
            <Features key={index}
              index={index}
              title={features.title}
              subtitle={features.description}
              Icon={features.icon}
            />
        ))}
      </div>
    </div>
  )
}

const Features : React.FC<FeaturesProps> = ({ title, subtitle, Icon, index }) => {
  return (
    <motion.div variants={fadeInAnimationVariant} initial="initial" whileInView={"animate"} viewport={{once:false, }} custom={index}
      className=" w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-500 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </motion.div>
  )
}

export default HoverFeaturesCards;