import { Base } from "@/components/base";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import cloudinaryClient from "../services/cloudinary";
import { AdvancedImage } from '@cloudinary/react';
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { auto } from "@cloudinary/url-gen/actions/resize";
import useWindowDimensions from "@/hooks/windowDimensionsHook";

export default function PhotographyPage() {
  const { width } = useWindowDimensions();

  const imageObjs = [
    { image: cloudinaryClient.image("portfolio-budapest-bw").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
      orientation: "portrait"
    },
    { image: cloudinaryClient.image("portfolio-budapest-bridge").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
      orientation: "portrait"
    },
    { image: cloudinaryClient.image("portfolio-vienna-garden").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
      orientation: "portrait"
    },
    { image: cloudinaryClient.image("portfolio-couple").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
      orientation: "portrait"
    },
    { image: cloudinaryClient.image("portfolio-budapest-bridge-sunset").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
      orientation: "portrait"
    },
    { image: cloudinaryClient.image("portfolio-prague-street").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
      orientation: "portrait"
    },
    
  ];

  return (
    <>
    
    <Base verticalCenter={true}>
      <Carousel opts={{ align: "start", loop: true }} className="w-85 md:w-160 lg:w-220 xl:w-290 2xl:w-350">
        <CarouselContent>
          {imageObjs.map((imageObj) => {
            const image = imageObj.image;
            return (
              <CarouselItem className="lg:basis-1/3">
                  <AdvancedImage className="rounded-2xl" cldImg={image}/>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        {
          width > 512 && (
            <>
              <CarouselNext />
              <CarouselPrevious />
            </>
          )
        }
      </Carousel>
    </Base>

    </>
  );
}
