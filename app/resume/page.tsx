import { createMetadata } from "@/lib/seo";
import { ResumeExperience } from "@/components/pages/animated-pages";
export const metadata=createMetadata({title:"Resume",path:"/resume"});
export default function Page(){return <ResumeExperience/>}
