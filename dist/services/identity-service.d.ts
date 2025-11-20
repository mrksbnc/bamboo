export declare class IdentityService {
    static get instance(): IdentityService;
    getComponentId(id?: string): string;
    /**
     * Return a new unique data-test-id in the form of `test-${descriptor}-${uuid}`.
     *
     * @param descriptor - Any human readable descriptor of the component to be
     * used as a prefix for the data-test-id. This is useful for debugging.
     */
    getDataTestId(descriptor?: string): string;
}
