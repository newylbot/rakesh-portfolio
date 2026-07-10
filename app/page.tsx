import { createMetadata } from "@/lib/seo";
import { AnimatedHome } from "@/components/home/animated-home";

export const metadata = createMetadata();

export default function HomePage() {
  return <AnimatedHome />;
}
