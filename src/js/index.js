var vm1 = new Vue({
    el:"#abc1",
    data:{
        hello:"hello world"
    }
});

var vm2 = new Vue({
    el:"#abc1",
    delimiters:["[[","]]"],
    data:{
        greet:"this is from vm2 through delimiter"
    }
});

var vm3 = new Vue({
    el:"#abc2",
    data:{
        arr:["china","japan","america"],
        url:"http://www.hao123.com"
    }
});

var vm4 = new Vue({
    el:"#abc3",
    data:{
        arr:["china","japan","america"],
        selected:[]
    }
});
var vm5 = new Vue({
    el:"#abc4",
    data:{
        arr:["china","japan","america"],
        selected:[],
        name:"",
        state:false
    },
    methods:{
        showalert:function(){
            alert(124);
        },
        submit:function(){
            this.state = true;
        },
        logout:function(e){
            this.state = false;
            this.name = "";
        }
    }
});

var vm6 = new Vue({
    el:"#abc5",
    data:{
        code:false,
        hot:true,
        fontSize:12,
        cla:{
            "block":true,
            "center":true
        },
        cla2:{
            "block":false,
            "cell":true,
            "center":true            
        },
        style1:{
            color:"red",
            border:"1px solid green"
        },
        style2:{
            padding:"20px",
            backgroundColor:"#ccc"
        }        
    },
    methods:{
        change:function(){
            this.code = !this.code;
            this.hot = !this.hot;
        }
    }
});

var vm7 = new Vue({
    el:"#abc6",
    data:{
        sec:null,
        fst:null,
        trd:null,
        input:"",
        list:[]
    },
    computed:{
        sum:function(){
            return parseFloat(this.fst) + parseFloat(this.sec);
        }
    },
    methods:{
        sum2:function(){
            return parseFloat(this.trd) + parseFloat(this.sec);
        }
    },
    watch:{
        input:function(n,o){
            if(n.indexOf("movie")>-1){
                this.list = ["abc","abd","cab"];
            }else if(n.indexOf("music")>-1){
                this.list = ["123abc","123abd","c123ab"];
            }else{
                this.list = [];
            }
        }
    }
});