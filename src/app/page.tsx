import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center flex-1 bg-very_dark_blue px-6 ">
      <div className="bg-black_gradient p-6 flex flex-col rounded-[15px] pb-8 sm:w-[412px] sm:p-8 sm:rounded-[30px]">
        <div className="w-10 h-10 bg-dark_blue flex items-center justify-center rounded-full">
          <div className="w-[13.96px] h-[13.33px] relative">
            <Image src={"/images/icon-star.svg"} alt="star-icon" fill />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-[10px] sm:mt-[30px] sm:gap-[7px]">
          <p className="font-bold text-white text-[24px] leading-[30px] sm:text-[28px] sm:leading-[35.4px]">
            How did we do?
          </p>
          <p className="font-normal text-light_gray text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px]">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>

        <form action={`/thankyou`} method="get">
          <div className="flex flex-row gap-[17px] sm:gap-[21px] mt-6">
            {[1, 2, 3, 4, 5].map((val) => {
              return (
                <label
                  key={val}
                  htmlFor={`${val}`}
                  className="flex items-center justify-center rounded-full w-[42px] h-[42px] sm:w-[51px] sm:h-[51px] bg-dark_blue text-medium_gray text-[14px] leading-[24px] font-bold has-[:checked]:bg-medium_gray has-[:checked]:text-white hover:bg-orange hover:text-white"
                >
                  <input
                    type="radio"
                    id={`${val}`}
                    name="rating"
                    value={val}
                    className="hidden"
                  />
                  {val}
                </label>
              );
            })}
          </div>

          <button
            type="submit"
            className="h-[45px] rounded-full w-full flex items-center justify-center mt-6 sm:mt-8 bg-orange text-white text-[14px] leading-[18px] font-bold tracking-[1.87px] hover:bg-white hover:text-orange"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </main>
  );
}
