import { createMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { SelectedWork } from "@/components/sections/selected-work";
import { EngineeringApproach } from "@/components/sections/engineering-approach";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { SkillsPreview } from "@/components/sections/skills-preview";
import { Proof } from "@/components/sections/proof";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = createMetadata();

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <SelectedWork />
      <EngineeringApproach />
      <ExperiencePreview />
      <SkillsPreview />
      <Proof />
      <CtaBand />
    </>
  );
}
