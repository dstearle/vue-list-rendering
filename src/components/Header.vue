    
<template>
    
    <ul class="nav nav-pills">
        
        <router-link to="/" tag="li" active-class="active" exact><button type="button" class="btn btn-outline-dark">Home</button></router-link>
                       
        <router-link to="/listOne" tag="li"><button type="button" class="btn btn-outline-success">List One</button></router-link>

        <router-link to="/listTwo" tag="li"><button type="button" class="btn btn-outline-warning">List Two</button></router-link>

        <router-link to="/listThree" tag="li"><button type="button" class="btn btn-outline-danger">List Three</button></router-link>

        <router-link to="/listFour" tag="li"><button type="button" class="btn btn-outline-info">List Four</button></router-link>

        <router-link to="/listFive" tag="li"><button type="button" class="btn btn-outline-primary">List Five</button></router-link>

        <router-link to="/listSix" tag="li"><button type="button" class="btn btn-outline-dark">List Six</button></router-link>
                               
    </ul>
    
</template>