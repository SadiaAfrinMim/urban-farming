export declare const SustainabilityService: {
    getAllCerts: () => Promise<any>;
    getCertById: (id: string, user: any) => Promise<any>;
    createCert: (userId: string, payload: {
        certifyingAgency: string;
        certificationDate: string;
    }) => Promise<any>;
    updateCertStatus: (id: string, certificationStatus: CertificationStatus) => Promise<any>;
};
//# sourceMappingURL=sustainability.service.d.ts.map