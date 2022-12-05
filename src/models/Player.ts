export class PlayerModel{
    id: string;
    name: string;
    isHost: boolean;
    sessionModelId: string;

    constructor(id: string, name: string, isHost: boolean, sessionModelId: string) {
        this.id = id;
        this.name = name;
        this.isHost = isHost;
        this.sessionModelId = sessionModelId;
    }

}