import { create } from "zustand";

type UiState = {
    showGradientBackground: boolean;
    setShowGradientBackground: (value: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
    showGradientBackground: false,
    setShowGradientBackground: (value) => set({ showGradientBackground: value }),
}));
