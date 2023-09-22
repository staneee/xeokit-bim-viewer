export declare class Server {
    /**
     * Gets information on all available projects.
     *
     * @param {Function} done Callback through which the JSON result is returned.
     * @param {Function} error Callback through which an error message is returned on error.
     */
    getProjects(done: Function, error: Function);

    /**
     * Gets information for a project.
     *
     * @param {String} projectId ID of the project.
     * @param {Function} done Callback through which the JSON result is returned.
     * @param {Function} error Callback through which an error message is returned on error.
     */
    getProject(projectId: string, done: Function, error: Function);

    /**
     * Gets metadata for a model within a project.
     *
     * @param {String} projectId ID of the project.
     * @param {String} modelId ID of the model.
     * @param {Function} done Callback through which the JSON result is returned.
     * @param {Function} error Callback through which an error message is returned on error.
     */
    getMetadata(projectId: string, modelId: string, done: Function, error: Function);
    
    /**
     * Gets geometry for a model within a project.
     *
     * @param {String} projectId ID of the project.
     * @param {String} modelId ID of the model.
     * @param {Function} done Callback through which the JSON result is returned.
     * @param {Function} error Callback through which an error message is returned on error.
     */
    getGeometry(projectId: string, modelId: string, done: Function, error: Function);

    /**
     * Gets metadata for an object within a model within a project.
     *
     * @param {String} projectId ID of the project.
     * @param {String} modelId ID of the model.
     * @param {String} objectId ID of the object.
     * @param {Function} done Callback through which the JSON result is returned.
     * @param {Function} error Callback through which an error message is returned on error.
     */
    getObjectInfo(projectId: string, modelId: string, objectId: string, done: Function, error: Function);

    /**
     * Gets existing issues for a model within a project.
     *
     * @param {String} projectId ID of the project.
     * @param {String} modelId ID of the model.
     * @param {Function} done Callback through which the JSON result is returned.
     * @param {Function} error Callback through which an error message is returned on error.
     */
    getIssues(projectId: string, modelId: string, done: Function, error: Function);
}