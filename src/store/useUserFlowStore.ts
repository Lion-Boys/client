import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type UserFlowState = {
    hasOnboarded: boolean;
    completeOnboarding: () => void;
    resetOnboarding: () => void;
};

export const useUserFlowStore = create<UserFlowState>()(
    devtools(
        persist(
            (set) => ({
                hasOnboarded: false,
                completeOnboarding: () => set({ hasOnboarded: true }),
                resetOnboarding: () => set({ hasOnboarded: false }),
            }),
            {
                name: "user-flow-store",
                partialize: (state) => ({ hasOnboarded: state.hasOnboarded }),
            }
        ),
        { name: "UserFlowStore" }
    )
);
