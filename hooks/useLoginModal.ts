import { create } from 'zustand';

interface LoginModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useLoginModal = create<LoginModalStore>((set) => ({
    isOpen: false, //trueにすると何もしないで、Login画面が開く
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useLoginModal;