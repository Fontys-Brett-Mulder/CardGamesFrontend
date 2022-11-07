import {v4 as uuid} from "uuid";

/**
 * Guid handler
 */
export class GuidGenerator{
    /**
     * Create a new Guid
     */
    createGuid(){
        return uuid();
    }
}
