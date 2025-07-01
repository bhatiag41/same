import Image from "next/image";

type FocusAreaCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

const FocusAreaCard = ({
  image,
  alt,
  title,
  description,
}: FocusAreaCardProps) => (
  <div className="flex flex-col items-center text-center min-h-[500px]">
  
    <div className="w-[22rem] h-[22rem] mb-10 flex items-center justify-center">
      <Image
        src={image}
        alt={alt}
        width={352}
        height={352}
        className="rounded-full object-cover w-[22rem] h-[22rem]"
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
    <h3 className="font-serif font-normal text-2xl mb-8 text-[#7c7a6e]">
      {title}
    </h3>
    <p className="text-base text-[#7c7a6e] font-light leading-relaxed max-w-sm mx-auto">
      {description}
    </p>
  </div>
);

export default FocusAreaCard;
