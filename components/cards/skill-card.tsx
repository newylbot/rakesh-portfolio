import type { Skill } from "@/content/site-config";
import { Card } from "@/components/ui/card";

export function SkillCard({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <Card className="h-full">
      <h3 className="font-display text-h3 font-semibold text-text">{title}</h3>
      <ul className="mt-4 space-y-3">
        {skills.map((s) => (
          <li key={s.name} className="flex items-center justify-between gap-3 border-b border-border pb-2 last:border-0">
            <span className="text-sm text-text">{s.name}</span>
            <span className="flex-none font-mono text-xs uppercase tracking-wide text-text-muted">{s.level}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
