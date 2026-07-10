import { createMetadata } from "@/lib/seo";
import { NowExperience } from "@/components/pages/animated-pages";
export const metadata=createMetadata({title:"Now",path:"/now"});
export default function Page(){return <NowExperience/>}
