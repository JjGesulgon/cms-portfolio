<template>
    <div class="history-box">
        <b-container fluid class="p-4 text-center history-box-container">
            <h3 class="history-box-title">A Little History...</h3>
            <p class="history-box-content">I started as a game developer back in 2015 and opened a game studio after graduating college. I left the game industry 
                after almost 2 years because I wanted to explore other stuff. I eventually ended up building business applications
                with C# and MSSQL in 2016, then finally found my passion for web development with Laravel and Vue.js shortly after. And as technology
                is continually changing, we'll see what comes next.
            </p>

            <p class="history-box-content2">Currently working with the Laravel + vue.js stack and the concept of SPA with a REST API behind the scenes.
            </p>
        </b-container>
    </div>
</template>
<style scoped>
    div >>> p {
        font-family: 'Raleway', sans-serif !important;
    }
    .history-box{
        background-color: #101010;
    }
    .history-box-content{
        /* margin-top: 10em;
        margin-bottom: 10em; */
        color: white;
        text-align: left;
        font-weight: 300;
        /* margin-left: 40em;
        margin-right: 40em; */
    }

    .history-box-container{
        padding-left: 40em !important;
        padding-right: 40em !important;
    }

    .history-box-content2{
        margin-bottom: 5em;
        color: white;
        text-align: left;
        font-weight: 300;
        /* margin-left: 40em;
        margin-right: 40em; */
    }

    .history-box-title{
        /* font-weight: lighter; */
        font-weight: 300;
        color: white;
        margin-bottom: 2em;
        text-align: left;
        /* margin-left: 25em; */
        padding-top: 2em !important;
        font-family: 'Raleway', sans-serif !important;
    }
    @media (max-width: 1624px) {
         .history-box-container{
            padding-left: 3em !important;
            padding-right: 3em !important;
        }
    }

    @media (min-width: 3700px){
        .history-box-container{
            padding-left: 30% !important;
            padding-right: 30% !important;
        }
    }
</style>
<script>
    export default {
        
    }
</script>