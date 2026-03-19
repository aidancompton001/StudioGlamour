import { describe, it, expect, beforeEach } from "vitest";
import { useBookingStore } from "@/lib/store/booking";
import { useCartStore } from "@/lib/store/cart";

describe("Booking store", () => {
  beforeEach(() => {
    useBookingStore.getState().reset();
  });

  it("starts at step 1 with no selection", () => {
    const state = useBookingStore.getState();
    expect(state.step).toBe(1);
    expect(state.selectedService).toBeNull();
    expect(state.selectedDate).toBeNull();
    expect(state.selectedTime).toBeNull();
  });

  it("selectService advances to step 2", () => {
    useBookingStore.getState().selectService("classic-new");
    const state = useBookingStore.getState();
    expect(state.selectedService).toBe("classic-new");
    expect(state.step).toBe(2);
  });

  it("selectTime advances to step 3", () => {
    useBookingStore.getState().selectService("classic-new");
    useBookingStore.getState().selectTime("14:00");
    const state = useBookingStore.getState();
    expect(state.selectedTime).toBe("14:00");
    expect(state.step).toBe(3);
  });

  it("reset clears everything", () => {
    useBookingStore.getState().selectService("classic-new");
    useBookingStore.getState().selectTime("10:00");
    useBookingStore.getState().reset();
    const state = useBookingStore.getState();
    expect(state.step).toBe(1);
    expect(state.selectedService).toBeNull();
    expect(state.selectedTime).toBeNull();
  });
});

describe("Cart store", () => {
  beforeEach(() => {
    // Reset cart
    const state = useCartStore.getState();
    state.items.forEach((item) => useCartStore.getState().removeItem(item.id));
    useCartStore.getState().closeCart();
  });

  it("starts empty", () => {
    const state = useCartStore.getState();
    expect(state.items).toHaveLength(0);
    expect(state.count()).toBe(0);
    expect(state.total()).toBe(0);
  });

  it("addItem adds product and opens cart", () => {
    useCartStore.getState().addItem("tweezer-kiara", 'Tweezer "KIARA"', 32);
    const state = useCartStore.getState();
    expect(state.items).toHaveLength(1);
    expect(state.count()).toBe(1);
    expect(state.total()).toBe(32);
    expect(state.isOpen).toBe(true);
  });

  it("addItem same product increments quantity", () => {
    useCartStore.getState().addItem("tweezer-kiara", 'Tweezer "KIARA"', 32);
    useCartStore.getState().addItem("tweezer-kiara", 'Tweezer "KIARA"', 32);
    const state = useCartStore.getState();
    expect(state.items).toHaveLength(1);
    expect(state.count()).toBe(2);
    expect(state.total()).toBe(64);
  });

  it("removeItem removes product", () => {
    useCartStore.getState().addItem("tweezer-kiara", 'Tweezer "KIARA"', 32);
    useCartStore.getState().removeItem("tweezer-kiara");
    const state = useCartStore.getState();
    expect(state.items).toHaveLength(0);
    expect(state.total()).toBe(0);
  });

  it("toggleCart flips isOpen", () => {
    expect(useCartStore.getState().isOpen).toBe(false);
    useCartStore.getState().toggleCart();
    expect(useCartStore.getState().isOpen).toBe(true);
    useCartStore.getState().toggleCart();
    expect(useCartStore.getState().isOpen).toBe(false);
  });
});
