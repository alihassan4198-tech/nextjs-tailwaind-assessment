import Image from "next/image";

export default function Card({
    mainTitle,
    jobTitle,
    company,
    location,
    description,
    thumbnail,
  }) {
    return (
      <div className="flex flex-col justify-start items-start  rounded-tr-3xl rounded-bl-3xl h-[310px] w-[330px] shadow-lg shadow-black/10  bg-theme-gray space-y-3 py-1 my-10">
        <div className=" space-y-3 px-6 pb-2">
          <div className="pt-2 flex flex-row items-center justify-start">
            <p className="text-[#2B72EE] text-[20px] font-extrabold">
              {mainTitle}
            </p>
          </div>
          <h5 className="text-lg font-bold text-theme-black">{jobTitle}</h5>
          <h6 className="text-sm font-bold text-theme-blue">{company}</h6>
          <p className="text-sm font-normal text-theme-black">{location}</p>
          <p className="text-xs font-normal text-theme-black text-start ">
            {description}
          </p>
          <div className="flex justify-end items-center">
            <Image  src={thumbnail} height={80} width={80} />
          </div>
        </div>
      </div>
    )
  }