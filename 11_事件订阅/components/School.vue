<template>
    <div>
        <button @click="sendData">
            This is School, send data to App
        </button><br>

    </div>
</template>

<script>
import PubSub from 'pubsub-js'
    export default {
        name:'School-',
        methods:{
            sendData(){
                PubSub.publish('hello',[11,22,33])
            }
        }
    }
</script>