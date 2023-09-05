import { getCalApi } from "@calcom/embed-react";

export const loadCalendar = async (type = "floatingButton") => {
  const cal = await getCalApi();
  cal(type, {
    calLink: "dtdigital/30min",
    config: {
      name: "DT Digital",
      email: "hello@dtdigital.nl",
    },
    buttonText: "Book A Free Consultation",
  });
  cal("ui", {
    styles: {
      branding: { brandColor: "#000000" },
    },
  });
};
