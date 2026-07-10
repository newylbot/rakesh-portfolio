import type { Skill } from "@/content/site-config";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

export function SkillCard({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <Card className="h-full">
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{title}</h3>
      <ul className="mt-4 space-y-3">
        {skills.map((s) => (
          <li key={s.name} className="flex items-center justify-between gap-3">
            <span className="text-sm text-text">{s.name}</span>
            <Tag>{s.level}</Tag>
          </li>
        ))}
      </ul>
    </Card>
  );
}
