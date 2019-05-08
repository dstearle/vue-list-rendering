<template>
    <div class="container">
        <h2 class="py-5">Top 10 Isla Sorna Dinosaurs</h2>
        <ul class="list-group">
            <li class="list-group-item" v-for="dinosaur in topTenDinosaurs">{{ dinosaur }}</li>            
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
                return {
                    topTenDinosaurs: [
                        "Brachiosaurus",
                        "Stegosaurus",
                        "Ankylosaurus",
                        "T-Rex",
                        "Velociraptor",
                        "Pachycephalosaurus",
                        "Spinosaurus",
                        "Compsaugnathus",
                        "Mamenchisaurus",
                        "Parasaurolophus",
                    ],
                }
            }
    }
</script>

