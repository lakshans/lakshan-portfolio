import { useTheme } from "@/components/theme-provider";
import { Base } from "@/components/base";
import cloudinaryClient from "@/services/cloudinary";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from '@cloudinary/react';

export default function TechPage() {
  const { theme } = useTheme();
  console.log(theme);
  const gitHubLogoWhite = cloudinaryClient.image('github-logo').addTransformation("t_white").format('auto').quality('auto').resize(auto().gravity(autoGravity()).width(350).height(300));
  // const gitHubLogoBlack = cloudinaryClient.image('github-logo').format('auto').quality('auto').resize(auto().gravity(autoGravity()).width(350).height(300));
  const linkedInLogoWhite = cloudinaryClient.image('linked-in-logo-white');
  // const linkedInLogoBlack = cloudinaryClient.image('linked-in-logo-black');

  return (
    <>
    
    <Base>
      <div className="w-max mt-30 text-2xl font-bold text-white md:mt-80 lg:mt-80">
        <div className="w-50 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 md:w-80 lg:w-100">
          <AdvancedImage className="hover:animate-bounce" onClick={() => window.open("https://github.com/lakshans", "_blank")} cldImg={gitHubLogoWhite} />
          <AdvancedImage className="hover:animate-bounce" onClick={() => window.open("https://www.linkedin.com/in/lakshan-s/", "_blank")} cldImg={linkedInLogoWhite} />
        </div>
      </div>
    </Base>

    </>
  );
}
