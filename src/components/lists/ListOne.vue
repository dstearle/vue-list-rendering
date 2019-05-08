<template>
    <div id="listOne">
        <body>
            <div class="container py-5">
                <ul class="list-group">
                    <li class="list-group-item" v-for="n in 5">{{ 'InGen List ' + n }}</li>
                </ul>
            </div>
        </body>
    </div>
</template>