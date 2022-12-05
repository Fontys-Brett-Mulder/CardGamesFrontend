import {PlayerModel} from "./Player";

export class SessionModel {
    id: string;
    gamePin: number;
    gameId: string;
    started: boolean;
    currentPlayer: string;
    playerWon: string;
    players: PlayerModel[]

    constructor(id: string,
                gamePin: number,
                gameId: string,
                started: boolean,
                currentPlayer: string,
                playerWon: string,
                players: PlayerModel[],) {

        this.id = id;
        this.gamePin = gamePin;
        this.gameId = gameId;
        this.started = started;
        this.currentPlayer = currentPlayer;
        this.playerWon = playerWon;
        this.players = players;
    }
}

