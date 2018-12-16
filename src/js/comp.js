
Vue.component("g-component",{
    template:"<div>"+
        "<h3>{{title}}</h3>"+
        "<slot name='begin'>123</slot>"+
        "<button @click='showAll()'>全部展现</button>"+
        "<button @click='showPart()'>部分展现</button>"+
        "<button @click='papaAlert()'>调用父类scope的方法</button>"+
        "<button @click='papaAlertWithparam(12345)'>调用父类scope的方法,带参数</button>"+
        "<li v-for='item in array'>"+
            '<img :src="item.url" width="100" height="100"></img>'+
            '<span class="left-me">'+
                '<div>{{item.title}}</div>'+
                '<div v-if="all">{{item.desc}}</div>'+
            '</span>'+
         '<slot :warning="warning"></slot>'+
        "</li>"+
        "</ul>"+
        "<slot name='end'>456</slot>"+
    "</div>",
    data:function(){
        return{
            title:"this is a global component",
            all:true
        }
    },
    methods:{
        showAll:function(){
            this.all = true;
        },
        showPart:function(){
            this.all = false;
        }
    },
    props:["array","warning","papaAlert","papaAlertWithparam"]
});


var vm = new Vue({
    el:"#abc",
    data:{
        num:123,
        name:"zhangdong",
        warning:"小心这是一条无关紧要的消息",
        array:[
               {url:"./imgs/1.jpg",desc:"男装123",title:"小兔子"},
               {url:"./imgs/2.jpg",desc:"男装456",title:"大兔子"},
               {url:"./imgs/3.jpg",desc:"男装",title:"大兔子，小兔子"}
              ]
    },
    methods:{
        papaAlert:function(){
            alert(this.name);
        },
        papaAlertWithparam:function(val){
            alert(val + "+" + 999 + "= " + (val+999));
        }
    }

});




Vue.component("sec-list",{
    template:"<div>"+
        "<h3>{{title}}</h3>"+
        "<slot name='begin'>123</slot>"+
        "<button @click='showAll()'>全部展现</button>"+
        "<button @click='showPart()'>部分展现</button>"+
        "<button @click='papaAlert()'>调用父类scope的方法</button>"+
        "<button @click='papaAlertWithparam(12345)'>调用父类scope的方法,带参数</button>"+
        "<component is='list-item'  :all='all' :warning='warning' :item='item' v-for='item in array'>"+
            '<template scope="props">'+
            '<div>'+
               ' <i>{{props.warning}}</i>'+
            '</div>'+
        '</template>'+       
        "</component>"+
        "</ul>"+
        "<slot name='end'>456</slot>"+
    "</div>",
    data:function(){
        return{
            title:"this is a global component",
            all:true
        }
    },
    methods:{
        showAll:function(){
            this.all = true;
        },
        showPart:function(){
            this.all = false;
        }
    },
    props:["array","warning","papaAlert","papaAlertWithparam"]
});


Vue.component("list-item",{
    template:"<li >"+
                '<img :src="item.url" width="100" height="100"></img>'+
                '<span class="left-me">'+
                        '<div>{{item.title}}</div>'+
                        '<div v-if="all">{{item.desc}}</div>'+
                    '</span>'+
                    '<slot :warning="warning"></slot>'+
                "</li>",
    props:["item","all","warning"]
});

var vm = new Vue({
    el:"#abc2",
    data:{
        num:123,
        name:"zhangdong",
        warning:"小心这是一条无关紧要的消息",
        array:[
               {url:"./imgs/1.jpg",desc:"男装123",title:"小兔子",id:"1"},
               {url:"./imgs/2.jpg",desc:"男装456",title:"大兔子",id:"2"},
               {url:"./imgs/3.jpg",desc:"男装",title:"大兔子，小兔子",id:"3"}
              ]
    },
    methods:{
        papaAlert:function(){
            alert(this.name);
        },
        papaAlertWithparam:function(val){
            alert(val + "+" + 999 + "= " + (val+999));
        }
    }


});





var vmd = new Vue({
    el:"#abd",
    data:{
        users:[
            {
                id:1,
                name:"zhang",
                age:20,
                grade:10
            },
            {
                id:2,
                name:"wang",
                age:21,
                grade:11
            },
            {
                id:3,
                name:"xiao zhang",
                age:22,
                grade:10
            },
            {
                id:4,
                name:"cui wang",
                age:21,
                grade:11
            }                         
        ]
    },
    methods:{

    },
    components:{
        "product-list":{
            template:'<table class="table table-striped">'+ 
                        '<thead>'+
                          '<tr>' +
                            '<th>First Name</th> <th>Last Name</th> <th>Username</th> '+
                         ' </tr> '+
                          '</thead> '+
                         ' <tbody>'+
                           '<tr> '+
                            '<td>Mark</td> <td>Otto</td> <td>@mdo</td> '+
                            '</tr> '+
                            '</tbody>'+
                         '</table>',
            props:["array"]             
        },
        "product-list-item":{
            template:'<tr> '+
            '<td>{{}}</td> <td>{{}}</td> <td>{{}}</td> '+
            '</tr> '
        }
    }
});