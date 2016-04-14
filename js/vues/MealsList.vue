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
        <p>{{toto}}</p>
    </div>
</template>

<script>
    export default {
        props: ['json','meals','toto'],
        ready: function() {

        }
    }
</script>
<!--https://laracasts.com/discuss/channels/general-discussion/vuejs-1-->
