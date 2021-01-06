<template>
    <button class="g-button" 
            :class="{[`icon-${iconPosition}`]:true}"
            @click="$emit('click1')">
        <!-- <slot name="button_click"></slot> -->

        <!-- 不传icon则默认不显示svg -->
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="loading icon" v-if="loading" name="circle-loading"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        //props:['icon','iconPosition']
        //另外的写法
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false
            },
            iconPosition:{
                type:String,
                default:'left',

                //既不是left 又不是right 
                validator(v) {
                    // if(v !== 'left' && v !== 'right'){
                    //     return false;
                    // }else{
                    //     return true;
                    // }

                    //优化写法
                    return v === 'left' || v ==='right';

                }
            }

        }
    }
</script>

<style scoped lang="scss">
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
    .loading {
        animation: spin 1s infinite linear;
    }

    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        // 对不齐 由display: inline-flex引起  解决方法是加下面的代码
        vertical-align: middle;

        &:hover {
        border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }
        &.icon-right {
            > .content {
                order: 1;
            }
            > .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
        }
    }
    
</style>