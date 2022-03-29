<template>
    <div>

        <button @click="send">获取数据</button><br>
    </div>
</template>

<script>
// 解决请求跨域问题：
// 1.cors
// 2.jsonp
// 3.代理服务器
// 
// 
    export default {
        name:'School-',
        methods:{
            send(){
                this.$http('http://localhost:8080/api/text').then(
                    response =>{
                        console.log(response.data);
                    },
                    error =>{
                        console.log(error.message);
                    }
                )
            } 
        }
    }
</script>