import { Certificate as CertificateV1Alpha1 } from "../gen/certmanager.k8s.io/v1alpha1/Certificate";
import { Certificate as CertificateV1Alpha3 } from "../gen/cert-manager.io/v1alpha3/Certificate";

describe("Certificate", () => {
  let cert: CertificateV1Alpha1;

  beforeEach(() => {
    cert = new CertificateV1Alpha1({
      metadata: {
        name: "foo"
      },
      spec: {
        secretName: "foo-secret",
        dnsNames: ["foo.example.com"],
        acme: {
          config: [
            {
              domains: ["foo.example.com"]
            }
          ]
        },
        issuerRef: {
          name: "letsencrypt-prod",
          kind: "Issuer"
        }
      }
    });
  });

  it("should set apiVersion", () => {
    expect(cert).toHaveProperty("apiVersion", "certmanager.k8s.io/v1alpha1");
  });

  it("should set kind", () => {
    expect(cert).toHaveProperty("kind", "Certificate");
  });

  it("validate", () => {
    expect(() => cert.validate()).not.toThrow();
  });

  it("toJSON", () => {
    expect(cert.toJSON()).toEqual({
      apiVersion: "certmanager.k8s.io/v1alpha1",
      kind: "Certificate",
      metadata: {
        name: "foo"
      },
      spec: {
        secretName: "foo-secret",
        dnsNames: ["foo.example.com"],
        acme: {
          config: [
            {
              domains: ["foo.example.com"]
            }
          ]
        },
        issuerRef: {
          name: "letsencrypt-prod",
          kind: "Issuer"
        }
      }
    });
  });
});

describe("Certificate v1alpha3", () => {
  let cert: CertificateV1Alpha3;

  beforeEach(() => {
    cert = new CertificateV1Alpha3({
      metadata: {
        name: "foo"
      },
      spec: {
        secretName: "foo-secret",
        dnsNames: ["foo.example.com"],
        issuerRef: {
          name: "letsencrypt-prod",
          kind: "Issuer"
        }
      }
    });
  });

  it("should set apiVersion", () => {
    expect(cert).toHaveProperty("apiVersion", "cert-manager.io/v1alpha3");
  });

  it("should set kind", () => {
    expect(cert).toHaveProperty("kind", "Certificate");
  });

  it("validate", () => {
    expect(() => cert.validate()).not.toThrow();
  });

  it("toJSON", () => {
    expect(cert.toJSON()).toEqual({
      apiVersion: "cert-manager.io/v1alpha3",
      kind: "Certificate",
      metadata: {
        name: "foo"
      },
      spec: {
        secretName: "foo-secret",
        dnsNames: ["foo.example.com"],
        issuerRef: {
          name: "letsencrypt-prod",
          kind: "Issuer"
        }
      }
    });
  });
});
