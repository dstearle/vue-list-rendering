import Home from './components/Home.vue';
import Header from './components/Header.vue';

// Imports for the lists
import ListOne from './components/lists/ListOne.vue';
import ListTwo from './components/lists/ListTwo.vue';
import ListThree from './components/lists/ListThree.vue';
import ListFour from './components/lists/ListFour.vue';
import ListFive from './components/lists/ListFive.vue';
import ListSix from './components/lists/ListSix.vue';
import ListSeven from './components/lists/listSeven/ListSeven.vue';
import ListEight from './components/lists/listEight/ListEight.vue';
import ListNine from './components/lists/ListNine.vue';

export const routes = [
    
    // Default page set by ''
    { path: '', component: Home},

    { path: '', component: Header},
    
    { path: '/listOne', component: ListOne},

    { path: '/listTwo', component: ListTwo},

    { path: '/listThree', component: ListThree},

    { path: '/listFour', component: ListFour},

    { path: '/listFive', component: ListFive},

    { path: '/listSix', component: ListSix},

    { path: '/listSeven', component: ListSeven},

    { path: '/listEight', component: ListEight},

    { path: '/listNine', component: ListNine},
        
];