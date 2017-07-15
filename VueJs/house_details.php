<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>房源详情</title>
    <meta name="description" content="悦居是家居分享社区，倡导精彩、健康、温馨的慢生活;追求品位，个性独特的乐活分子们都在这里，分享对美的诠释，分享自制精品，分享淘到的佳品。">
    <base href="<?php echo site_url(); ?>">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/house_details.css">
    <link rel="stylesheet" href="css/datedropper.css">
    <link rel="stylesheet" href="css/style.css">
    <!--	<link rel="stylesheet" href="css/postMessage.css">-->
    <link rel="stylesheet" href="css/dialog.css">
    <link rel="stylesheet" href="css/login7.css">
    <style>
        .pagination{
            text-align: center;
        }
        .paginate-button{
            background-color: #EFF2F7;
            border: 1px solid #EFF2F7;
            display: inline-block;
            line-height: 1.42857;
            margin-left: 1px;
            padding: 6px 12px;
            position: relative;
            text-decoration: none;
            color: #535351;
            cursor: pointer;
        }
        .paginate-button.active{
            background-color: #65CEA7;
            border-color: #65CEA7;
            color: #fff;
        }
    </style>
</head>
<body>
<!-- 弹出层 -->
<div id="maskStyle" class="maskStyle">
</div>
<div class="bdsharebuttonbox boxContent" data-tag="share_1">
    <h2 class="poppingTitles">悦居精品房，你值得拥有！</h2>
    <div class="linkBox">
        <a class="bds_weixin" data-cmd="weixin"></a>
        <a class="bds_qzone" data-cmd="qzone"></a>
        <a class="bds_tsina" data-cmd="tsina"></a>
        <a class="bds_baidu" data-cmd="baidu"></a>
        <a class="bds_renren" data-cmd="renren"></a>
        <a class="bds_tqq" data-cmd="tqq"></a>
        <a class="bds_more" data-cmd="more">更多</a>
    </div>
</div>
<?php include "header.php" ?>
<?php include "leave_message.php" ?>
<div class="infoMain" id="infoMain">
    <!-- 房源详情左侧展示start -->
    <div class="leftContent">
        <!-- 房源图片展示部分start -->
        <div class="albumPic">
            <!-- 大图片区域start -->
            <div id="albumBig" class="albumBig">
                <img id="albumBigPic" src="<?php echo $allBigImgs[0]->img_src ?>" alt="">
            </div>
            <!-- 大图片区域end -->
            <!-- 小图片区域start -->
            <div class="albumPanel">
                <div id="albumWrap" class="albumWrap">
                    <span id="arrowsUp" class="arrowsUp" onselectstart="return false;">up</span>
                    <span id="arrowsDown" class="arrowsDown" onselectstart="return false;">down</span>
                    <ul>
                        <?php
                        foreach ($allImgs as $house) {
                            echo '<li class="currentPic"> ';
                            echo '<img src="' . $house->thumb_src . '" alt="">';
                            echo '</li>';
                        }
                        ?>
                    </ul>
                </div>
            </div>
            <!-- 小图片区域end -->
        </div>
        <!-- 房源图片展示部分end -->
        <!-- 房源信息介绍start -->
        <div class="houseInfo">
            <div class="houseTitle">
                <p><?php echo $allInfo[0]->title ?></p>
                <span><?php echo $allInfo[0]->city ?><em>&gt</em><?php echo $allInfo[0]->street ?>
                    <em>&gt</em><?php echo $allInfo[0]->street ?></span>
            </div>
            <div class="listInfo">
                <ul>
                    <li>
                        <span class="listTitle">房间类型</span>
                        <div class="detailInfo">
                            <p class="detailInfoLeft">房间面积：<span><?php echo $allInfo[0]->area ?></span>平方米</p>
                            <p class="detailInfoRight">房间类型：<span><?php echo $allInfo[0]->bedroom ?>
                                    室<?php echo $allInfo[0]->livingroom ?>厅<?php echo $allInfo[0]->lavatory ?>卫 </span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <span class="listTitle">入住须知</span>
                        <div class="detailInfo">
                            <p><?php echo $allInfo[0]->notice ?></p>
                        </div>
                    </li>
                    <li>
                        <span class="listTitle">交通情况</span>
                        <div class="detailInfo">
                            <p><?php echo $allInfo[0]->traffic ?></p>
                        </div>
                    </li>
                    <li>
                        <span class="listTitle">基础设备</span>
                        <div class="detailInfo">
                            <?php
                            foreach ($allFacilitys_free as $facility) {
                                echo '<a> ';
                                echo '<img src="' . $facility->icon . '" alt="">';
                                echo '<em>' . $facility->name . '</em>';
                                echo '</a>';
                            }
                            ?>
                        </div>
                    </li>
                    <li>
                        <span class="listTitle">可付费设备</span>
                        <div class="detailInfo">
                            <?php
                            foreach ($allFacilitys_Nofree as $facilitys) {
                                echo '<a> ';
                                echo '<img src="' . $facilitys->icon . '" alt="">';
                                echo '<em>' . $facility->name . '</em>';
                                echo '</a>';
                            }
                            ?>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 房源信息介绍end -->
        <!-- 基础信息和房源点评start -->
        <div class="otherInfo" id="other-info">
            <div class="otherNav">
                <span id="baseNav" class="baseNav" :class="{currentBorder: currentIndex == 0}" @click="switchTab(0)">房源信息</span>
                <span id="commentNav" class="commentNav" :class="{currentBorder: currentIndex == 1}" @click="switchTab(1)">房源点评</span>
                <span id="mapNav" class="mapNav" :class="{currentBorder: currentIndex == 2}" @click="switchTab(2)">百度地图</span>
            </div>
            <div class="otherContent">
                <!-- 基础信息start -->
                <div id="baseInfo" class="baseInfo" v-show="currentIndex == 0">
                    <p><?php echo $allInfo[0]->description ?></p>
                    <img class="baseInfoPicLeft" src="img/baseInfoPicLeft.png" alt="">
                    <img class="baseInfoPicRight" src="img/baseInfoPicRight.png" alt="">
                </div>
                <!-- 基础信息end -->
                <!-- 房源点评start -->
                <div id="commentInfo" class="commentInfo" v-show="currentIndex == 1">
                    <ul>
                        <li class="commentInfoList" v-for="comment in commentList">
                            <div class="commentUser">
                                <a href="">
                                    <img :src="comment.portrait" alt="">
                                </a>
                                <span v-text="comment.username"></span>
                            </div>
                            <figure>
                                <p v-text="comment.content"></p>
                                <div class="imgGather">
                                    <img :src="commentImg.img_thumb_src" alt="" v-for="commentImg in comment.comment_imgs">
                                    <span class="imgGatherTime" v-text="comment.comm_time"></span>
                                </div>
                            </figure>
                        </li>
                    </ul>
                    <pagination :page-size="pageSize" :total="total" v-on:paginate="loadData"></pagination>
                </div>
                <!-- 房源点评end -->
                <!--地图信息start-->
                <div style="width:640px;height:300px;border:#ccc solid 1px; display:none;" id="dituContent" v-show="currentIndex == 2"></div>
                <!--地图信息end -->
            </div>
        </div>
        <!-- 基础信息和房源点评end -->
    </div>
    <!-- 房源详情左边展示end -->


    <!-- 房源详情右侧展示start -->
    <div class="rightContent">
        <!-- 预约订购信息start -->
        <div class="orderWrap">
            <h3><strong>￥<?php echo $allInfo[0]->price ?></strong>元/月</h3>
            <div class="orderBox">
                <form action="javascript:;">
                    <ul>
                        <li class="dateList">
                            <div class="checkInTime">
                                <span>入住日期</span>
                                <div class="demoTime">
                                    <p><input type="text" class="sang_Calender" placeholder="年/月/日"/></p>
                                </div>
                            </div>
                            <div class="unsubscribeTime">
                                <span>退房日期</span>
                                <div class="demoTime">
                                    <p><input type="text" class="sang_Calender" placeholder="年/月/日"/></p>
                                </div>
                            </div>
                        </li>
                        <li class="currentStyle reserveBtn">
                            <input type="submit" class="submit_order" value="马上预定">
                        </li>
                        <li id="subscribeBtn" class="currentStyle subscribeBtn">
                            <input type="submit" value="预约看房">
                            <div class="subscribeBtnList">
                                <ul>
                                    <li class="phoNum">
                                        <span>电话：</span>123465789
                                    </li>
                                    <li>
                                        <a href="tencent://message/?uin=492340844&Site=A5%E4%B8%8B%E8%BD%BD&Menu=yes">
                                            <span>QQ：</span>123456789
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tencent://message/?uin=492340844&Site=A5%E4%B8%8B%E8%BD%BD&Menu=yes">
                                            <span>QQ：</span>123456789
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="linkTool">
                            <a class="collectBtn">收藏</a>
                            <a class="shareBtn" onclick="showMask()">分享</a>
                        </li>
                    </ul>
                </form>
            </div>

        </div>
        <!-- 预约订购信息end -->
        <!-- 推荐房源start -->
        <div class="recommendRoom">
            <h3>推荐房源</h3>
            <ul>
                <li>
                    <a href="#">
                        <img src="img/recommendPic.png" alt="">
                    </a>
                    <div class="recommendInfo">
                        <p class="easyTitle">精装修电梯房 <span>南岗</span></p>
                        <p class="wordIntroduce">独立卫浴独立厨房独立独立独立独立独立独立独立卫浴独立厨房独立独立独立独立</p>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <img src="img/recommendPic.png" alt="">
                    </a>
                    <div class="recommendInfo">
                        <p class="easyTitle">精装修电梯房 <span>南岗</span></p>
                        <p class="wordIntroduce">独立卫浴独立厨房独立独立独立独立独立独立独立卫浴独立厨房独立独立独立独立</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 推荐房源end -->


    </div>
    <!-- 房源详情右侧展示end -->
</div>
<?php include "postMessage.php" ?>
</div>

<?php include "footer.php" ?>
<script src="js/jquery-1.12.4.js"></script>
<script src="js/jquery.dialog7-1.0.js"></script>
<script src="js/datetime.js"></script>
<script src="http://api.map.baidu.com/api?key=&v=1.1&services=true"></script>
<script src="js/vue.min.js "></script>
<script src="js/axios.min.js"></script>
<script>
    $(".reserveBtn").on("click", function () {
        window.location = "<?php echo site_url();?>/welcome/submitorder";
    });

    //<pagination :page-size="pageSize" :total="total"></pagination>


    Vue.component('pagination',{
        template: '<ul class="pagination">\
                    <li class="paginate-button" :class="{active: currPage == page}" v-for="page in pageNo" @click="paginate(page)">{{page}}</li>\
                   </ul>',
        props: ['pageSize', 'total'],
        data: function () {
          return {
              currPage: 1
          };
        },
        computed: {
            pageNo: function () {
                return Math.ceil(this.total / this.pageSize);
            }
        },
        methods: {
            paginate: function (page) {
                if(this.currPage == page) return;
                this.currPage = page
                this.$emit('paginate', page);
            }
        }
    });



    new Vue({
        el: '#other-info',
        data: {
            commentList: [],
            currentIndex: 0,
            pageSize: 3,
            total: 0
        },
        methods: {
            switchTab: function (index) {
                this.currentIndex = index;
                if(index == 1){
                    this.loadData(1);
                }
            },
            loadData: function (page) {
                var _this = this;
                axios.get('house/get_comments/'+<?php echo $this->uri->segment(3);?>, {
                    params: {
                        page: page,
                        pageSize: _this.pageSize
                    }
                }).then(function (res) {
                    var result = res.data;
                    _this.total = result.total;
                    _this.commentList = result.data;
                });
            }
        }
    });
</script>
</body>
</html>