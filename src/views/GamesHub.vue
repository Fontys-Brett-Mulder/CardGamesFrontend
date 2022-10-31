<template>
  <div id="games-hub" class="page">
    <!--New Games-->
    <div class="new-games-wrapper">
      <h1 style="padding: 10px">Maak een nieuw spel</h1>
      <div class="games-wrapper">
        <GameTile @click="showModalHandler(item)"
                  v-for="item in games"
                  :key="item.id"
                  :GameName="item.name"
                  :Difficulty="item.difficulty"
                  :GameId="item.id"
                  Imagepath="Hello"
        />
      </div>

    </div>
    <router-link :to="{ path: '/joingame' }" style="text-decoration: none; color: inherit;" class="default-button">
      Deel mee aan bestaand spel
    </router-link>

    <GamePopup @closeModal="closeModalHandler" v-if="showModal === true" :game="selectedGame" tabindex="0"/>

  </div>
</template>

<script lang="ts">
import {SessionStorageManager} from "../classes/SessionStorage/SessionStorageManager";
import GameTile from "@/components/Games/GameTile.vue";
import axios from "axios";
import {GameModel} from "../models/Game";
import GamePopup from "@/components/Popups/GamePopup.vue";

export default {
  data() {
    return {
      games: [] as Array<GameModel>,
      player: "" as string,
      showModal: false as boolean,
      selectedGame: {} as GameModel
    }
  },
  components: {
    GameTile,
    GamePopup
  },
  methods: {
    /**
     * Saves the selected game to the localstorage
     * @param game
     */
    saveGameToLocalstorage: function (game: GameModel) {
      sessionStorage.setItem("currentGameId", game.id.toString());
      this.createNewGamePin();
    },
    /**
     * Created a new game pin
     */
    createNewGamePin: function () {
      let randomNumber = Math.floor(100000 + Math.random() * 900000);
      sessionStorage.setItem("gamePin", randomNumber.toString());
    },
    /**
     * Show the model for viewing more info about the selected game
     * @param game
     */
    showModalHandler: function (game: GameModel) {
      this.selectedGame = game;
      if (!this.showModal) {
        this.showModal = true;
      }
      console.log(this.selectedGame)
    },
    closeModalHandler: function () {
      this.showModal = false;
      this.selectedGame = {};
    },
  },
  mounted() {
    /**
     * Defining properties, classes
     */
    const sessionManager = new SessionStorageManager();
    this.player = sessionManager.getItem("playerName");

    /**
     * Get all the games and assign to this.games
     */
    const getGamesData = () => {
      console.log("Hello");
      axios.get('https://localhost:7099/api/Games/getAllGames')
          .then((resp) => {
                this.games = resp.data;
              }
          )
    }

    /**
     * Call all functions
     */
    getGamesData();
  },
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

#games-hub {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.new-games-wrapper {
  text-align: center;
  height: 80%;
}

.games-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>