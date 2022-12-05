<template>
  <div class="name-field" :style="styleObject">
    <h3>{{ playerName }}</h3>
    <CloseIcon v-if="isHost" @click="deletePlayer"/>
  </div>
</template>

<script lang="ts">
import {PlayerModel} from "../../models/Player";
import CloseIcon from "../Icons/Close.icon.vue";
import {stringify} from "querystring";

export default {
  data() {
    return {
      colors: [] as string[],
      styleObject: {
        backgroundColor: "" as string
      }
    }
  },
  components: {
    CloseIcon
  },
  props: {
    playerName: String,
    playerId: String,
    isHost: Boolean
  },
  methods: {
    getRandomColor() : string {
      return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
    deletePlayer() {
      this.$emit('deletePlayer', this.playerId)
    }
  },
  mounted() {
    this.colors = [
        "#3bcaa3",
        "#fcc342",
        "#f773f2",
        "#222f84",
        "#8d489d",
        "#c59828",
        "#0fe758",
        "#e405ed",
        "#f6c4f5",
        "#51d2e4",
        "#42e05b",
    ]

    this.styleObject.backgroundColor = this.getRandomColor()
  }
}
</script>

<style>
body {
  background-color: var(--color-hub-background);
}

.name-field {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>