<template>
    <div class="container">
        <h2 class="py-5">Top 10 Jurassic Park Carnivores</h2>
        <table class="table table-bordered table-striped">
            <thead class="thead-dark">
                <tr>
                    <th>Carnivore</th>
                    <th @click="toggle" :class="['sort-control', sortType]">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="predator of topTenCarnivoresSorted">
                    <td>{{ predator.name }}</td>
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
            topTenCarnivoresSorted () {
                return this.topTenCarnivores.sort((a, b) => (a.score - b.score) * this.order);
            },

            sortType () {
                return this.order === 1 ? 'ascending' : 'descending';
            }
        },
        methods: {
            toggle () {
                return this.order *= -1;
            }
        }
    }

</script>