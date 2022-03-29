<template>
    <div>
        <h1>{{name}}</h1>
        <h3>{{name}}</h3>
    </div>
</template>

<script>
    export default {
        name:'School-',
        data:function(){
            return {
                name: 'school',
            }
        },
        mixins:['mixin']
    }
</script>