$(function () {
    // Vue.component('my-component', {
    //     template: '<div>A custom component!</div>'
    // });
    // var Child = {
    //     template: '<div>A custom component1!</div>'
    // };
    // var data = { counter: 0 };
    // Vue.component('simple-counter', {
    //     el:function(){
    //         return '#example'
    //     },
    //     template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    //     data: function () {
    //         return data
    //     }
    //
    // });
    // var vm = new Vue({
    //     el: '#example',
    //     components: {
    //         'my-component1': Child
    //     }
    // });
    // var newvm=new Vue({
    //     el:'#example1'
    // });
    //
    //
    // new Vue({
    //     el: '#example-2'
    // });
    Vue.component('child', {
        props: ['myMessage'],
        template: '<span>{{ myMessage }}</span>'
    })
    new Vue({
        el:'#example',
        data:{
            parentMsg:''
        }
    })

});