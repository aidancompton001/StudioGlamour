"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBookingStore } from "@/lib/store/booking";
import { useToast } from "@/components/ui/Toast";
import { serviceCategories } from "@/lib/data/services";
import { FadeIn } from "@/components/ui/FadeIn";

// Main services: first service from each category, filtered to the specified set
const mainServices = [
  { id: "classic-new",  name: "Classic",         price: 100, description: "Natürlicher Look — eine Extension pro Naturwimper", category: "1:1 Technik" },
  { id: "lv-new",       name: "Leichtes Volumen", price: 120, description: "Dezenter Volumen-Effekt für den Alltag",              category: "Volumen" },
  { id: "mv-new",       name: "Mittleres Volumen",price: 130, description: "Ausdrucksstarker Look für besondere Anlässe",          category: "Volumen" },
  { id: "megav-new",    name: "Mega Volumen",     price: 155, description: "Maximaler Glamour — volle, dichte Wimpern",            category: "Volumen" },
  { id: "wl-new",       name: "Wet Look",         price: 150, description: "Trendy glänzender Wet-Look-Effekt",                   category: "Spezial" },
  { id: "wh-new",       name: "Whispy",           price: 165, description: "Natürlich-wispy Look mit Spikes und Textur",           category: "Spezial" },
  { id: "lash-lift",    name: "Lash Lifting",     price: 65,  description: "Natürliches Lifting inkl. Färben, ohne Extensions",    category: "Lifting" },
  { id: "brow-lift",    name: "Brow Lifting",     price: 75,  description: "Brow Lifting inkl. Zupfen & Färben",                  category: "Lifting" },
  { id: "kombi-lift",   name: "Kombi",            price: 125, description: "Lash & Brow Lifting Kombi — rundum gepflegt",         category: "Lifting" },
];

const MONTHS = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const WEEKDAYS = ["Mo","Di","Mi","Do","Fr","Sa","So"];
const TIME_SLOTS = ["09:00","10:00","11:00","13:00","14:00","15:00","16:00"];

// Build a simple static calendar for the current month
function buildCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Shift so Monday = index 0
  const offset = (firstDay + 6) % 7;
  const cells: (number | null)[] = Array(offset).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  // Pad to full rows
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

// Days that are "available" (mock: all weekdays from 6 onward that aren't past)
function isAvailable(day: number | null, today: number): boolean {
  if (!day) return false;
  if (day < today) return false;
  return day % 3 !== 0; // every third day is "booked" for visual variety
}

const stepVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:  (direction: number) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
};

export default function BookingPage() {
  const { step, selectedService, selectedDate, selectedTime, selectService, selectDate, selectTime, setStep, setContactInfo, reset } = useBookingStore();
  const { showToast } = useToast();

  const [direction, setDirection] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const now = new Date();
  const [calYear]  = useState(now.getFullYear());
  const [calMonth] = useState(now.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const calendarCells = buildCalendar(calYear, calMonth);
  const today = now.getDate();

  const selectedServiceData = mainServices.find((s) => s.id === selectedService);

  function goTo(nextStep: number) {
    setDirection(nextStep > step ? 1 : -1);
    setStep(nextStep);
  }

  function handleSelectService(id: string) {
    setDirection(1);
    selectService(id); // sets step to 2 internally
  }

  function handleSelectDay(day: number) {
    setSelectedDay(day);
    const dateStr = `${String(day).padStart(2,"0")}.${String(calMonth + 1).padStart(2,"0")}.${calYear}`;
    selectDate(dateStr);
  }

  function handleSelectTime(time: string) {
    setDirection(1);
    selectTime(time); // sets step to 3 internally
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setContactInfo(name, email, phone);
    showToast("Demo-Modus: In der fertigen Version wird hier Ihre Buchung bestätigt.");
    reset();
    setName("");
    setEmail("");
    setPhone("");
    setSelectedDay(null);
  }

  const steps = [
    { number: 1, label: "Leistung" },
    { number: 2, label: "Termin" },
    { number: 3, label: "Bestätigung" },
  ];

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Header */}
      <header className="bg-charcoal text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="font-heading text-4xl md:text-5xl mb-10 tracking-wide">Termin buchen</h1>
          </FadeIn>

          {/* Progress bar */}
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center gap-0 max-w-md mx-auto">
              {steps.map((s, i) => {
                const isCompleted = step > s.number;
                const isActive    = step === s.number;
                return (
                  <div key={s.number} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                          isCompleted
                            ? "bg-gold text-white"
                            : isActive
                            ? "bg-gold text-white ring-4 ring-gold/30"
                            : "bg-white/20 text-white/50"
                        }`}
                      >
                        {isCompleted ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          s.number
                        )}
                      </div>
                      <span
                        className={`mt-2 text-xs tracking-wider uppercase ${
                          isActive ? "text-gold" : isCompleted ? "text-gold/70" : "text-white/40"
                        }`}
                      >
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`flex-1 h-px mx-3 mb-5 transition-all duration-500 ${step > s.number ? "bg-gold" : "bg-white/20"}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </header>

      {/* Step content */}
      <main className="max-w-4xl mx-auto px-6 py-14">
        <AnimatePresence mode="wait" custom={direction}>
          {/* ─────────── Step 1: Service Selection ─────────── */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <FadeIn>
                <p className="text-center text-charcoal/60 mb-8 text-base">
                  Wählen Sie Ihre gewünschte Leistung
                </p>
              </FadeIn>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mainServices.map((service, idx) => (
                  <FadeIn key={service.id} delay={idx * 0.05}>
                    <button
                      onClick={() => handleSelectService(service.id)}
                      className="w-full text-left bg-white rounded-xl p-6 hover:border-gold border-2 border-transparent cursor-pointer transition-all duration-200 hover:shadow-lg group"
                    >
                      <span className="text-xs uppercase tracking-widest text-gold/70 font-medium mb-2 block">
                        {service.category}
                      </span>
                      <h3 className="font-heading text-lg text-charcoal mb-2 group-hover:text-gold transition-colors duration-200">
                        {service.name}
                      </h3>
                      <p className="text-sm text-charcoal/55 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <p className="font-heading text-2xl text-gold">{service.price} €</p>
                    </button>
                  </FadeIn>
                ))}
              </div>
            </motion.div>
          )}

          {/* ─────────── Step 2: Date & Time ─────────── */}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* Selected service reminder */}
              {selectedServiceData && (
                <div className="mb-8 bg-white rounded-xl px-6 py-4 border border-cream-dark flex items-center justify-between">
                  <div>
                    <span className="text-xs text-charcoal/50 uppercase tracking-widest block mb-0.5">Gewählte Leistung</span>
                    <span className="font-heading text-charcoal">{selectedServiceData.name}</span>
                  </div>
                  <span className="font-heading text-xl text-gold">{selectedServiceData.price} €</span>
                </div>
              )}

              {/* Calendar */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-xl text-charcoal">
                    {MONTHS[calMonth]} {calYear}
                  </h2>
                  <span className="text-xs text-charcoal/40 uppercase tracking-wider">Verfügbare Termine</span>
                </div>

                {/* Weekday headers */}
                <div className="grid grid-cols-7 mb-2">
                  {WEEKDAYS.map((d) => (
                    <div key={d} className="text-center text-xs font-medium text-charcoal/40 uppercase tracking-wider py-1">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Day cells */}
                <div className="grid grid-cols-7 gap-1">
                  {calendarCells.map((day, idx) => {
                    const available = isAvailable(day, today);
                    const isSelected = day !== null && day === selectedDay;
                    return (
                      <button
                        key={idx}
                        disabled={!available}
                        onClick={() => day && available && handleSelectDay(day)}
                        className={`aspect-square rounded-lg text-sm font-medium transition-all duration-150 flex items-center justify-center
                          ${!day ? "invisible" : ""}
                          ${available && !isSelected ? "text-charcoal hover:bg-gold/10 hover:text-gold cursor-pointer" : ""}
                          ${!available && day ? "text-charcoal/25 cursor-not-allowed" : ""}
                          ${isSelected ? "bg-gold text-white shadow-md shadow-gold/30" : ""}
                          ${day === today && !isSelected ? "ring-1 ring-gold/40" : ""}
                        `}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots — show only when day is selected */}
              <AnimatePresence>
                {selectedDay && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8"
                  >
                    <h3 className="font-heading text-lg text-charcoal mb-5">
                      Uhrzeiten für den {String(selectedDay).padStart(2,"0")}.{String(calMonth + 1).padStart(2,"0")}.{calYear}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {TIME_SLOTS.map((time) => (
                        <button
                          key={time}
                          onClick={() => handleSelectTime(time)}
                          className="px-5 py-2.5 rounded-full border border-gold text-gold text-sm font-medium hover:bg-gold hover:text-white transition-all duration-200 hover:shadow-md"
                        >
                          {time} Uhr
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                onClick={() => goTo(1)}
                className="text-charcoal/50 hover:text-charcoal transition-colors flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zurück zur Leistungsauswahl
              </button>
            </motion.div>
          )}

          {/* ─────────── Step 3: Contact & Confirm ─────────── */}
          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {/* Summary */}
              <div className="bg-charcoal text-white rounded-2xl p-6 md:p-8 mb-8">
                <h2 className="font-heading text-xl mb-5 text-gold-light">Ihre Terminübersicht</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Leistung</span>
                    <span className="font-heading text-lg">{selectedServiceData?.name ?? "—"}</span>
                    {selectedServiceData && (
                      <span className="block text-gold text-sm mt-0.5">{selectedServiceData.price} €</span>
                    )}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Datum</span>
                    <span className="font-heading text-lg">{selectedDate ?? "—"}</span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-white/40 block mb-1">Uhrzeit</span>
                    <span className="font-heading text-lg">{selectedTime ? `${selectedTime} Uhr` : "—"}</span>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
                <h2 className="font-heading text-xl text-charcoal mb-6">Ihre Kontaktdaten</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-charcoal/50 mb-2" htmlFor="name">
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ihr vollständiger Name"
                      className="w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-charcoal/50 mb-2" htmlFor="email">
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ihre@email.de"
                      className="w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-charcoal/50 mb-2" htmlFor="phone">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+49 123 456789"
                      className="w-full rounded-lg border border-cream-dark bg-cream/50 px-4 py-3 text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-4 rounded-xl text-sm font-medium tracking-widest uppercase mt-2"
                  >
                    Termin bestätigen
                  </button>
                </form>
              </div>

              <button
                onClick={() => goTo(2)}
                className="text-charcoal/50 hover:text-charcoal transition-colors flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zurück zur Terminauswahl
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
