import Image from "next/image";

export default function ThankYouPage({
  searchParams: { rating },
}: {
  searchParams: { rating: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center flex-1 bg-very_dark_blue px-6 ">
      <div className="bg-black_gradient sm:w-[412px] px-6 pt-[34px] sm:py-[45px] sm:pl-[32px] sm:pr-[40px] pb-[37px] flex flex-col rounded-[15px] sm:rounded-[30px] items-center justify-center">
        <div className="relative w-[144px] h-[96px] sm:w-[162px] sm:h-[108px]">
          <Image
            fill
            src={"/images/illustration-thank-you.svg"}
            alt="thankyou"
          />
        </div>

        <div className="rounded-full mt-6 sm:mt-8 text-orange px-[12px] py-[5px] sm:pl-[20px] sm:pr-[19px] sm:py-1 bg-dark_blue text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] font-normal">
          You selected {rating} out of 5
        </div>

        <p className="mt-6 text-[24px] sm:mt-8 leading-[30px] font-bold text-white text-center sm:text-[28px] sm:leading-[35.4px]">
          Thank you!
        </p>

        <p className="mt-[17px] sm:mt-[7px] font-normal text-light_gray text-[14px] sm:text-[15px] sm:leading-[24px] leading-[22px] text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </main>
  );
}
