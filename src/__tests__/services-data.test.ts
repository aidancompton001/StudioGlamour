import { describe, it, expect } from "vitest";
import { serviceCategories } from "@/lib/data/services";
import { products, courses, productCategories } from "@/lib/data/products";

describe("Services data integrity", () => {
  it("has 8 service categories", () => {
    expect(serviceCategories).toHaveLength(8);
  });

  it("every service has id, name, and positive price", () => {
    for (const cat of serviceCategories) {
      for (const svc of cat.services) {
        expect(svc.id).toBeTruthy();
        expect(svc.name).toBeTruthy();
        expect(svc.price).toBeGreaterThan(0);
      }
    }
  });

  it("Classic Neumodellage costs 100€", () => {
    const classic = serviceCategories.find((c) => c.id === "classic");
    const neu = classic?.services.find((s) => s.id === "classic-new");
    expect(neu?.price).toBe(100);
  });

  it("Mega Volume costs 155€", () => {
    const mega = serviceCategories.find((c) => c.id === "mega-volume");
    const neu = mega?.services.find((s) => s.id === "megav-new");
    expect(neu?.price).toBe(155);
  });

  it("Lash & Brow Kombi costs 125€", () => {
    const lifting = serviceCategories.find((c) => c.id === "lifting");
    const kombi = lifting?.services.find((s) => s.id === "kombi-lift");
    expect(kombi?.price).toBe(125);
  });
});

describe("Products data integrity", () => {
  it("has 9 products", () => {
    expect(products).toHaveLength(9);
  });

  it("every product has id, name, price, category", () => {
    for (const p of products) {
      expect(p.id).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.price).toBeGreaterThan(0);
      expect(p.category).toBeTruthy();
    }
  });

  it("Wimpernshampoo is sold out", () => {
    const shampoo = products.find((p) => p.id === "shampoo");
    expect(shampoo?.soldOut).toBe(true);
  });
});

describe("Courses data integrity", () => {
  it("has 5 courses", () => {
    expect(courses).toHaveLength(5);
  });

  it("ALL IN ONE MASTERCLASS costs 3500€", () => {
    const masterclass = courses.find((c) => c.id === "masterclass-all");
    expect(masterclass?.price).toBe(3500);
  });
});

describe("Product categories", () => {
  it("has 6 categories including 'all'", () => {
    expect(productCategories).toHaveLength(6);
    expect(productCategories[0].id).toBe("all");
  });
});
