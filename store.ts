import {create} from 'zustand';
import { persist } from 'zustand/middleware';

type NavToggle = {
    isOpen : Boolean
    toggleMenu : () => void
}


export const useNavToggle = create<NavToggle>()(
    persist(
        (set) => ({
            isOpen: false,
            toggleMenu: () => set((state) => ({isOpen: !state.isOpen}))
        }),
        {name: "navbarbutton"}
    )
    

)