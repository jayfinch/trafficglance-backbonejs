define(["require","backbone","lodash","../models/config-model","moment"],function(e){var t=e("backbone"),n=e("lodash"),r=e("../models/config-model"),a=e("moment"),s=t.Model.extend({initialize:function(e){this.coords=e.coords,this.configModel=r.instance()},url:function(){var e="http://dev.virtualearth.net/REST/V1/Routes/Driving?&";return e+="distanceUnit="+this.configModel.get("units")+"&",n.each(this.coords,function(t,n){e+=t.type+"."+n+"="+t.coordLat+","+t.coordLong+"&"}),e+="key="+this.configModel.get("key")},_parseLegDetails:function(){var e=["Accident","BlockedRoad","Congestion","DisabledVehicle","Miscellaneous","Other","OtherTrafficIncidents","PlannedEvents","RoadClosures","RoadHazard","ScheduledConstruction","SeasonalClosures","Weather"],t=this.get("resourceSets")[0].resources[0],r=t.routeLegs,a=[],s=0,o=0,i=0,c=0;return n.each(r,function(t){var r=t.itineraryItems;n.each(r,function(t){t.warnings?n.each(t.warnings,function(r){if("TrafficFlow"===r.warningType)switch(r.severity){case"Minor":o+=t.travelDistance;break;case"Low Impact":o+=t.travelDistance;break;case"Moderate":i+=t.travelDistance;break;case"Serious":c+=t.travelDistance;break;default:s+=t.travelDistance}else n.contains(e,r.warningType)&&a.push(r.text)}):s+=t.travelDistance})}),{travelDurationByCongestion:{noCongestion:s,lowCongestion:o,moderateCongestion:i,seriousCongestion:c},travelWarnings:a}},_parseDurationStats:function(){var e=this.get("resourceSets")[0].resources[0].travelDurationTraffic,t=a.duration({seconds:e}),n=t.hours();t.subtract({hours:n});var r=t.minutes(),s=this.get("resourceSets")[0].resources[0].travelDistance;s=Math.round(10*s)/10;var o=a().add("s",e).format("h:mm a");return{travelDurationStats:{hours:n,minutes:r,distance:s,arriveTime:o}}},formatResults:function(){var e=this._parseDurationStats(),t=this._parseLegDetails(),r=n.extend(t,e);return r}});return s});
//# sourceMappingURL=traffic-model.js.map