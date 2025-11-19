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
    headerTitle: "",
    updateHeader: (title: string, browserTitle?: string) => {
        document.title = browserTitle ?? title;
        set({ headerTitle: title });
    },
}));
