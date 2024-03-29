"use client";

import { IService } from "@/types";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function ServiceTable({ data }: { data: IService[] }) {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen flex justify-center font-sans overflow-hidden overflow-x-auto">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
            <table className="min-w-max w-full table-auto overflow-x-auto">
              <thead>
                <tr className="bg-[#F9A14A] text-black uppercase text-xs sm:text-sm">
                  {Object.keys(data[0])
                    .filter(
                      (key) =>
                        ![
                          "id",
                          "description",
                          "TimeSlots",
                          "Booking",
                          "Bookmark",
                          "Reviews",
                          "user",
                          "userId",
                          "thumbnail",
                          "location",
                          "authorEmail",
                          "authorImage",
                          "authorName",
                          "createdAt",
                          "badge",
                          "updatedAt",
                        ].includes(key)
                    )
                    .map((key) => (
                      <th key={key} className="py-3 px-6 text-left">
                        {key}
                      </th>
                    ))}
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-xs sm:text-sm">
                {data?.map((service: IService) => (
                  <tr
                    key={service.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {Object.entries(service).map(
                      ([key, value]) =>
                        ![
                          "id",
                          "description",
                          "TimeSlots",
                          "Booking",
                          "Bookmark",
                          "Reviews",
                          "user",
                          "userId",
                          "thumbnail",
                          "location",
                          "authorEmail",
                          "authorImage",
                          "authorName",
                          "badge",
                          "createdAt",
                          "updatedAt",
                        ].includes(key) && (
                          <td
                            key={key}
                            className="py-3 px-6 text-left whitespace-nowrap"
                          >
                            <div className="flex items-center">
                              <div className=""></div>
                              <span className="font-medium text-left w-full">
                                {typeof value === "object"
                                  ? JSON.stringify(value)
                                  : value}
                              </span>
                            </div>
                          </td>
                        )
                    )}

                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <AiFillEdit className="text-lg text-[#4EAC95] cursor-pointer" />
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <MdDelete className="text-lg text-red-500 cursor-pointer" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
