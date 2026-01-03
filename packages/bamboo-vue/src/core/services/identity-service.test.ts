import { describe, it, expect } from "vitest";
import { IdentityService } from "./identity-service.js";

describe("identity service", () => {
  describe("singleton pattern", () => {
    it("should return the same instance", () => {
      const instance1 = IdentityService.instance;
      const instance2 = IdentityService.instance;
      expect(instance1).toBe(instance2);
    });
  });

  describe("getComponentId", () => {
    const service = IdentityService.instance;

    it("should generate id with bo- prefix when no descriptor provided", () => {
      const id = service.getComponentId();
      expect(id).toMatch(
        /^bo-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
    });

    it("should generate id with bo- prefix and descriptor when descriptor provided", () => {
      const id = service.getComponentId("button");
      expect(id).toMatch(
        /^bo-button-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
    });

    it("should generate unique ids on multiple calls", () => {
      const id1 = service.getComponentId("component");
      const id2 = service.getComponentId("component");
      expect(id1).not.toBe(id2);
    });

    it("should generate unique ids without descriptor on multiple calls", () => {
      const id1 = service.getComponentId();
      const id2 = service.getComponentId();
      expect(id1).not.toBe(id2);
    });

    it("should handle descriptors with special characters", () => {
      const id = service.getComponentId("my-component_123");
      expect(id).toMatch(
        /^bo-my-component_123-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
    });

    it("should treat empty string as no descriptor", () => {
      const id = service.getComponentId("");
      expect(id).toMatch(
        /^bo-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
    });
  });

  describe("getDataTestId", () => {
    const service = IdentityService.instance;

    it("should generate id with test- prefix when no descriptor provided", () => {
      const id = service.getDataTestId();
      expect(id).toMatch(
        /^test-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
    });

    it("should generate id with test- prefix and descriptor when descriptor provided", () => {
      const id = service.getDataTestId("submit-button");
      expect(id).toMatch(
        /^test-submit-button-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
    });

    it("should generate unique ids on multiple calls", () => {
      const id1 = service.getDataTestId("element");
      const id2 = service.getDataTestId("element");
      expect(id1).not.toBe(id2);
    });

    it("should generate unique ids without descriptor on multiple calls", () => {
      const id1 = service.getDataTestId();
      const id2 = service.getDataTestId();
      expect(id1).not.toBe(id2);
    });

    it("should handle descriptors with special characters", () => {
      const id = service.getDataTestId("user-form_input-1");
      expect(id).toMatch(
        /^test-user-form_input-1-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
    });

    it("should treat empty string as no descriptor", () => {
      const id = service.getDataTestId("");
      expect(id).toMatch(
        /^test-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
      );
    });
  });

  describe("id format validation", () => {
    const service = IdentityService.instance;

    it("should generate valid UUID v4 format in component ids", () => {
      const id = service.getComponentId("test");
      const uuidPart = id.split("-").slice(2).join("-");
      // UUID v4 has specific format requirements
      expect(uuidPart).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
      );
    });

    it("should generate valid UUID v4 format in data test ids", () => {
      const id = service.getDataTestId("test");
      const uuidPart = id.split("-").slice(2).join("-");
      // UUID v4 has specific format requirements
      expect(uuidPart).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
      );
    });
  });

  describe("cross-method uniqueness", () => {
    const service = IdentityService.instance;

    it("should generate different ids between getComponentId and getDataTestId", () => {
      const componentId = service.getComponentId("same-descriptor");
      const testId = service.getDataTestId("same-descriptor");
      expect(componentId).not.toBe(testId);
      expect(componentId.startsWith("bo-")).toBe(true);
      expect(testId.startsWith("test-")).toBe(true);
    });
  });
});
