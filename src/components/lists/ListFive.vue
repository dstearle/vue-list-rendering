<template>

    <div class="container">

        <!-- Title -->
        <h2 class="py-5">Top 10 Dinosaurs</h2>

        <table class="table table-bordered">

            <!-- Table Headers -->
            <tr>
                <th>Dinosaur</th>
                <th>InGen Score</th>
                <th>Biosyn Score</th>
                <th>Overall Score</th>
            </tr>

            <!-- Table Rows -->
            <tr v-for="dinosaur of topTenDinosaurs" v-bind:key="dinosaur.name">
                <td>{{ dinosaur.name }}</td>
                <td>{{ dinosaur.ingen }}</td>
                <td>{{ dinosaur.biosyn }}</td>
                <td>{{ dinosaur.overall }}</td>
            </tr>

        </table>

    </div>

</template>

<script>

    export default {

        data() {
            
            return {

                topTenDinosaurs: [

                    { name: "Brachiosaurus", ingen: null, biosyn: 100, overall: 100 },
                    { name: "T-Rex", ingen: 96, biosyn: 97, overall: 96 },
                    { name: "Velociraptor", ingen: 92, biosyn: 98, overall: 95 },
                    { name: "Stegosaurus", ingen: null, biosyn: 94, overall: 94 },
                    { name: "Triceratop", ingen: 100, biosyn: 87, overall: 93 },
                    { name: "Carnotaurus", ingen: 89, biosyn: 94, overall: 91 },
                    { name: "Apatosaurus", ingen: 90, biosyn: 89, overall: 89 },
                    { name: "Stygimoloch", ingen: 91, biosyn: 88, overall: 89 },
                    { name: "Ceratosaurus", ingen: 84, biosyn: 92, overall: 88 },
                    { name: "Gallimimus", ingen: 91, biosyn: 83, overall: 87 }

                ]

            }

        }

    }

</script>

