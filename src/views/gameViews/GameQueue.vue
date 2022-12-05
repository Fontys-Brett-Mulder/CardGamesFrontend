<template>
  <div id="game-queue" class="page">
    <h1>{{ currentGame.name }}</h1>
    <h2>Gamepin: {{ gamePin }}</h2>
    <h1>Waiting for players..</h1>
    <ReloadIcon @click="getPlayersFromSession"/>
    <NameField @deletePlayer="deletePlayerFromSession(player.id)" v-for="player in playersInSession" :player-id="player.id" :player-name="player.name" :is-host="this.isHost"/>
  </div>
</template>

<script lang="ts">
import {SessionStorageManager} from "../../classes/SessionStorage/SessionStorageManager";
import axios from "axios";
import {GameModel} from "../../models/Game";
import {SessionModel} from "../../models/Session";
import {PlayerModel} from "../../models/Player";
import NameField from "../../components/Fields/NameField.vue";
import ReloadIcon from "../../components/Icons/Reload.icon.vue";

export default {
  data() {
    return {
      gamePin: "" as string,
      currentGame: {} as GameModel,
      currentSession: {} as SessionModel,
      playersInSession: [] as PlayerModel[],
      isHost: Boolean
    }
  },
  methods: {
    getSession(): void {
      axios.get('https://localhost:7001/api/Session/getSessionByPin/' + this.gamePin)
          .then((resp) => {
                this.currentSession = resp.data;
              }
          )
    },
    getGameData(): void {
      axios.get('https://localhost:7000/api/Games/getSpecificgame/' + this.currentSession.gameId)
          .then((resp) => {
                this.currentGame = resp.data;
              }
          )
    },
    getPlayersFromSession(): void {
      axios.get('https://localhost:7001/api/Session/players/' + this.currentSession.gamePin)
          .then((resp) => {
                this.playersInSession = resp.data;
              }
          )
    },
    deletePlayerFromSession(id: string): void {
      axios.delete("https://localhost:7001/api/Player?playerId=" + id + "&sessionId=" + this.currentSession.id).then(() => {
        this.getPlayersFromSession()
      })
      console.log(id)
      console.log(this.currentSession.id)
    }
  },
  components: {
    NameField,
    ReloadIcon,
  },
  mounted() {
    /**
     * Setup properties, classes etc
     */
    const sessionManager = new SessionStorageManager();
    this.gamePin = sessionManager.getItem("gamePin");
    this.currentGame.id = sessionManager.getItem("currentGameId");
    this.isHost = JSON.parse(sessionManager.getItem("isHost") as any);
    console.log(this.isHost)

    /**
     * Execute all function when mounted
     */
    this.getSession()
  },
  watch: {
    'currentSession': function (val: any, oldVal: any) {
      this.getGameData()
      this.getPlayersFromSession()
    },
  },
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

#game-queue {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>