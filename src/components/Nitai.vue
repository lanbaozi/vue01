<template>
    <div class="container">
        <div class="item">
            <div>
                <img src="../assets/images/lz.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/wx.png" alt="">
            </div>
            <span>微信</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/rl.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/youtube.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/dx.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/sz.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/txl.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/facebook.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/llq.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/xc.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/xj.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/QQ.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/lz.png" alt="">
            </div>
            <span>录音机</span>
        </div>
        <div class="item">
            <div>
                <img src="../assets/images/lz.png" alt="">
            </div>
            <span>录音机</span>
        </div>
    </div>
</template>

<style scoped>
        .container{
            width: 764px;
            height: 591px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            background-color: #efeeee;
            color: #7f7ca1;
            font-size: 14px;
        }
        .item{
            width: 150px;
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;
        }
        .item div{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            width: 100px;
            border-radius: 20px;
            box-shadow: 10px 10px 25px #bdbcbc8e,
                        -10px -10px 20px white;
            margin-bottom: 15px;
        }
        .item div:hover{
            box-shadow: -10px -10px 20px white inset,
                        10px 10px 20px #bdbcbc8e inset,2px 2px 3px #bdbcbc8e,
                        -2px -2px 3px white;
        }
        .item div:hover img{
            height: 40px;
            width: 40px;
        }
        .item img{
            height: 50px;
            width: 50px;
            transition: 1s;
        }
    </style>