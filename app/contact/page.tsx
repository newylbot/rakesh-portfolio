import { createMetadata } from "@/lib/seo";
import { ContactExperience } from "@/components/pages/animated-pages";
export const metadata=createMetadata({title:"Contact",path:"/contact"});
export default function Page(){return <ContactExperience/>}
