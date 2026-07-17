/** Mutable module singleton (not React state) holding the mouse position projected onto the
 *  word-cloud's world-space plane — updated once per frame by CameraRig, read every physics
 *  step by every InstancedWordGroup for repulsion. A plain object avoids threading a ref through
 *  ~46 sibling components just to share one continuously-updating value. */
export type MouseWorldState = { x: number; y: number; z: number; active: boolean };

export const mouseWorld: MouseWorldState = { x: 0, y: 0, z: 0, active: false };
