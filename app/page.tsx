import { createMetadata } from "@/lib/seo";
import { AnimatedHome } from "@/components/home/animated-home";
import { HomeIdentity } from "@/components/home/home-identity";

export const metadata = createMetadata();

export default function HomePage() {
  return (
    <div className="relative">
      <HomeIdentity />
      <AnimatedHome />
    </div>
  );
}
