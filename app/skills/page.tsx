import { createMetadata } from "@/lib/seo";
import { SkillsExperience } from "@/components/pages/animated-pages";
export const metadata=createMetadata({title:"Skills",path:"/skills"});
export default function Page(){return <SkillsExperience/>}
