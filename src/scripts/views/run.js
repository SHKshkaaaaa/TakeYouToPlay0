var tplRun = require('../templates/run.string');
  var util = require('../utils/fn.js');

  SPA.defineView('run',{
    html:tplRun,
    plugins:['delegated',{
         name:'avalon',
         options:function(vm){
          vm.run = [];
         }
    }],
    init:{
      vm:null,
      runArray:[],
      customerSwiper:null,
      homeHotSwiper:null,
      formatData: function(arr){
        var tempArr = [];
        return tempArr;
      }
    },
    bindActions:{
      'goto.home': function(e,data){
            this.hide();

      },

      'switch.tabs':function(e,data){
        //  this.customerSwiper.slideTo($(e.el).index());
          // util.setFocus(e.el);
          // this.modules.content.launch(data.tag);
    	}
    },
     bindEvents:{

          'show':function(){
            //  var vm = this.getVM();
            //  var d = this.param.data;
            //  console.log(d);
              var that = this;
               that.vm = that.getVM();
            $.ajax({

               url:'/TakeYouToPlay/mock/run.json',
              //  url:'/api/getLivelist.php',
              type:'get',
              data:{
                rtype:'run'
              },
              success:function(rs){
               that.runArray = rs.data;
               that.vm.run= that.formatData(rs.data);
              console.log( that.vm.run);

              }
            });
        }
      }
        // 'show':function(){
        // var that = this;
        //
        //    that.customerSwiper = new Swiper('#customer-swiper',{
        //         loop:false,
        //         onSlideChangeStart:function(swiper){
        //         var index = swiper.activeIndex;
        //         var $lis = $('#customer-coach li');
        //         util.setFocus($lis.eq(index));
        //         }
        //     });
        //
        //
        //
        //
        // var scrollSize = 30;
        // var myScroll = this.widgets.homeHotScroll;
        // myScroll.scrollBy(0,-scrollSize);
        //
        // myScroll.on('scroll',function(){
        //        var y = this.y,
        //        maxY = this.maxScrollY - y;
        //
        // });
        // myScroll.on('scrollEnd',function(){
        //   // if(this.y>= -scrollSize  && this.y<0){
        //   //   myScroll.scrollTo(0, -scrollSize);
        //   // }
        //    var maxY = this.maxScrollY-this.y;
        //    var self = this;
        //    if(maxY > -scrollSize && maxY<0){
        //        myScroll.scrollTo(0, self.maxScrollY + scrollSize);
        //    }else if (maxY >=0){
        //      $.ajax({
        //         url:'/TakeYouToPlay/mock/run.json',
        //         //  url:'/api/getLivelist.php',
        //          data:{
        //            rtype:'more'
        //          },
        //          success:function(rs){
        //               var newArray = that.runtArray.concat(rs.data);
        //               that.vm.livelist = that.formatData(newArray);
        //               that.runArray = newArray;
        //          }
        //      });
        //
        //    }
        //
        //
        //
        // })
        //
        //
        //
        // }


 });
