<template>
    <div>
        <h1>{{name}}</h1>

        <!-- <button @click="getxxx">button</button><br> -->
        <button @click="sendSchoolName">method2,3</button><br>
        <button @click="unbind">unbind</button><br>

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
        // 方法1：
        props:["getxxx"],

        // 方法2：
        methods:{
            sendSchoolName(){
                // !!触发@printName事件,传递参数
                this.$emit('printName',this.name,666,888)
            },
            unbind(){
                console.log('解绑自定义事件printName');
                this.$off('printName')      // 单个
                // this.$off(['printName'])    // 多个
                // this.$off()     // 所有
            }
        }
    }
</script>