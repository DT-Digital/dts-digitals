"use client";
import { loadCalendar } from "@/lib/calendar";

export function Calendar() {
  return (
    <div className="mt-8 w-full text-center">
      <button
        id="button-icon"
        className="mx-auto text-white capitalize rounded-full hover:shadow-xl btn btn-lg"
        onClick={() => loadCalendar("modal")}
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
        Book A Free Consultation
      </button>
    </div>
  );
}
