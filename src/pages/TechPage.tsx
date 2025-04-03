import { useTheme } from "@/components/theme-provider";
import { Base } from "@/components/base";
import cloudinaryClient from "@/services/cloudinary";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from '@cloudinary/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router";

const techProjects = [
  {
    id: "item-1",
    title: "SX Network",
    link: "https://sx.bet",
    content: "Leading the technical design and development of the SX Network app and infra.",
    badges: ["Node.js", "Typescript", "AWS", "Docker", "Redis"]
  },
  {
    id: "item-2",
    title: "Better for Markham",
    link: "https://betterformarkham.ca",
    content: "Designed and deployed a campaign site for Jagbir Dosanjh, running for MPP of Markham-Unionville.",
    badges: ["React", "Typescript", "Digital Ocean"]
  },  
  {
    id: "item-3",
    title: "VMS Weddings (in-progress)",
    link: "https://vmsweddings.ca",
    content: "Building a wedding planning platform: enabling admin, wedding couples, and wedding guests to seemlessly interact.",
    badges: ["Node.js", "Typescript", "Supabase", "Cloudinary", "Digital Ocean"]
  },
];

export default function TechPage() {
  const { theme } = useTheme();
  console.log(theme);
  const gitHubLogoWhite = cloudinaryClient.image('github-logo').addTransformation("t_white").format('auto').quality('auto').resize(auto().gravity(autoGravity()).width(350).height(300));
  const linkedInLogoWhite = cloudinaryClient.image('linked-in-logo-white');

  return (
    <>
    
    <Base>
      <div className="w-max">
        <div className="w-40 grid grid-cols-2 gap-10 mt-5 md:grid-cols-2 md:w-45 lg:w-50">
          <AdvancedImage className="hover:animate-bounce" onClick={() => window.open("https://github.com/lakshans", "_blank")} cldImg={gitHubLogoWhite} />
          <AdvancedImage className="hover:animate-bounce" onClick={() => window.open("https://www.linkedin.com/in/lakshan-s/", "_blank")} cldImg={linkedInLogoWhite} />
        </div>
      </div>
      <Separator className="my-10" decorative/>
      <div className="w-90 text-white md:w-120 lg:w-180">
        {techProjects.map((item) => (
          <Accordion type="single" collapsible className="">
            <AccordionItem value={item.id}>
            <AccordionTrigger className="accordian-trigger flex items-center gap-2 p-2">
              <ChevronDownIcon className="accordian-chevron" aria-hidden />
              <p className="text-md font-bold md:text-lg lg:text-xl">{item.title}</p>
            </AccordionTrigger>
            <AccordionContent className="p-2">
              <div className="flex flex-col text-left gap-2">
                {
                  item.link && (
                    <Link className="underline text-blue-400 text-sm" to={item.link} target="_blank">{item.link}</Link>
                  )
                }
                {item.content}
              </div>
            </AccordionContent>
            <div className="flex flex-wrap gap-2">
              {item.badges?.map((badge) => (
                <Badge className="text-white bg-yellow-600" key={badge}>{badge}</Badge>
              ))}
            </div>
          </AccordionItem>
          <Separator className="my-5" decorative/>
        </Accordion>
      ))}
      </div>
    </Base>

    </>
  );
}
