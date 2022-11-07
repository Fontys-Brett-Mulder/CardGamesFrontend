<template>
  <div id="game-popup" ref="popup">
    <v-icon name="io-close-outline" scale="2" @click="close"/>
    <div class="popup-content-wrapper">
      <div class="popup-content-info">
        <img class="popup-image"
             src="src/assets/images/card-game-tile.png"/>
        <h1> {{ game.name }} </h1>
        <h3> {{ game.difficulty }} </h3>
        <h3 v-if="checkIfMinMaxPlayersIsSet(game)">Players: {{game.minPlayers}} - {{game.maxPlayers}}</h3>
      </div>
      <router-link @click="createSession" :to="{ path: '/game/' + game.id }" style="text-decoration: none; color: inherit;" id="game-popup-button" class="default-button">
        Start Spel
      </router-link>
    </div>


  </div>
</template>

<script lang="ts">
import {GameModel} from "../../models/Game";
import {OhVueIcon} from "oh-vue-icons";

export default {
  components: {
    "v-icon": OhVueIcon
  },
  props: {
    game: GameModel
  },
  methods: {
    close() {
      this.$emit('closeModal', 'fefw');
    },
    createSession(){
      this.$emit('createSession', 'fefw');
    },
    checkIfMinMaxPlayersIsSet(game: GameModel){
      if (game.minPlayers == null || game.maxPlayers == null){
        return false;
      }

      return !(game.minPlayers == 0 || game.maxPlayers == 0);
    }
  }
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

#game-popup {
  position: absolute;
  height: 50%;
  width: 80%;

  background-color: var(--color-hub-tint);
  border-radius: 10px;
  border: 1px solid var(--color-text);

}
.popup-content-wrapper{
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
}

.popup-content-info{
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.popup-image{
  width: 50%;
}

#game-popup-button{
  background-color: var(--color-white);
  position: absolute;
  bottom: 50px;
  width: 90%;
}

</style>