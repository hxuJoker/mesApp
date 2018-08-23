<template>
    <div class="footer_guide">
        <span href="#" class="guide_item" :class="{on:'/miste'=== $route.path}" @click="goTo('/miste')">
            <span class="item_icon">
                <i class="iconfont icon-food"></i>
            </span>
            <span>外卖</span>
        </span>
        <span href="#" class="guide_item" :class="{on:'/search'=== $route.path}" @click="goTo('/search')">
            <span class="item_icon">
                <i class="iconfont icon-search"></i>
            </span>
            <span>搜索</span>
        </span>
        <span href="#" class="guide_item" :class="{on:'/order'=== $route.path}" @click="goTo('/order')">
            <span class="item_icon">
                <i class="iconfont icon-single"></i>
            </span>
            <span>订单</span>
        </span>
        <span href="#" class="guide_item" :class="{on:'/personal'=== $route.path}" @click="goTo('/personal')">
            <span class="item_icon">
                <i class="iconfont icon-user"></i>
            </span>
            <span>我的</span>
        </span>
    </div>
</template>

<script>
    export default {
        methods: {
            goTo(path) {
                this.$router.push(path);
            }
        },
        
    }
</script>

<style lang='less'>
    @import 'FooterGuider.less';
</style>