import { Base } from "@/components/base";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "../components/ui/card";
import { CardContent } from "../components/ui/card";
import cloudinaryClient from "../services/cloudinary";
import { AdvancedImage } from '@cloudinary/react';
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { auto } from "@cloudinary/url-gen/actions/resize";
import useWindowDimensions from "@/hooks/windowDimensionsHook";
// TODO: figure out how to show landscape images in full ratio
export default function PhotographyPage() {
  const { height } = useWindowDimensions();

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
    // { image: cloudinaryClient.image("portfolio-vienna-street").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
    //   orientation: "landscape"
    // },
    { image: cloudinaryClient.image("portfolio-couple").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
      orientation: "portrait"
    },
    // { image: cloudinaryClient.image("portfolio-budapest-sunrise").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
    //   orientation: "landscape"
    // },
    // { image: cloudinaryClient.image("portfolio-budapest-rooftop").format('auto').quality('auto').resize(auto().gravity(autoGravity())),
    //   orientation: "lanscape"
    // },
  ];

  return (
    <>
    
    <Base>
      <Carousel opts={{ align: "start" }} className="w-70 max-w-6xl mx-auto mt-25 md:w-100 md:mt-40 lg:w-max lg:mt-40">
        <CarouselContent>
          {imageObjs.map((imageObj) => {
            const image = imageObj.image;
            const orientation = imageObj.orientation;
            const aspectRatio = orientation === "portrait" ? 0.666 : 1.5;
            // Set a consistent max height, let width adjust
            const maxHeight = height / 2;
            const calculatedWidth = Math.round(maxHeight * aspectRatio);
            return (
              <CarouselItem className="flex items-center justify-center lg:basis-1/2">
                <Card className="border-0 shadow-md overflow-hidden h-full">
                  <CardContent className="h-full flex items-center justify-center">
                    <div style={{ width: calculatedWidth }}>
                      <AdvancedImage cldImg={image}/>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
        

      </Carousel>
    </Base>

    </>
  );
}
