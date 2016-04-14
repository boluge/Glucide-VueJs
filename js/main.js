import Vue from 'vue'

/*--- Vue ---*/
import MealsList from './vues/MealsList.vue'

/* eslint-disable no-new */
new Vue({
    el:'body',
    components: {
        mealslist: MealsList
    }
})
