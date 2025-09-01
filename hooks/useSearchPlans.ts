// hooks/useSearchPlans.ts
import { PlansResponse, Plan } from "../types";

export function useSearchPlans(
  plansData: PlansResponse | null,
  activeTab: string,
  searchAmount: string
) {
  const tabCategories = plansData?.RDATA ? Object.keys(plansData.RDATA) : [];
  let activePlans: Plan[] = activeTab ? plansData?.RDATA[activeTab] || [] : [];

  if (searchAmount && plansData?.RDATA) {
    const allPlans = Object.values(plansData.RDATA).flat();
    activePlans = allPlans
      .filter((plan) => plan.rs.toString().includes(searchAmount))
      .sort((a, b) => a.rs - b.rs);
  }

  return { tabCategories, activePlans };
}
