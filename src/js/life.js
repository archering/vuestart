var vm = new Vue({
    el:"#abc",
    data:{
        desc:" 下面描述的是一个vue 实例的完整声明周期：",
        title:"woai zhongguo1"
    },
    methods:{
        triggerUpdate:function(){
            this.title = "abcd";
        },
        destroy:function(){
            vm.$destroy();
        }
    },
    beforeCreate:function(){
        console.log("beforeCreate");
    },
    created:function(){
        
        console.log("created",this.desc);
    },
    beforeMount:function(){
        console.log("beforeMount",this.$el.innerHTML);
    },
    mounted:function(){
        console.log("mounted",this.$el.innerHTML);
    },
    beforeUpdate:function(){
        console.log("beforeUpdate", this.$el.querySelectorAll("h4")[0].innerHTML,this.title);
    },
    updated:function(){
        console.log("updated",this.$el.querySelectorAll("h4")[0].innerHTML,this.title);
    },
    beforeDestroy:function(){
        console.log("beforeDestroy",this.$el.innerHTML);
    },
    destroyed:function(){
        console.log("destroyed",this.$el.innerHTML);
    }
});