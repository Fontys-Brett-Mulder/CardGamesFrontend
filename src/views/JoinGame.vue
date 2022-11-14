<template>
  <div id="join-game" class="page">
    <h1>Deel mee aan spel</h1>
    <h2>Game pin:</h2>
    <input v-model="gamePinRef" class="default-input" placeholder="12345A">
    <div style="text-decoration: none; color: inherit;" class="default-button" v-on:click="addCurrentGameToStorage(gamePinRef)">
      Deel mee
    </div>

  </div>
</template>

<script lang="ts">
import {onMounted, ref} from "vue";
import {SessionStorageManager} from "../classes/SessionStorage/SessionStorageManager";
import axios from "axios";
import {GameModel} from "../models/Game";
import {PlayerModel} from "../models/Player";
import {SessionModel} from "../models/Session";
import {GuidGenerator} from "../classes/GuidGenerator";

export default {
  data() {
    return {
      player: {} as PlayerModel,
      gamePinRef: ref(null)
    }
  },
  components: {

  },
  methods: {
    addCurrentGameToStorage(gamePin: any) {
      axios.post("https://localhost:7001/api/Player/" + gamePin, this.player).then(() => {
        console.log("Posted")
      })
    }
  },
  mounted() {
    const sessionManager = new SessionStorageManager();
    const guidGenerator = new GuidGenerator();

    const fillPlayerData = () => {
      this.player.id = guidGenerator.createGuid();
      this.player.isHost = false;
      this.player.name = sessionStorage.getItem("playerName");
    }


    fillPlayerData()
  }
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

#join-game {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>