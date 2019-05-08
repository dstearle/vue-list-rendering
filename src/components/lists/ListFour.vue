<template>
    <div class="container" id="app">
        <h2 class="py-5">Top Jurassic Park 10 Herbivores</h2>
        <ul class="list-group">
            <li v-for="(score, dinosaurs) of topTenHerbivores" class="list-group-item d-flex justify-content-between align-items-center">
                {{ dinosaurs }}
                <span class="badge badge-primary badge-pill">{{ score }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                topTenHerbivores: {
                    "Brachiosaurus": 100,
                    "Stegosaurus": 96,
                    "Ankylosaurus": 95,
                    "Triceratops": 94,
                    "Mamenchisaurus": 93,
                    "Stygimoloch": 91,
                    "Gallimimus": 89,
                    "Corythosaurus": 89,
                    "Pachycephalosaurus": 88,
                    "Veggiesaurus": 87
                },
            }
        }
    }
</script>

