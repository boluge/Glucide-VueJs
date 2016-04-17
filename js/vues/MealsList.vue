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
        <p>{{meals}}</p>
    </div>
</template>

<script>
    import Json from '../class/Json.js';

    export default {
        props: ['json'],
        data() {
            return {
                meals: new Json(this.json)
            }
        },
        computed: {
            toto () {
                return 'Yo ça marche !'
            }

        }
    }
</script>
