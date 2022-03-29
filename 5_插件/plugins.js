// 用于增强Vue,给全局增加功能，公司开发里面经常使用
//使用方法 见main.js文件

export default{
    install(Vue,a,b,c){
        // 1.可以接收自定义属性
        console.log(a,b,c);
        // 2.全局过滤器
        Vue.filters('',function(value){
            return value.slice(0,4);
        });

        // 3.自定义全局指令
        Vue.deactivated('fbind',{});

        // 4.加入全局混合
        Vue.mixins();  

        // 5.添加原型属性和方法
        Vue.prototype.$myProperty = 'xxx';
        Vue.prototype.$myMethod = ()=>{alert('111')}; 

    }
}