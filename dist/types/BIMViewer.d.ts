import { Controller } from './Controller';
export declare class BIMViewer extends Controller {
    get localeService(): any;
    _customizeViewer();
    _initCanvasContextMenus();
    _initConfigs();

    /**
     * Sets a batch of viewer configurations.
     *
     * Note that this method is not to be confused with {@link BIMViewer#setViewerState}, which batch-updates various states of the viewer's UI and 3D view.
     *
     * See [Viewer Configurations](https://xeokit.github.io/xeokit-bim-viewer/docs/#viewer-configurations) for the list of available configurations.
     *
     * @param {*} viewerConfigs Map of key-value configuration pairs.
     */
    setConfigs(viewerConfigs: { [key: string]: any });

    /**
     * Sets a viewer configuration.
     *
     * See [Viewer Configurations](https://xeokit.github.io/xeokit-bim-viewer/docs/#viewer-configurations) for the list of available configurations.
     *
     * @param {String} name Configuration name.
     * @param {*} value Configuration value.
     */
    setConfig(name: string, value: any);

    /**
     * Gets the value of a viewer configuration.
     *
     * These are set with {@link BIMViewer#setConfig} and {@link BIMViewer#setConfigs}.
     *
     * @param {String} name Configuration name.
     * @ereturns {*} Configuration value.
     */
    getConfig(name: string): any;

    /**
     * Gets information on all available projects.
     * Gets information on all available projects.
     *
     * See [Getting Info on Available Projects](https://xeokit.github.io/xeokit-bim-viewer/docs/#getting-info-on-available-projects) for usage.
     *
     * @param {Function} done Callback invoked on success, into which the projects information JSON is passed.
     * @param {Function} error Callback invoked on failure, into which the error message string is passed.
     */
    getProjectsInfo(done: Function, error: Function);


    /**
     * Gets information on the given project.
     *
     * See [Getting Info on a Project](https://xeokit.github.io/xeokit-bim-viewer/docs/#getting-info-on-a-project) for usage.
     *
     * @param {String} projectId ID of the project to get information on. Must be the ID of one of the projects in the information obtained by {@link BIMViewer#getProjects}.
     * @param {Function} done Callback invoked on success, into which the project information JSON is passed.
     * @param {Function} error Callback invoked on failure, into which the error message string is passed.
     */
    getProjectInfo(projectId: string, done: Function, error: Function);

    /**
     * Gets information on the given object, belonging to the given model, within the given project.
     *
     * See [Getting Info on an Object](https://xeokit.github.io/xeokit-bim-viewer/docs/#getting-info-on-an-object) for usage.
     *
     * @param {String} projectId ID of the project to get information on. Must be the ID of one of the projects in the information obtained by {@link BIMViewer#getProjects}.
     * @param {String} modelId ID of a model within the project. Must be the ID of one of the models in the information obtained by {@link BIMViewer#getProjectInfo}.
     * @param {String} objectId ID of an object in the model.
     * @param {Function} done Callback invoked on success, into which the object information JSON is passed.
     * @param {Function} error Callback invoked on failure, into which the error message string is passed.
     */
    getObjectInfo(projectId: string, modelId: string, objectId: string, done: Function, error: Function);

    /**
     * Loads a project into the viewer.
     *
     * Unloads any currently loaded project and its models first. If the given project is already loaded, will unload that project first.
     *
     * @param {String} projectId ID of the project to load. Must be the ID of one of the projects in the information obtained by {@link BIMViewer#getProjects}.
     * @param {Function} done Callback invoked on success.
     * @param {Function} error Callback invoked on failure, into which the error message string is passed.
     */
    loadProject(projectId: string, done: Function, error: Function);

    /**
     * Unloads whatever project is currently loaded.
     */
    unloadProject();

    /**
     * Returns the ID of the currently loaded project, if any.
     *
     * @returns {String} The ID of the currently loaded project, otherwise ````null```` if no project is currently loaded.
     */
    getLoadedProjectId(): string;

    /**
     * Returns the IDs of the models in the currently loaded project.
     *
     * @returns {String[]} The IDs of the models in the currently loaded project.
     */
    getModelIds(): string[];

    /**
     * Loads a model into the viewer.
     *
     * Assumes that the project containing the model is currently loaded.
     *
     * @param {String} modelId ID of the model to load. Must be the ID of one of the models in the currently loaded project.
     * @param {Function} done Callback invoked on success.
     * @param {Function} error Callback invoked on failure, into which the error message string is passed.
     */
    loadModel(modelId: string, done: Function, error: Function);

    /**
     * Load all models in the currently loaded project.
     *
     * Doesn't reload any models that are currently loaded.
     *
     * @param {Function} done Callback invoked on successful loading of the models.
     */
    loadAllModels(done = function () {
    });

    /**
     * Returns the IDs of the currently loaded models, if any.
     *
     * @returns {String[]} The IDs of the currently loaded models, otherwise an empty array if no models are currently loaded.
     */
    getLoadedModelIds(): string[];

    /**
     * Gets if the given model is loaded.
     *
     * @param {String} modelId ID of the model to check. Must be the ID of one of the models in the currently loaded project.
     * @returns {Boolean} True if the given model is loaded.
     */
    isModelLoaded(modelId: string): boolean;

    /**
     * Unloads a model from the viewer.
     *
     * Does nothing if the model is not currently loaded.
     *
     * @param {String} modelId ID of the model to unload.
     */
    unloadModel(modelId: string);

    /**
     * Unloads all currently loaded models.
     */
    unloadAllModels();

    /**
     * Edits a model.
     *
     * Assumes that the project containing the model is currently loaded.
     *
     * @param {String} modelId ID of the model to edit. Must be the ID of one of the models in the currently loaded project.
     */
    editModel(modelId: string);

    /**
     * Deletes a model.
     *
     * Assumes that the project containing the model is currently loaded.
     *
     * @param {String} modelId ID of the model to delete. Must be the ID of one of the models in the currently loaded project.
     */
    deleteModel(modelId: string);

    /**
     * Adds a model.
     *
     */
    addModel();

    /**
     * Sets the viewer's background color.
     *
     * @param {Number[]} rgbColor Three-element array of RGB values, each in range ````[0..1]````.
     */
    setBackgroundColor(rgbColor: number[]);

    /**
     * Sets where the colors for model objects will be loaded from.
     *
     * Options are:
     *
     * * "model" - (default) load colors from models, and
     * * "viewer" - load colors from the viewer's inbuilt table of colors for IFC types.
     *
     * This is "model" by default.
     *
     * @param {String} source Where colors will be loaded from - "model" or "viewer".
     */
    setObjectColorSource(source: string);

    /**
     * Gets where the colors for model objects will be loaded from.
     *
     * This is "model" by default.
     *
     * @return {String} Where colors will be loaded from - "model" to get colors from the model, or "viewer" to get them from the viewer's built-in table of colors for IFC types.
     */
    getObjectColorSource(): string;

    /**
     * Updates viewer UI state according to the properties in the given object.
     *
     * Note that, since some updates could be animated (e.g. flying the camera to fit objects to view) this
     * method optionally takes a callback, which it invokes after updating the UI.
     *
     * Also, this method is not to be confused with {@link BIMViewer#setConfigs}, which is used to batch-update various configurations and user preferences on the viewer.
     *
     * See [Viewer States](https://xeokit.github.io/xeokit-bim-viewer/docs/#viewer_states) for the list of states that may be batch-updated with this method.
     *
     * @param {Object} viewerState Specifies the viewer UI state updates.
     * @param {Function} done Callback invoked on successful update of the viewer states.
     */
    setViewerState(viewerState: object, done = () => {
    });

    _parseSelectedStorey(viewerState: any, done: Function);

    _parseThreeDMode(viewerState: any, done: Function);

    /**
     * Highlights the given object in the tree views within the Objects, Classes and Storeys tabs.
     *
     * Also scrolls the object's node into view within each tree, then highlights it.
     *
     * De-highlights whatever node is currently highlighted in each of those trees.
     *
     * @param {String} objectId ID of the object
     */
    showObjectInExplorers(objectId: string);

    /**
     * De-highlights the object previously highlighted with {@link BIMViewer#showObjectInExplorers}.
     *
     * This only de-highlights the node. If the node is currently scrolled into view, then the node will remain in view.
     *
     * For each tab, does nothing if a node is currently highlighted.
     */
    unShowObjectInExplorers();

    /**
     * Shows the properties of the given object in the Properties tab.
     *
     * @param {String} objectId ID of the object
     */
    showObjectProperties(objectId: string);

    /**
     * Sets whether or not the given objects are visible.
     *
     * @param {String[]} objectIds IDs of objects.
     * @param {Boolean} visible True to set objects visible, false to set them invisible.
     */
    setObjectsVisible(objectIds: string[], visible: boolean);

    /**
     * Sets the visibility of all objects.
     *
     * @param {Boolean} visible True to set objects visible, false to set them invisible.
     */
    setAllObjectsVisible(visible: boolean);

    /**
     * Sets whether or not the given objects are X-rayed.
     *
     * @param {String[]} objectIds IDs of objects.
     * @param {Boolean} xrayed Whether or not to X-ray the objects.
     */
    setObjectsXRayed(objectIds: string[], xrayed: boolean);

    /**
     * Sets whether or not all objects are X-rayed.
     *
     * @param {Boolean} xrayed Whether or not to set all objects X-rayed.
     */
    setAllObjectsXRayed(xrayed: boolean);

    /**
     * Sets whether or not the given objects are selected.
     *
     * @param {String[]} objectIds IDs of objects.
     * @param {Boolean} selected Whether or not to set the objects selected.
     */
    setObjectsSelected(objectIds: string[], selected: boolean);

    /**
     * Sets whether or not all objects are selected.
     *
     * @param {Boolean} selected Whether or not to set all objects selected.
     */
    setAllObjectsSelected(selected: boolean);

    _withObjectsInSubtree(objectIds: string[], callback: Function);

    /**
     * Flies the camera to fit the given object in view.
     *
     * @param {String} objectId ID of the object
     * @param {Function} done Callback invoked on completion
     */
    flyToObject(objectId: string, done: Function);

    /**
     * Flies the camera to fit the given objects in view.
     *
     * @param {String[]} objectIds IDs of the objects
     * @param {Function} done Callback invoked on completion
     */
    viewFitObjects(objectIds: string[], done: Function);

    /**
     * Flies the camera to fit all objects in view.
     *
     * @param {Function} done Callback invoked on completion
     */
    viewFitAll(done: Function);

    /**
     * Jumps the camera to fit the given object in view.
     *
     * @param {String} objectId ID of the object
     */
    jumpToObject(objectId: string);

    /**
     * Sets the camera to the given position.
     *
     * @param {Number[]} [params.eye] Eye position.
     * @param {Number[]} [params.look] Point of interest.
     * @param {Number[]} [params.up] Direction of "up".
     */
    setCamera(params: { eye?: number[], look?: number[], up?: number[] });

    /**
     * Fits the given models in view.
     *
     * @param {String[]} modelIds ID of the models.
     * @param {Function} [done] Callback invoked on completion. Will be animated if this is given, otherwise will be instantaneous.
     */
    viewFitModels(modelIds: string[], done: Function);

    /**
     * Opens the specified viewer tab.
     *
     * The available tabs are:
     *
     *  * "models" - the Models tab, which lists the models available within the currently loaded project,
     *  * "objects" - the Objects tab, which contains a tree view for each loaded model, organized to indicate the containment hierarchy of their objects,
     *  * "classes" - the Classes tab, which contains a tree view for each loaded model, with nodes grouped by IFC types of their objects,
     *  * "storeys" - the Storeys tab, which contains a tree view for each loaded model, with nodes grouped within ````IfcBuildingStoreys````, sub-grouped by their IFC types, and
     *  * "properties" - the Properties tab, which shows property sets for a given object.
     *
     * @param {String} tabId ID of the tab to open - see method description.
     */
    openTab(tabId: string);

    _openTab(element, tabSelector);

    /**
     * Returns the ID of the currently open viewer tab.
     *
     * The available tabs are:
     *
     *  * "models" - the Models tab, which lists the models available within the currently loaded project,
     *  * "objects" - the Objects tab, which contains a tree view for each loaded model, organized to indicate the containment hierarchy of their objects,
     *  * "classes" - the Classes tab, which contains a tree view for each loaded model, with nodes grouped by IFC types of their objects,
     *  * "storeys" - the Storeys tab, which contains a tree view for each loaded model, with nodes grouped within ````IfcBuildingStoreys````, sub-grouped by their IFC types,
     *  * "properties" - the Properties tab, which shows property sets for a given object, and
     *  * "none" - no tab is open; this is unlikely, since one of the above tabs should be open at a any time, but here for robustness.
     */
    getOpenTab(): string;

    /**
     * Switches the viewer between 2D and 3D viewing modes.
     *
     * @param {Boolean} enabled Set true to switch into 3D mode, else false to switch into 2D mode.
     * @param {Function} done Callback to invoke when switch complete. Supplying this callback causes an animated transition. Otherwise, the transition will be instant.
     */
    set3DEnabled(enabled: boolean, done: Function);

    /**
     * Gets whether the viewer is in 3D or 2D viewing mode.
     *
     * @returns {boolean} True when in 3D mode, else false.
     */
    get3DEnabled(): boolean;


    /**
     * Sets whether IFCSpace types are ever shown.
     *
     * @param {Boolean} shown Set true to allow IFCSpaces to be shown, else false to always keep them hidden.
     */
    setSpacesShown(shown: boolean);

    /**
     * Gets whether the viewer allows IFCSpace types to be shown.
     *
     * @returns {boolean} True to allow IFCSpaces to be shown, else false to always keep them hidden.
     */
    getSpacesShown(): boolean;

    /**
     * Sets whether the viewer is in orthographic viewing mode.
     *
     * The viewer is either in orthographic mode or perspective mode. The viewer is in perspective mode by default.
     *
     * @param {Boolean} enabled Set true to switch into ortho mode, else false to switch into perspective mode.
     * @param {Function} done Callback to invoke when switch complete. Supplying this callback causes an animated transition. Otherwise, the transition will be instant.
     */
    setOrthoEnabled(enabled: boolean, done: Function);

    /**
     * Gets whether the viewer is in orthographic viewing mode.
     *
     * The viewer is either in orthographic mode or perspective mode. The viewer is in perspective mode by default.
     *
     * @returns {boolean} True when in ortho mode, else false when in perspective mode.
     */
    getOrthoEnabled(): boolean;

    /**
     * Transitions the viewer into an isolated view of the given building storey.
     *
     * Does nothing and logs an error if no object of the given ID is in the viewer, or if the object is not an ````IfcBuildingStorey````.
     *
     * @param {String} storeyObjectId ID of an ````IfcBuildingStorey```` object.
     * @param {Function} [done] Optional callback to invoke on completion. When provided, the transition will be animated, with the camera flying into position. Otherwise, the transition will be instant, with the camera jumping into position.
     */
    selectStorey(storeyObjectId: string, done: Function);

    /**
     * Saves viewer state to a BCF viewpoint.
     *
     * This does not save information about the project and model(s) that are currently loaded. When loading the viewpoint,
     * the viewer will assume that the same project and models will be currently loaded (the BCF viewpoint specification
     * does not contain that information).
     *
     * Note that xeokit's {@link Camera#look} is the **point-of-interest**, whereas the BCF ````camera_direction```` is a
     * direction vector. Therefore, we save ````camera_direction```` as the vector from {@link Camera#eye} to {@link Camera#look}.
     *
     * @param {*} [options] Options for getting the viewpoint.
     * @param {Boolean} [options.spacesVisible=false] Indicates whether ````IfcSpace```` types should be forced visible in the viewpoint.
     * @param {Boolean} [options.openingsVisible=false] Indicates whether ````IfcOpening```` types should be forced visible in the viewpoint.
     * @param {Boolean} [options.spaceBoundariesVisible=false] Indicates whether the boundaries of ````IfcSpace```` types should be visible in the viewpoint.
     * @param {Boolean} [options.reverseClippingPlanes=false] When ````true````, clipping planes are reversed (https://github.com/buildingSMART/BCF-XML/issues/193)
     * @param {Boolean} [options.defaultInvisible=false] When ````true````, will save the default visibility of all objects
     * as ````false````. This means that when we load the viewpoint again, and there are additional models loaded that
     * were not saved in the viewpoint, those models will be hidden when we load the viewpoint, and that only the
     * objects in the viewpoint will be visible.
     * @returns {*} BCF JSON viewpoint object
     * @example
     *
     * const viewpoint = bimViewer.saveBCFViewpoint({
     *     spacesVisible: false,          // Default
     *     spaceBoundariesVisible: false, // Default
     *     openingsVisible: false         // Default
     * });
     *
     * // viewpoint will resemble the following:
     *
     * {
     *     perspective_camera: {
     *         camera_view_point: {
     *             x: 0.0,
     *             y: 0.0,
     *             z: 0.0
     *         },
     *         camera_direction: {
     *             x: 1.0,
     *             y: 1.0,
     *             z: 2.0
     *         },
     *         camera_up_vector: {
     *             x: 0.0,
     *             y: 0.0,
     *             z: 1.0
     *         },
     *         field_of_view: 90.0
     *     },
     *     lines: [],
     *     clipping_planes: [{
     *         location: {
     *             x: 0.5,
     *             y: 0.5,
     *             z: 0.5
     *         },
     *         direction: {
     *             x: 1.0,
     *             y: 0.0,
     *             z: 0.0
     *         }
     *     }],
     *     bitmaps: [],
     *     snapshot: {
     *         snapshot_type: png,
     *         snapshot_data: "data:image/png;base64,......"
     *     },
     *     components: {
     *         visibility: {
     *             default_visibility: false,
     *             exceptions: [{
     *                 ifc_guid: 4$cshxZO9AJBebsni$z9Yk,
     *                 originating_system: xeokit.io,
     *                 authoring_tool_id: xeokit/v1.0
     *             }]
     *        },
     *         selection: [{
     *            ifc_guid: "4$cshxZO9AJBebsni$z9Yk",
     *         }]
     *     }
     * }
     */
    saveBCFViewpoint(options: any);

    /**
     * Sets viewer state to the given BCF viewpoint.
     *
     * This assumes that the viewer currently contains the same project and model(s) that were loaded at the time that the
     * viewpoint was originally saved (the BCF viewpoint specification does not contain that information).
     *
     * Note that xeokit's {@link Camera#look} is the **point-of-interest**, whereas the BCF ````camera_direction```` is a
     * direction vector. Therefore, when loading a BCF viewpoint, we set {@link Camera#look} to the absolute position
     * obtained by offsetting the BCF ````camera_view_point````  along ````camera_direction````.
     *
     * When loading a viewpoint, we also have the option to find {@link Camera#look} as the closest point of intersection
     * (on the surface of any visible and pickable {@link Entity}) with a 3D ray fired from ````camera_view_point```` in
     * the direction of ````camera_direction````.
     *
     * @param {*} bcfViewpoint  BCF JSON viewpoint object or "reset" / "RESET" to reset the viewer, which clears SectionPlanes,
     * shows default visible entities and restores camera to initial default position.
     * @param {*} [options] Options for setting the viewpoint.
     * @param {Boolean} [options.rayCast=true] When ````true```` (default), will attempt to set {@link Camera#look} to the closest
     * point of surface intersection with a ray fired from the BCF ````camera_view_point```` in the direction of ````camera_direction````.
     * @param {Boolean} [options.immediate=true] When ````true```` (default), immediately set camera position.
     * @param {Boolean} [options.duration] Flight duration in seconds.  Overrides {@link CameraFlightAnimation#duration}.
     * @param {Boolean} [options.reset=true] When ````true```` (default), set {@link Entity#xrayed} and {@link Entity#highlighted} ````false```` on all scene objects.
     * @param {Boolean} [options.reverseClippingPlanes=false] When ````true````, clipping planes are reversed (https://github.com/buildingSMART/BCF-XML/issues/193)
     * @param {Boolean} [options.updateCompositeObjects=false] When ````true````, then when visibility and selection updates refer to composite objects (eg. an IfcBuildingStorey),
     * then this method will apply the updates to objects within those composites.
     */
    loadBCFViewpoint(bcfViewpoint: any, options: any);

    /**
     * Resets the view.
     *
     * This resets object appearances (visibility, selection, highlight and X-ray), sets camera to
     * default position, and removes section planes.
     */
    resetView();

    /**
     * Enables or disables the various buttons and controls throughout the viewer.
     *
     * This also makes various buttons appear disabled.
     *
     * @param {Boolean} enabled Whether or not to disable the controls.
     */
    setControlsEnabled(enabled: boolean);

    /**
     * Sets whether or not keyboard camera control is enabled.
     *
     * This is useful when we don't want key events over the canvas to clash with other UI elements outside the canvas.
     *
     * Default value is ````true````.
     *
     * @param {Boolean} enabled Set ````true```` to enable keyboard input.
     */
    setKeyboardEnabled(enabled: boolean);

    /**
     * Gets whether keyboard camera control is enabled.
     *
     * This is useful when we don't want key events over the canvas to clash with other UI elements outside the canvas.
     *
     * Default value is ````true````.
     *
     * @returns {Boolean} Returns ````true```` if keyboard input is enabled.
     */
    getKeyboardEnabled();

    /**
     * Clears sections.
     *
     * Sections are the slicing planes, that we use to section models in order to see interior structures.
     */
    clearSections();

    /**
     * Inverts the direction of sections.
     */
    flipSections();

    /**
     * Hides the section edition control, if currently shown.
     */
    hideSectionEditControl();

    /**
     * Returns the number of sections that currently exist.
     *
     * sections are the sliceing planes, that we use to slice models in order to see interior structures.
     *
     * @returns {Number} The number of sections.
     */
    getNumSections(): number;

    /**
     * Destroys the viewer, freeing all resources.
     */
    destroy();
}