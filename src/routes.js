import Home from './components/Home.vue';
//import Header from './components/Header.vue';

// Imports for the lists
import ListOne from './components/lists/ListOne.vue';
import ListTwo from './components/lists/ListTwo.vue';
import ListThree from './components/lists/ListThree.vue';
import ListFour from './components/lists/ListFour.vue';
import ListFive from './components/lists/ListFive.vue';

export const routes = [
    
    { path: '', component: Home},

    //{ path: '', component: Header},
    
    { path: '/listOne', component: ListOne},

    { path: '/listTwo', component: ListTwo},

    { path: '/listThree', component: ListThree},

    { path: '/listFour', component: ListFour},

    { path: '/listFive', component: ListFive},
        
];