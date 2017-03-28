/**
 * Created by wmy on 2017/3/28.
 */
(function(app){
  app.AppModule =
    ng.core.NgModule({
      imports :[ng.platformBrowser.BrowserModule],
      declarations : [app.AppComponent],
      bootstrapModule: [ app.AppComponent ]
    })
      .Class({
        constructor : function(){}
      });
})(window.app||(window.app={}));
