import { create } from "zustand";

type UiState = {
    showGradientBackground: boolean;
    setShowGradientBackground: (value: boolean) => void;
    headerTitle: string;
    updateHeader: (title: string, browserTitle?: string) => void;
};

export const useUiStore = create<UiState>((set) => ({
    showGradientBackground: false,
    setShowGradientBackground: (value) => set({ showGradientBackground: value }),
    headerTitle: "모임 생성",
    updateHeader: (title: string, browserTitle?: string) => {
        document.title = browserTitle ?? title;
        set({ headerTitle: title });
    },
}));
