import { dateToString } from "@/app/lib/utils";

export default function Metadata({ data }) {
  return (
    <div className=" p-12 rounded-3xl">
      <h1 className="text-white text-2xl font-thin">
        {dateToString(data?.current?.dt)}
      </h1>
      <h1 className="text-white text-2xl font-mono">{data?.timezone}</h1>
    </div>
  );
}
