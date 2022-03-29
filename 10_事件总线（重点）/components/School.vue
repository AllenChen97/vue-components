<template>
    <div>
        <button @click="sendData">
            This is School, send data to App
        </button><br>

    </div>
</template>

<script>
    export default {
        name:'School-',
        methods:{
            sendData(){
                this.$bus.$emit('event',this.name,111,222,333)
            }
        }
    }
</script>