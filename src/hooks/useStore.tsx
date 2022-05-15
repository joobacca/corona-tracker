import { Encounter } from 'src/types';
import { getLS, setLS } from 'src/utils/localStorageHandler';
import create from 'zustand';

export interface EncounterState {
  encounters: Encounter[];
  filteredEncounters: Encounter[] | null;
  addNewEncounter: (encounter: Encounter) => void;
  setFilteredEncounters: (newEncounters: Encounter[]) => void;
  clearFilteredEncounters: () => void;
}

const defaultList: Encounter[] = getLS();

const useStore = create<EncounterState>((set, get) => ({
  encounters: defaultList,
  filteredEncounters: null,
  setFilteredEncounters: (newEncounters: Encounter[]) =>
    set({ filteredEncounters: newEncounters }),
  clearFilteredEncounters: () => set({ filteredEncounters: null }),
  addNewEncounter: (encounter: Encounter) => {
    const newEncounters = [...get().encounters, encounter];
    setLS(newEncounters);
    set({ encounters: newEncounters });
  },
}));

export default useStore;
