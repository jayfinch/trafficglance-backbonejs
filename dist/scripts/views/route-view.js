define(["require","backbone","q","q/queue","lodash","../templates/route","../models/traffic-model","./chart-view"],function(e){var t=e("backbone"),i=e("q"),n=e("q/queue"),r=e("lodash"),s=e("../templates/route"),a=e("../models/traffic-model"),o=e("./chart-view"),c=t.View.extend({className:"route col-sm-6 col-md-4",events:{"click .refresh":"onClickRefresh","click canvas":"onClickRefresh"},render:function(){if(this.$el.html(s.renderSync(this.model.toJSON())),this.model.get("travelDurationByCongestion")){var e=new o({el:this.$(".chart"),model:this.model});return e.render()}return this.model.get("fetchingTraffic")&&this.$("img").addClass("rotate"),i()},onClickRefresh:function(e){e.preventDefault(),this.updateRouteWithTraffic()},updateRouteWithTraffic:function(){return this.model.get("fetchingTraffic")?void 0:(this.clearTrafficData(),this.disableFetching(),this.render().then(r.bind(this.fetchTrafficModel,this)).then(r.bind(this.populateTrafficData,this)).then(r.bind(this.queueRenderTask,this)).then(r.bind(this.enableFetching,this)).fail(function(e){console.log(e)}).done())},queueRenderTask:function(){return c.addTask(r.bind(this.render,this))},fetchTrafficModel:function(){var e=i.defer(),t=new a({coords:this.model.get("segments")});return t.fetch({dataType:"jsonp",jsonp:"jsonp",success:r.bind(function(){e.resolve(t)},this),error:r.bind(function(t,i,n){e.reject(new Error(n))},this)}),e.promise},clearTrafficData:function(){this.model.set({travelDurationStats:!1,travelDurationByCongestion:!1,travelWarnings:[]})},populateTrafficData:function(e){var t=r.extend({},e.formatResults());this.model.set(t)},disableFetching:function(){this.model.set({fetchingTraffic:!0})},enableFetching:function(){this.model.set({fetchingTraffic:!1})}});return c.staticQueue=new n,c.staticQueue.put(),c.addTask=function(e){return c.staticQueue.get().then(e).fin(c.staticQueue.put)},c});
//# sourceMappingURL=route-view.js.map