/**
 * Created by wmy on 2017/4/21.
 */
$(function(){
    var prodComp = (function () {
        var Product = function (id,name,img,quantity) {
            this.id = id;
            this.name = price;
            this.price = price;
            this.img = img;
            this.quantity = 1;
        };
        var cart = {
            totalQuatity : 0,
            totalAmount : 0,
            productList : [],
            addCart : function(product){
                this.totalAmount += product.quantity*product.price;
                this.totalQuatity += product.quantity;
                $("#money").html(this.totalAmount);
            },
            removeCart : function(){

            }
        };
        var productCopm = {
            $loading : $("#loading"),
            $loadMore : $("#load-more"),
            $productList : $("#product-list"),
            isLoad : true,
            pageNo : 1,
            init : function(){
                var _this = this;
                this.loadData();
                this.$productList.on('click','.btn-add-cart', function () {
                    var product = $(this).parents('.product-item').data('item-data');
                    product.quantity = parseInt($(this).prev().val());
                    cart.addCart(product);
                });
                this.$loadMore.on('click', function () {
                    _this.loadMore();
                });
            },
            render : function(){
                $("#quantity").html(cart.totalQuatity);
                $("#money").html(cart.totalAmount);
            },
            loadData : function(option,callback){
                var param = $.extend({page:this.pageNo},option);
                this.$loading.show();
                $.get('product/get_products',param, function (data) {
                    for(var i =0;i<data.products.length;i++){
                        var products = data.products;
                        var product = new Product(products[i].prod_id, products[i].prod_name, products[i].prod_price, products[i].prod_img);
                        var productHtml = template('product-tp1',product);
                        var $product = $(productHtml);
                        $product.data('item-data',product);
                        this.$productList.append($product);
                    }
                    this.$loading.hide();
                    this.$loading.show();
                    this.isLoaded = true;
                    this.isEnd = data.isEnd;
                    callback && callback();
                }.bind(this),'json');
            },
            loadMore : function(){
                var _this = this;
                if(this.isEnd){
                    alert("没有数据了!");
                    return;
                }
                if(this.isLoaded){
                    this.pageNo++;
                    this.isLoaded = false;
                    this.loadData({
                        cateId: navComp.categoryId,
                        tagId: navComp.tagId
                    });
                }
            },
            clear: function () {
                this.pageNo = 1;
                this.$productList.empty();
            }
        };
        return productCopm;
    })();
    prodComp.init();

    var navComp = (function () {

        var navComp = {
            init: function () {
                var _this = this;
                $('#nav .main-menu > a').on('click', function () {
                    navComp.categoryId = $(this).data('cate');
                    navComp.tagId = $(this).data('tag');
                    prodComp.clear();
                    prodComp.loadData({
                        cateId: navComp.categoryId,
                        tagId: navComp.tagId
                    });
                });
            }
        };
        return navComp;
    })();
    navComp.init();
});

