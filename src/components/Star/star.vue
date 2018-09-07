<template>
    <div class="star" :class="'star-'+size">
        <span class="star-item" v-for="(starClass, index) in starClasses" :class="starClass" :key="index"></span>
    </div>
</template>

<script>
    // 类名常量
    const CLASS_ON = 'on'
    const CLASS_HALF = 'half'
    const CLASS_OFF = 'off'
    export default {
        props:{
            size:Number,
            score:Number
        },
        computed:{
             /*
                3.2: 3 + 0 + 2
                4.7: 4 + 1 + 0
            */
            starClasses(){
                // 该方法产生一个数组starArr来表示on half off类名的span数量（总长度为5）
                const {score} = this
                const starArr = []
                // 向starArr中添加n个CLASS_ON
                const scoreInteger = Math.floor(score)
                for(let i = 0;i<scoreInteger;i++){
                    starArr.push(CLASS_ON)
                }
                // 向starArr中添加0/1个CLASS_HALF
                if((score-scoreInteger)*10 >= 5){
                    starArr.push(CLASS_HALF)
                }
                // 向starArr中添加n个CLASS_OFF
                while(starArr.length<5){
                    starArr.push(CLASS_OFF)
                }
                return starArr
            }
        }
    }
</script>

<style lang='less'>
.star{
    float: left;
    font-size :0;
    .star-item{
        display: inline-block;
        background-repeat: no-repeat;
    }
    &.star-48{
        .star-item{
            width :20px;
            height :20px;
            margin-right: 22px;
            background-size: 20px 20px;
            &:last-child{
                margin-right: 0;
            }
            &.on{
                background-image:url('./images/star48_on@2x.png');
                @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
                     background-image: url('./images/star48_on@3x.png');
                }
            }
            &.half{
                background-image:url('./images/star48_half@2x.png');
                @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
                     background-image: url('./images/star48_half@3x.png');
                }
            }
            &.off{
                background-image:url('./images/star48_off@2x.png');
                @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
                     background-image: url('./images/star48_off@3x.png');
                }
            }
        }
    }
    &.star-36{
        .star-item{
            width :15px;
            height :15px;
            margin-right: 6px;
            background-size: 15px 15px;
            &:last-child{
                margin-right: 0;
            }
            &.on{
                background-image:url('./images/star36_on@2x.png');
                 @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
                     background-image: url('./images/star36_on@3x.png');
                }
            }
            &.half{
                background-image:url('./images/star36_half@2x.png');
                 @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
                     background-image: url('./images/star36_half@3x.png');
                }
            }
            &.off{
                background-image:url('./images/star36_off@2x.png');
                 @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
                     background-image: url('./images/star36_off@3x.png');
                }
            }
        }
    }
    &.star-24{
        .star-item{
            width :10px;
            height :10px;
            margin-right: 3px;
            background-size: 10px 10px;
            &:last-child{
                margin-right: 0;
            }
            &.on{
                background-image:url('./images/star24_on@2x.png');
                @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
                     background-image: url('./images/star24_on@3x.png');
                }
            }
            &.half{
                background-image:url('./images/star24_half@2x.png');
                @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
                     background-image: url('./images/star24_half@3x.png');
                }
            }
            &.off{
                background-image:url('./images/star24_off@2x.png');
                @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio: 3){
                     background-image: url('./images/star24_off@3x.png');
                }
            }
        }
    }
}
</style>