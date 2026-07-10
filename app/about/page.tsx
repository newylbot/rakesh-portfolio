import { createMetadata } from "@/lib/seo";
import { AboutExperience } from "@/components/pages/animated-pages";
export const metadata=createMetadata({title:"About",path:"/about"});
export default function Page(){return <AboutExperience/>}
