import { Base } from "@/components/base";

export default function ContactPage() {
  return (
    <>
    
    <Base verticalCenter={true}>
      <div className="w-max">
        <p className="typing-animation-steady overflow-hidden whitespace-nowrap mb-5 w-80 text-2xl font-bold text-white md:text-3xl lg:text-5xl">
          Let's chat!
        </p>
      </div>
      <div className="text-sm text-white md:text-md lg:text-lg">
          Email me at <a href="mailto:lakshan.siva@gmail.com" className="underline">lakshan.siva@gmail.com</a>
      </div>
      <div className="text-sm text-white md:text-md lg:text-lg">
          Call me at <a href="tel:+16476376601" className="underline">+1 (647) 637-6601</a>
      </div>
    </Base>

    </>
  );
}
