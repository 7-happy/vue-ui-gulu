//入口
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

//全局组件
Vue.component('g-button',Button);
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:'#app',
    data:{
        loading1:false
    }
})



import chai from 'chai'

const expect = chai.expect
//单元测试
{
    const constructor = Vue.extend(Button)
    const btn = new constructor({
        propsData:{
            icon:'settings'
        }
    })
    btn.$mount('#test')
    let useEl = btn.$el.querySelector('use')
    let href = useEl.getAttribute('xlink:href')
    expect(href).to.eq('#icon-settings')

}

//icon
{
    const constructor = Vue.extend(Button)
    const btn = new constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    })
    //内存中
    btn.$mount()
    let useEl = btn.$el.querySelector('use')
    let href = useEl.getAttribute('xlink:href')
    expect(href).to.eq('#icon-circle-loading')

}

{
    const div = document.createElement('div')
    document.body.appendChild(div)

    const constructor = Vue.extend(Button)
    const btn = new constructor({
        propsData:{
            icon:'settings'
        }
    })
    btn.$mount(div)
    let svg = btn.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
}

