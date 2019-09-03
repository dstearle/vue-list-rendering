<template>

    <div class="container">

        <!-- List Title -->
        <h2 class="py-5">Top 10 Jurassic Park Carnivores</h2>

        <p>The list below sorts and unsorted array from lowest score to highest...</p>

        <p>Click on "Score" to sort the list from ascending or descending order!</p>

        <!-- Table -->
        <table class="table table-bordered table-striped">

            <!-- Table Header -->
            <thead class="thead-dark">

                <tr>
                    <!-- Title For Table -->
                    <th>Carnivore</th>

                    <!-- Toggle For Score -->
                    <th @click="toggle" :class="['sort-control', sortType]">Score</th>

                </tr>

            </thead>

            <!-- Table Body -->
            <tbody>

                <!-- Table Rows -->
                <tr v-for="predator of topTenCarnivoresSorted" v-bind:key="predator.name">

                    <!-- Name -->
                    <td>{{ predator.name }}</td>

                    <!-- Score -->
                    <td>{{ predator.score }}</td>

                </tr>

            </tbody>
            
        </table>

    </div>

</template>

<script>

    export default {

        data() {

            return {

                // Array to be displayed in the list
                topTenCarnivores: [

                    { name: "Ceratosaurus", score: 88 },
                    { name: "T-Rex", score: 100 },
                    { name: "Spinosaurus", score: 95 },
                    { name: "Proceratosaurus", score: 87 },
                    { name: "Velociraptor", score: 96 },
                    { name: "Dilophosaur", score: 91 },
                    { name: "Succhomimus", score: 89 },
                    { name: "Metricanthosaurus", score: 89 },
                    { name: "Carnotaurus", score: 93 },
                    { name: "Acrocanthosaurus", score: 89}

                ],

                order: 1

                }

        },

        computed: {

            // Orders the list in the topTenCarnivores array by score
            topTenCarnivoresSorted () {

                return this.topTenCarnivores.sort((a, b) => (a.score - b.score) * this.order);

            },

            // Puts the sorted list into either an ascending or descending order
            sortType () {

                return this.order === 1 ? 'ascending' : 'descending';

            }

        },

        methods: {

            // Toggles the list from ascending to descending order

            toggle () {

                return this.order *= -1;

            }

        }

    }

</script>

<style>

    .sort-control {
        cursor: pointer;
    }

    .ascending::after {
        content: "\25b2";
    }

    .descending::after {
        content: "\25bc";
    }

</style>