"use client";

import Image from "next/image";
import { FinalCommissionData } from "@/types/commission";
import {getGmail} from "@/utils/getUser"

interface Props {
  formData: FinalCommissionData;
  goBack: () => void;
  submit: () => FinalCommissionData;
  userId: string;
}

const Review = ({ formData, goBack, submit, userId }: Props) => {
  const { tags } = formData;
  const images = formData.images ?? [];

  const info = [
    { label: "Art Type", value: formData.artType },
    { label: "Budget", value: formData.budget },
    {
      label: "Deadline",
      value: new Date(formData.deadline).toLocaleDateString("en-US"),
    },
  ];

  return (
    <div className="bg-secondary p-6 rounded-md border border-primary-line flex flex-col gap-6">
      {/* HEADER */}
      <div className="flex gap-4">
        <Image 
          height={40}
          width={40}
          alt={`${formData?.commissionFrom?.username}_profile`}
          src={formData?.commissionFrom?.profile_picture || ""}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between">
            <p className="opacity-70 font-bold">
              {formData?.commissionFrom?.first_name} {formData.commissionFrom?.last_name}
              <span className="text-sm ml-4 font-semibold opacity-80">{getGmail(userId).ownerGmail}</span>
            </p>
            <p className="text-xs opacity-50">{formData.createdAt}</p>
          </div>
          <p className="text-xs opacity-50">
            to <span className="font-semibold">{formData.commissionTo?.first_name} {formData.commissionTo?.last_name}</span>
          </p>
        </div>
      </div>

      <hr className="border-primary-line" />

      {/* BODY */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* IMAGES */}
        <div className="lg:w-[40%] flex flex-col gap-3">
          <p className="font-semibold">
            Photo Reference ({images.length})
          </p>

          <div className="relative h-60 border border-primary-line rounded-md overflow-hidden">
            {images.length > 0 ? (
              <Image
                src={images[0].url}
                alt="main"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-xs opacity-40">
                No image
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto">
              {images.slice(1).map((img, i) => (
                <div key={i} className="relative h-20 w-20 shrink-0">
                  <Image
                    src={img.url}
                    alt={`thumb-${i}`}
                    fill
                    className="object-cover rounded-md border border-primary-line"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DETAILS */}
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="text-2xl font-semibold">{formData.title}</h3>
          <p className="text-sm opacity-80">{formData.description}</p>

          <div className="flex flex-wrap gap-2">
            <p><strong>Tags: </strong></p>
            {tags?.length ? (
              tags?.map((tag) => (
                <span
                  key={tag}
                  className="bg-green-700 text-white px-3 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))
            ) : (
              <span className="text-xs opacity-40">No tags</span>
            )}
          </div>

          {info.map((item) => (
            <p key={item.label} className="text-sm">
              <strong>{item.label}:</strong> {item.value}
            </p>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center border-t border-primary-line pt-4">
        <p className="text-sm opacity-70">
          Please review your commission details
        </p>
        <div className="flex gap-3">
          <button onClick={goBack} className="border px-6 py-2 rounded-md text-sm cursor-pointer hover:opacity-80 transition-all">
            Go Back
          </button>
          <button
            onClick={submit}
            className="bg-white text-black px-6 py-2 rounded-md text-sm font-semibold cursor-pointer hover:opacity-80 transition-all"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
