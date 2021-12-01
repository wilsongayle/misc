Type.registerNamespace('Trisept.UI.Web.Search.Components.Restool');
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent=function() {
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.get_path();},
GetOriginMarkets:function(vendorCode,packageCode,destinationCode,filterOrgs,plCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetOriginMarkets',true,{vendorCode:vendorCode,packageCode:packageCode,destinationCode:destinationCode,filterOrgs:filterOrgs,plCode:plCode},succeededCallback,failedCallback,userContext); },
GetDestinationMarkets:function(vendorCode,packageCode,originCode,regionCode,themeIds,specialId,filterDests,plCode,supplierCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetDestinationMarkets',true,{vendorCode:vendorCode,packageCode:packageCode,originCode:originCode,regionCode:regionCode,themeIds:themeIds,specialId:specialId,filterDests:filterDests,plCode:plCode,supplierCode:supplierCode},succeededCallback,failedCallback,userContext); },
GetDestinationWithRegionMarkets:function(vendorCode,packageCode,originCode,regionCode,themeIds,specialId,filterDests,plCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetDestinationWithRegionMarkets',true,{vendorCode:vendorCode,packageCode:packageCode,originCode:originCode,regionCode:regionCode,themeIds:themeIds,specialId:specialId,filterDests:filterDests,plCode:plCode},succeededCallback,failedCallback,userContext); },
GetVehicalPickUpLocation:function(vendorCode,packageCode,destinationCode,carCompanyCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetVehicalPickUpLocation',false,{vendorCode:vendorCode,packageCode:packageCode,destinationCode:destinationCode,carCompanyCode:carCompanyCode},succeededCallback,failedCallback,userContext); },
GetVehicalDropOffLocation:function(vendorCode,packageCode,destinationCode,carCompanyCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetVehicalDropOffLocation',false,{vendorCode:vendorCode,packageCode:packageCode,destinationCode:destinationCode,carCompanyCode:carCompanyCode},succeededCallback,failedCallback,userContext); },
GetNearbyEntities:function(vendorCode,packageCode,destinationCode,nearbyEntityCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetNearbyEntities',false,{vendorCode:vendorCode,packageCode:packageCode,destinationCode:destinationCode,nearbyEntityCode:nearbyEntityCode},succeededCallback,failedCallback,userContext); },
GetFarePreference:function(vendorCode,packageCode,origin,destination,cabinCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetFarePreference',false,{vendorCode:vendorCode,packageCode:packageCode,origin:origin,destination:destination,cabinCode:cabinCode},succeededCallback,failedCallback,userContext); },
GetVehicleRentalCompanies:function(vendorCode,packageCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetVehicleRentalCompanies',false,{vendorCode:vendorCode,packageCode:packageCode},succeededCallback,failedCallback,userContext); },
GetHotelBrands:function(vendorCode,packageCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetHotelBrands',false,{vendorCode:vendorCode,packageCode:packageCode},succeededCallback,failedCallback,userContext); },
GetDateOffsets:function(vendorCode,originCode,destinationCode,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetDateOffsets',false,{vendorCode:vendorCode,originCode:originCode,destinationCode:destinationCode},succeededCallback,failedCallback,userContext); }}
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.registerClass('Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent',Sys.Net.WebServiceProxy);
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance = new Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent();
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.set_path = function(value) { Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.set_path(value); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.get_path = function() { return Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.get_path(); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.set_timeout = function(value) { Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.set_timeout(value); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.get_timeout = function() { return Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.get_timeout(); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.set_defaultUserContext = function(value) { Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.set_defaultUserContext(value); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.get_defaultUserContext = function() { return Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.get_defaultUserContext(); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.set_defaultSucceededCallback = function(value) { Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.set_defaultSucceededCallback(value); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.get_defaultSucceededCallback = function() { return Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.get_defaultSucceededCallback(); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.set_defaultFailedCallback = function(value) { Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.set_defaultFailedCallback(value); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.get_defaultFailedCallback = function() { return Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.get_defaultFailedCallback(); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.set_enableJsonp = function(value) { Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.set_enableJsonp(value); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.get_enableJsonp = function() { return Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.get_enableJsonp(); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.set_jsonpCallbackParameter = function(value) { Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.set_jsonpCallbackParameter(value); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.get_jsonpCallbackParameter = function() { return Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.get_jsonpCallbackParameter(); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.set_path("/Search/RestoolConfiguration.asmx");
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetOriginMarkets= function(vendorCode,packageCode,destinationCode,filterOrgs,plCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetOriginMarkets(vendorCode,packageCode,destinationCode,filterOrgs,plCode,onSuccess,onFailed,userContext); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetDestinationMarkets= function(vendorCode,packageCode,originCode,regionCode,themeIds,specialId,filterDests,plCode,supplierCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetDestinationMarkets(vendorCode,packageCode,originCode,regionCode,themeIds,specialId,filterDests,plCode,supplierCode,onSuccess,onFailed,userContext); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetDestinationWithRegionMarkets= function(vendorCode,packageCode,originCode,regionCode,themeIds,specialId,filterDests,plCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetDestinationWithRegionMarkets(vendorCode,packageCode,originCode,regionCode,themeIds,specialId,filterDests,plCode,onSuccess,onFailed,userContext); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetVehicalPickUpLocation= function(vendorCode,packageCode,destinationCode,carCompanyCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetVehicalPickUpLocation(vendorCode,packageCode,destinationCode,carCompanyCode,onSuccess,onFailed,userContext); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetVehicalDropOffLocation= function(vendorCode,packageCode,destinationCode,carCompanyCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetVehicalDropOffLocation(vendorCode,packageCode,destinationCode,carCompanyCode,onSuccess,onFailed,userContext); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetNearbyEntities= function(vendorCode,packageCode,destinationCode,nearbyEntityCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetNearbyEntities(vendorCode,packageCode,destinationCode,nearbyEntityCode,onSuccess,onFailed,userContext); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetFarePreference= function(vendorCode,packageCode,origin,destination,cabinCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetFarePreference(vendorCode,packageCode,origin,destination,cabinCode,onSuccess,onFailed,userContext); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetVehicleRentalCompanies= function(vendorCode,packageCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetVehicleRentalCompanies(vendorCode,packageCode,onSuccess,onFailed,userContext); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetHotelBrands= function(vendorCode,packageCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetHotelBrands(vendorCode,packageCode,onSuccess,onFailed,userContext); }
Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent.GetDateOffsets= function(vendorCode,originCode,destinationCode,onSuccess,onFailed,userContext) {Trisept.UI.Web.Search.Components.Restool.RestoolConfigurationComponent._staticInstance.GetDateOffsets(vendorCode,originCode,destinationCode,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
if (typeof(Trisept.UI.Web.Search.Components.Restool.Result) === 'undefined') {
Trisept.UI.Web.Search.Components.Restool.Result=gtc("Trisept.UI.Web.Search.Components.Restool.Result");
Trisept.UI.Web.Search.Components.Restool.Result.registerClass('Trisept.UI.Web.Search.Components.Restool.Result');
}
if (typeof(Trisept.UI.Web.Search.Components.Restool.ResultWithRegion) === 'undefined') {
Trisept.UI.Web.Search.Components.Restool.ResultWithRegion=gtc("Trisept.UI.Web.Search.Components.Restool.ResultWithRegion");
Trisept.UI.Web.Search.Components.Restool.ResultWithRegion.registerClass('Trisept.UI.Web.Search.Components.Restool.ResultWithRegion');
}
if (typeof(Trisept.UI.Web.Search.Components.Restool.OffsetResult) === 'undefined') {
Trisept.UI.Web.Search.Components.Restool.OffsetResult=gtc("Trisept.UI.Web.Search.Components.Restool.OffsetResult");
Trisept.UI.Web.Search.Components.Restool.OffsetResult.registerClass('Trisept.UI.Web.Search.Components.Restool.OffsetResult');
}
