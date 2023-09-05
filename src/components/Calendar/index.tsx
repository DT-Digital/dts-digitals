"use client";
import { loadCalendar } from "@/lib/calendar";
import { useEffect } from "react";

export function LoadCalendar() {
  useEffect(() => {
    loadCalendar();
  }, []);

  return null;
}
