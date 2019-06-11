<template>
    <div class="container">
        <h2 class="py-5">Top 10 Isla Nublar Dinosaurs</h2>
        <ul class="list-group">
            <li 
            v-for="(dinosaur, index) of topTenDinosaurs" 
            v-bind:key="dinosaur"
            class="list-group-item d-flex justify-content-between align-items-center"
            >
                {{ dinosaur}}
                <span class="badge badge-primary badge-pill">{{ scores[index] }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
                return {
                    topTenDinosaurs: [
                    "T-Rex", "Brachiosaurus", "Stegosaurus", "Carnotaurus", "Allosaurus", "Stygimoloch", "Ankylosaurus", "Gallimimus", "Triceratops", "Compsaugnathus",
                ],
                scores: [
                    100, 96, 95, 94, 93, 91, 89, 89, 88, 87, 86
                ]
                }
            }
    }
</script>

