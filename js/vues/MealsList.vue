<style>
.mealslist {
    margin: 30px;
    background: #E3F2FD;
    padding: 5px 15px;
}
 h2 {
     color: #08c;
     font-family: sans-serif;
 }
</style>

<template>
    <div class="mealslist">
        <h2>Nom du repas</h2>
        <p>Glycémie + color + date + heure ++</p>
        <p>Adresse du json : <a href="{{json}}">{{json}}</a></p>
    </div>
</template>

<script>
    //import ajax from '../class/Json.js';
    var ajax = {
      created: function () {
        this.hello()
      },
      methods: {
        hello: function () {
          console.log('hello from mixin!')
        }
      }
    }

    export default {
        props: ['json'],
        mixins: [ajax],
        data() {
            return {
                meals: ajax
            }
        },
        computed: {
            toto () {
                return 'Yo ça marche !'
            }

        }
    }
</script>
