import { Base } from "@/components/base";

export default function ContactPage() {
  return (
    <>
    
    <Base>
      <div className="w-max">
        <p className="typing-animation-steady overflow-hidden whitespace-nowrap mt-35 mb-15 w-80 text-2xl font-bold text-white md:text-3xl md:mt-50 lg:text-5xl lg:mt-105">
          Let's chat!
        </p>
      </div>
      <div className="text-sm p-1 text-white md:text-md md:p-2 lg:text-lg lg:p-3">
          Email me at <a href="mailto:lakshan.siva@gmail.com" className="underline">lakshan.siva@gmail.com</a>
      </div>
      <div className="text-sm p-1 text-white md:text-md md:p-2 lg:text-lg lg:p-3">
          Call me at <a href="tel:+16476376601" className="underline">+1 (647) 637-6601</a>
      </div>
    </Base>

    </>
  );
}
