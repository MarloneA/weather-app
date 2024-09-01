import { dateToString } from "@/app/lib/utils";

export default function Metadata({ data, units }) {
  return (
    <>
      <div>
        <h1 className="text-white text-8xl flex flex-row align-baseline">
          {data?.current?.temp}
          {data?.current?.temp && (
            <span className=" flex flex-col">
              <span className="text-4xl">
                &deg;{units === "metric" ? "C" : "F"}
              </span>
            </span>
          )}
        </h1>

        <h1 className="text-white text-2xl">
          {data?.current?.weather[0]?.description}
        </h1>
      </div>
      <div className="text-center">
        <h1 className="text-white text-2xl">
          {dateToString(data?.current?.dt)}
        </h1>
        <h1 className="text-white text-2xl">{data?.timezone}</h1>
      </div>
    </>
  );
}
