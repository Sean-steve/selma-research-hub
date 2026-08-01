import { createFileRoute } from "@tanstack/react-router";
import SelmaLanding from "@/components/site/SelmaLanding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Selma Research & Data Analytics Development" },
      {
        name: "description",
        content:
          "Selma Research delivers project management, Power BI and Tableau analytics, grant proposals, market research and machine learning for evidence-driven organisations.",
      },
      {
        property: "og:title",
        content: "Selma Research & Data Analytics Development",
      },
      {
        property: "og:description",
        content:
          "Research, dashboards, grant proposals and machine learning — turning your data into decisions you can fund and defend.",
      },
    ],
  }),
  component: SelmaLanding,
});
