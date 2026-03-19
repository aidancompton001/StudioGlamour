import { create } from "zustand";

interface BookingState {
  step: number;
  selectedService: string | null;
  selectedDate: string | null;
  selectedTime: string | null;
  name: string;
  email: string;
  phone: string;
  setStep: (step: number) => void;
  selectService: (serviceId: string) => void;
  selectDate: (date: string) => void;
  selectTime: (time: string) => void;
  setContactInfo: (name: string, email: string, phone: string) => void;
  reset: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  step: 1,
  selectedService: null,
  selectedDate: null,
  selectedTime: null,
  name: "",
  email: "",
  phone: "",
  setStep: (step) => set({ step }),
  selectService: (serviceId) => set({ selectedService: serviceId, step: 2 }),
  selectDate: (date) => set({ selectedDate: date }),
  selectTime: (time) => set({ selectedTime: time, step: 3 }),
  setContactInfo: (name, email, phone) => set({ name, email, phone }),
  reset: () =>
    set({
      step: 1,
      selectedService: null,
      selectedDate: null,
      selectedTime: null,
      name: "",
      email: "",
      phone: "",
    }),
}));
