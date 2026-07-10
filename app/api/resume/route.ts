import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { siteConfig } from "@/content/site-config";

export const runtime="nodejs";

export async function GET(){
  const pdf=await PDFDocument.create(); const regular=await pdf.embedFont(StandardFonts.Helvetica); const bold=await pdf.embedFont(StandardFonts.HelveticaBold);
  const page=pdf.addPage([595.28,841.89]); const {height}=page.getSize(); let y=height-48; const margin=48; const width=499;
  const draw=(text:string,size=9,font=regular,color=rgb(.16,.18,.22),gap=size+4)=>{page.drawText(text,{x:margin,y,size,font,color});y-=gap};
  const wrap=(text:string,size=8.6,font=regular,indent=0)=>{const words=text.replace(/–/g,"-").split(/\s+/);let line="";for(const word of words){const next=line?`${line} ${word}`:word;if(font.widthOfTextAtSize(next,size)>width-indent){page.drawText(line,{x:margin+indent,y,size,font,color:rgb(.22,.24,.28)});y-=size+3;line=word}else line=next}if(line){page.drawText(line,{x:margin+indent,y,size,font,color:rgb(.22,.24,.28)});y-=size+4}};
  const rule=()=>{page.drawLine({start:{x:margin,y:y+2},end:{x:margin+width,y:y+2},thickness:.7,color:rgb(.9,.35,.18)});y-=7};
  const section=(title:string)=>{y-=3;draw(title.toUpperCase(),10,bold,rgb(.9,.3,.12),14);rule()};
  draw(siteConfig.person.name,22,bold,rgb(.09,.12,.18),27); draw(siteConfig.person.role,10,bold,rgb(.28,.31,.36),16); draw(`${siteConfig.person.phone}  |  ${siteConfig.person.email}  |  ${siteConfig.person.location}`,8.5,regular,rgb(.38,.4,.45),15);
  section("Summary");wrap(siteConfig.person.bio,9);
  section("Skills");
  const skillLines=["Industrial Automation: Siemens WinCC, WinCC Flexible, TIA Portal, HMI Design, Alarm Configuration","Quality Control: Dimensional Inspection, Vernier Caliper, Micrometer, Hardness Testing, Surface Defect Analysis","Electrical Systems: Transformers, Induction Motors, Control Panels, Circuit Analysis","Software: MATLAB, NI Multisim, MS Excel, MS Word, C++, Java, Python"];
  skillLines.forEach(s=>wrap(s,8.3,bold));
  section("Experience");
  siteConfig.experience.filter(e=>e.type!=="Education").forEach(e=>{draw(`${e.role}  |  ${e.period}`,9,bold,rgb(.11,.14,.2),13);draw(`${e.company}, ${e.location}`,8,regular,rgb(.42,.43,.47),12);e.summary.forEach(s=>wrap(`• ${s}`,8.1,regular,8));y-=3});
  section("Projects");siteConfig.projects.slice(1).forEach(p=>{draw(`${p.title}  |  ${p.stack.join(", ")}`,8.8,bold,rgb(.11,.14,.2),13);wrap(`• ${p.oneLine}`,8.1,regular,8)});
  section("Honors & Certifications");siteConfig.honors.forEach(h=>wrap(`• ${h}`,8.1,regular,8));
  section("Education");draw(`${siteConfig.education.degree}  |  Nov 2022 - Jun 2026`,8.8,bold,rgb(.11,.14,.2),13);draw(`${siteConfig.education.institution}, ${siteConfig.education.location}  |  CGPA ${siteConfig.education.cgpa}`,8,regular,rgb(.4,.42,.46),12);draw(`Higher Secondary: ${siteConfig.education.higherSecondary}`,8,regular,rgb(.4,.42,.46),12);draw(`High School: ${siteConfig.education.highSchool}  |  70%`,8,regular,rgb(.4,.42,.46),12);
  const bytes=await pdf.save(); return new Response(Buffer.from(bytes),{headers:{"Content-Type":"application/pdf","Content-Disposition":"attachment; filename=Rakesh_Kumar_Behera-Resume.pdf","Cache-Control":"public, max-age=3600"}});
}
