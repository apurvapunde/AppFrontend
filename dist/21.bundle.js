webpackJsonp([21],{1390:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e,t){return{itemDetail:e.itemCreation.itemDetailData,itemListRelated:e.itemCreation.itemListRelated,itemListAlternative:e.itemCreation.itemListAlternative,itemListReplacement:e.itemCreation.itemListReplacement,projectList:e.documentCreation.projectList,imagePath:e.itemCreation.imagePath}}function m(e){return{actions:(0,O.bindActionCreators)(g,e),proActions:(0,O.bindActionCreators)(w,e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),u=a(0),c=r(u),f=a(3),p=a(7),h=r(p),v=a(4),E=(l(v),a(22)),N=l(E),b=l(E),y=a(196),g=l(y),D=a(1),S=r(D),I=a(76),_=r(I),P=a(6),O=a(5),M=a(9),C=r(M),k=a(8),T=r(k),Q=a(12),R=r(Q),F=a(582),L=r(F),j=a(585),V=(r(j),a(52)),w=l(V);a(10);var x=a(26),A=l(x),U=a(583),q=a(1511),H=r(q),W=a(77),Y=l(W),B=c.default.createElement(f.Link,{to:"/material"},"Materials"),G=c.default.createElement("i",{className:"fa fa-pencil"}),z=c.default.createElement("i",{className:"fa fa-trash-o"}),J=c.default.createElement("i",{className:"fa fa-pencil"}),K=c.default.createElement("i",{className:"fa fa-trash-o"}),X=c.default.createElement("div",{className:"portlet-title"},c.default.createElement("div",{className:"caption"},c.default.createElement("span",{className:"caption-subject bold uppercase"},"General Details"))),Z=c.default.createElement("span",{className:"fileinput-new"},"Select"),ee=c.default.createElement("span",{className:"fileinput-exists"},"Change"),te=c.default.createElement("input",{type:"hidden"}),ae=c.default.createElement("label",{htmlFor:"item_description"},"Description"),le=c.default.createElement("label",{htmlFor:"item_notes"},"Notes"),re=c.default.createElement("option",{value:"Upcoming"},"Upcoming"),ie=c.default.createElement("option",{value:"Active"},"Active"),se=c.default.createElement("option",{value:"Retired"},"Retired"),ne=c.default.createElement("option",{value:"Retiring"},"Retiring"),de=c.default.createElement("label",{htmlFor:"status"},"Status",c.default.createElement("span",{className:"required"},"*")),me=c.default.createElement("label",{htmlFor:"relatedItems"},"Related Items"),oe=c.default.createElement("label",{htmlFor:"relatedItems"},"Alternative Items"),ue=c.default.createElement("label",{htmlFor:"relatedItems"},"Replacement Items"),ce=c.default.createElement("div",{className:"caption"},c.default.createElement("span",{className:"caption-subject bold uppercase"},"Suppliers")),fe=c.default.createElement("thead",null,c.default.createElement("tr",null,c.default.createElement("th",null,"Supplier"),c.default.createElement("th",null,"List($)"),c.default.createElement("th",null,"Dealer($)"),c.default.createElement("th",null,"Demo($)"),c.default.createElement("th",null,"Lead Time"),c.default.createElement("th",null,"Price Date"),c.default.createElement("th",null,"Source"),c.default.createElement("th",null,"Action"))),pe=c.default.createElement("div",{className:"portlet-title tabbable-line"},c.default.createElement("div",{className:"caption"},c.default.createElement("span",{className:"caption-subject font-dark bold uppercase"},"Other Details"))),he=c.default.createElement("label",{htmlFor:"form_control_1"},"Created By"),ve=c.default.createElement("label",{htmlFor:"form_control_1"},"Created On"),Ee=c.default.createElement("label",{htmlFor:"form_control_1"},"Modified By"),Ne=c.default.createElement("label",{htmlFor:"form_control_1"},"Modified On"),be=c.default.createElement("label",{htmlFor:"Project"},"Project"),ye=function(e){function t(e,a){i(this,t);var l=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a));return l.state={itemDetail:"",projectValue:"",activeTabName:"tab1",projectOptions:[],priceScheduleDetails:[],supplierDetails:[],itemStateData:"",updateSupplierIndex:-1,relatedItemOptions:[],relatedItemValue:"",alternativeItemOptions:[],alternativeItemValue:"",replacementItemOptions:[],replacementItemValue:"",priceDateDisplay:"",locale:{format:"MM-DD-YYYY"},imagePath:"",imageChange:!1,breadcrumb:!0,headerText:"",priceScheduleIndex:""},(0,T.default)(l),l}return n(t,e),o(t,[{key:"componentWillMount",value:function(){var e=(localStorage.companyId,{itemId:this.props.params.materialId});this.props.actions.getItemDetailValues(e)}},{key:"componentDidMount",value:function(){N.FormValidationMd.init(),setTimeout(function(){b.FloatLabel.init()},400),A.showLoader("update_item")}},{key:"componentWillReceiveProps",value:function(e){var t=this,a=[],l=[],r=[],i=[];e.projectList.map(function(e,t){var l={id:e._id,label:e.title};a.push(l)}.bind(this));if(e.itemDetail&&!this.state.imageChange){var s=JSON.parse(JSON.stringify(e.itemDetail.item));if(this.state.breadcrumb&&s.modal){var n={parent:B,childone:s.modal,childtwo:""};this.props.breadCrumb(n),this.state.breadcrumb=!1}var d=e.itemDetail.supplierdata?JSON.parse(JSON.stringify(e.itemDetail.supplierdata)):[];this.setState({itemStateData:s,supplierDetails:d,imagePath:s.itemImage?s.itemImage:""}),0!=s.relatedItems.length&&this.setState({relatedItemValue:s.relatedItems}),0!=s.alternativeItems.length&&this.setState({alternativeItemValue:s.alternativeItems}),0!=s.replacementItems.length&&this.setState({replacementItemValue:s.replacementItems})}else this.setState({itemStateData:this.state.itemStateData});if(e.imagePath&&this.state.imageChange?this.setState({imagePath:e.imagePath}):!e.imagePath&&this.state.imageChange&&this.setState({imagePath:""}),0!=e.itemListRelated.length){e.itemListRelated.map(function(e,t){var a={value:e._id,label:e.itemName};l.push(a)}.bind(this));this.setState({relatedItemOptions:l})}if(0!=e.itemListAlternative.length){e.itemListAlternative.map(function(e,t){var a={value:e._id,label:e.itemName};r.push(a)}.bind(this));this.setState({alternativeItemOptions:r})}if(0!=e.itemListReplacement.length){e.itemListReplacement.map(function(e,t){var a={value:e._id,label:e.itemName};i.push(a)}.bind(this));this.setState({replacementItemOptions:i})}var m="";m=e.itemDetail.item&&e.itemDetail.item.toolsId?{id:e.itemDetail.item.toolsId._id,label:e.itemDetail.item.toolsId.title}:"",this.setState({projectOptions:a,projectValue:m});var o=h.default.findDOMNode(t.refs.update_item);setTimeout(function(){b.FloatLabel.init(),b.FormValidationMd.init(),$(o).unblock()},400)}},{key:"handleRelatedItemChange",value:function(e){this.setState({relatedItemValue:e})}},{key:"onRelatedItemInputChange",value:function(e){var t={itemName:e,companyId:localStorage.companyId};this.props.actions.getRelatedItem(t)}},{key:"handleAlternativeItemChange",value:function(e){this.setState({alternativeItemValue:e})}},{key:"onAlternativeItemInputChange",value:function(e){var t={itemName:e,companyId:localStorage.companyId};this.props.actions.getAlternativeItem(t)}},{key:"handleReplacementItemChange",value:function(e){this.setState({replacementItemValue:e})}},{key:"onReplacementItemInputChange",value:function(e){var t={itemName:e,companyId:localStorage.companyId};this.props.actions.getReplacementItem(t)}},{key:"setTab",value:function(e){e&&this.setState({activeTabName:e})}},{key:"onInputProjectChange",value:function(e){var t={title:e,companyId:localStorage.companyId};this.props.proActions.getProjectData(t)}},{key:"handleProjectChange",value:function(e){this.setState({projectValue:e});var t={toolsId:e?e.id:"",itemId:this.props.params.materialId};this.props.actions.updateTool(t)}},{key:"itemHandler",value:function(){if(toastr.remove(),(0,C.default)("#createItem").valid())if(0!==this.state.supplierDetails.length){var e={companyId:localStorage.companyId,itemId:this.props.params.materialId,itemName:h.default.findDOMNode(this.refs.item_name.refs.item_name).value,modal:h.default.findDOMNode(this.refs.item_modalNo.refs.item_modalNo).value,partNumber:h.default.findDOMNode(this.refs.item_partNo.refs.item_partNo).value,itemCategory:h.default.findDOMNode(this.refs.category.refs.category).value,series:h.default.findDOMNode(this.refs.series.refs.series).value,manufacturer:h.default.findDOMNode(this.refs.item_manufacturer.refs.item_manufacturer).value,description:h.default.findDOMNode(this.refs.item_description).value,notes:h.default.findDOMNode(this.refs.item_notes).value,labourHours:h.default.findDOMNode(this.refs.labourHrs.refs.labourHrs).value,itemStatus:h.default.findDOMNode(this.refs.status).value,suppliers:this.state.supplierDetails,mfgUrl:h.default.findDOMNode(this.refs.mfgUrl.refs.mfgUrl).value,manufactureWarranty:h.default.findDOMNode(this.refs.mfgWarranty.refs.mfgWarranty).value,relatedItems:this.state.relatedItemValue,alternativeItems:this.state.alternativeItemValue,replacementItems:this.state.replacementItemValue,modifiedBy:localStorage.userName},t=h.default.findDOMNode(this.refs.itemFileUpload).files[0];this.props.actions.updateItem(e,t,this.props.params.materialId),A.showLoader("update_item")}else toastr.error(Y.MIN_SUPPLIER)}},{key:"addPriceSchedule",value:function(){toastr.remove();var e={supplierName:h.default.findDOMNode(this.refs.sup_add.refs.supplierName.refs.supplierName).value,listPrice:h.default.findDOMNode(this.refs.sup_add.refs.listPrice.inputElement).value.replace(/[^0-9.]/g,""),dealerPrice:h.default.findDOMNode(this.refs.sup_add.refs.dealerPrice.inputElement).value.replace(/[^0-9.]/g,"")},t={startQty:h.default.findDOMNode(this.refs.sup_add.refs.startQty.refs.startQty).value.trim(),endQty:h.default.findDOMNode(this.refs.sup_add.refs.endQty.refs.endQty).value.trim(),price:h.default.findDOMNode(this.refs.sup_add.refs.price.inputElement).value.trim().replace(/[^0-9.]/g,"")};if(""!==e.supplierName&&""!==e.listPrice&&""!==e.dealerPrice)if(""==t.startQty)toastr.error(Y.START_QTY);else if(t.startQty<1)toastr.error(Y.START_QTY_GREATER);else if(""==t.endQty)toastr.error(Y.END_QTY);else if(t.endQty<1)toastr.error(Y.END_QTY_GREATER);else if(""==t.price)toastr.error(Y.REQUIRED_PRICE);else if(t.price<1)toastr.error(Y.PRICE_GREATER);else if(t.startQty>t.endQty)toastr.error("End Quantity must be Greater than Start Quantity");else{if(""!==this.state.priceScheduleIndex){var a=this.state.priceScheduleDetails[this.state.priceScheduleIndex];a.startQty=t.startQty,a.endQty=t.endQty,a.price=t.price,this.setState({priceScheduleDetails:this.state.priceScheduleDetails,priceScheduleIndex:""})}else{this.state.priceScheduleDetails.push(t);var l=this.state.priceScheduleDetails;this.setState({priceScheduleDetails:l})}h.default.findDOMNode(this.refs.sup_add.refs.startQty.refs.startQty).value="",h.default.findDOMNode(this.refs.sup_add.refs.endQty.refs.endQty).value="",h.default.findDOMNode(this.refs.sup_add.refs.price.inputElement).value=""}else toastr.error(Y.REQUIRED_SUPPLIER_DETAILS)}},{key:"addSupplier",value:function(e){toastr.remove(),e.preventDefault();var t={supplierName:h.default.findDOMNode(this.refs.sup_add.refs.supplierName.refs.supplierName).value,listPrice:h.default.findDOMNode(this.refs.sup_add.refs.listPrice.inputElement).value.replace(/[^0-9.]/g,""),dealerPrice:h.default.findDOMNode(this.refs.sup_add.refs.dealerPrice.inputElement).value.replace(/[^0-9.]/g,""),demoPrice:h.default.findDOMNode(this.refs.sup_add.refs.demoPrice.inputElement).value.replace(/[^0-9.]/g,""),priceDate:this.state.priceDateDisplay,leadTimedays:parseInt(h.default.findDOMNode(this.refs.sup_add.refs.leadTimeDays.refs.leadTimeDays).value),supplySource:h.default.findDOMNode(this.refs.sup_add.refs.supplySource).value,priceSchedule:this.state.priceScheduleDetails};if(""==t.supplierName.trim())toastr.error("Please enter supplier name.");else if(""==t.listPrice)toastr.error("Please enter list price.");else if(t.listPrice<1)toastr.error("List price should be greater than 0.");else if(""==t.dealerPrice)toastr.error("Please enter dealer price.");else if(t.dealerPrice<1)toastr.error("Dealer price should be greater than 0.");else if(t.demoPrice&&t.demoPrice<1)toastr.error("Demo price should be greater than 0.");else if(t.leadTimedays&&t.leadTimedays<1)toastr.error("Lead time days should be greater than 0.");else if(t.startQty>t.endQty)toastr.error("End Quantity must be Greater than Start Quantity");else{if(this.state.updateSupplierIndex>-1){var a=this.state.supplierDetails;a[this.state.updateSupplierIndex]=t,this.setState({supplierDetails:a,updateSupplierIndex:-1,priceScheduleDetails:[],priceDateDisplay:""})}else{this.state.supplierDetails.push(t);var l=this.state.supplierDetails;this.setState({supplierDetails:l,priceDateDisplay:""}),this.setState({priceScheduleDetails:[]}),b.FloatLabel.init()}var r=h.default.findDOMNode(this.refs.sup_add);$(r).modal("hide")}}},{key:"removePriceSchedule",value:function(e){var t=this.state.priceScheduleDetails[e];this.setState({currentRecordState:t}),this.state.priceScheduleDetails.splice(e,1),this.setState({priceScheduleDetails:this.state.priceScheduleDetails})}},{key:"editPriceSchedule",value:function(e){var t=this.state.priceScheduleDetails[e];this.setState({priceScheduleIndex:e}),h.default.findDOMNode(this.refs.sup_add.refs.startQty.refs.startQty).value=t.startQty,h.default.findDOMNode(this.refs.sup_add.refs.endQty.refs.endQty).value=t.endQty,h.default.findDOMNode(this.refs.sup_add.refs.price.refs.price).value=t.price,setTimeout(function(){b.FloatLabel.init()},400)}},{key:"removeSupplier",value:function(e){var t=this.state.supplierDetails[e];this.setState({currentRecordState:t}),this.state.supplierDetails.splice(e,1),this.setState({supplierDetails:this.state.supplierDetails})}},{key:"editSupplier",value:function(e){var t=this.state.supplierDetails[e];this.setState({updateSupplierIndex:e,priceDateDisplay:t.priceDate?t.priceDate:"",headerText:"Update Supplier"}),h.default.findDOMNode(this.refs.sup_add.refs.supplierName.refs.supplierName).value=t.supplierName?t.supplierName:"",h.default.findDOMNode(this.refs.sup_add.refs.listPrice.inputElement).value=t.listPrice?t.listPrice:"",h.default.findDOMNode(this.refs.sup_add.refs.dealerPrice.inputElement).value=t.dealerPrice?t.dealerPrice:"",h.default.findDOMNode(this.refs.sup_add.refs.demoPrice.inputElement).value=t.demoPrice?t.demoPrice:"",h.default.findDOMNode(this.refs.sup_add.refs.leadTimeDays.refs.leadTimeDays).value=t.leadTimedays?t.leadTimedays:"",h.default.findDOMNode(this.refs.sup_add.refs.supplySource).value=t.supplySource?t.supplySource:"Retail",0!=t.priceSchedule.length?this.setState({priceScheduleDetails:t.priceSchedule}):this.setState({priceScheduleDetails:[]}),setTimeout(function(){b.FloatLabel.init()},400);var a=h.default.findDOMNode(this.refs.sup_add);$(a).modal("show")}},{key:"cancelEdit",value:function(){h.default.findDOMNode(this.refs.sup_add.refs.supplierName.refs.supplierName).value="",h.default.findDOMNode(this.refs.sup_add.refs.listPrice.inputElement).value="",h.default.findDOMNode(this.refs.sup_add.refs.dealerPrice.inputElement).value="",h.default.findDOMNode(this.refs.sup_add.refs.demoPrice.inputElement).value="",h.default.findDOMNode(this.refs.sup_add.refs.leadTimeDays.refs.leadTimeDays).value="",h.default.findDOMNode(this.refs.sup_add.refs.supplySource).value="Retail",h.default.findDOMNode(this.refs.sup_add.refs.startQty.refs.startQty).value="",h.default.findDOMNode(this.refs.sup_add.refs.endQty.refs.endQty).value="",h.default.findDOMNode(this.refs.sup_add.refs.price.refs.price).value="",this.setState({priceScheduleDetails:[],updateSupplierIndex:-1,priceDateDisplay:"",headerText:"Add Supplier"})}},{key:"handlePriceDateEvent",value:function(e,t){var a=t.startDate.format("MM/DD/YYYY");this.setState({priceDateDisplay:a}),b.FloatLabel.init()}},{key:"imageUpdateHandler",value:function(e){this.state.imageChange=!0;var t=void 0,a=void 0;e.target.value?(t=this.props.params.materialId,a=h.default.findDOMNode(this.refs.itemFileUpload).files[0],(0,U.isValidImage)(a.name)||(t="")):t="",t&&this.props.actions.updateMaterialPicture(a,t)}},{key:"imageRemoveHandler",value:function(){if(this.state.imageChange=!0,this.state.imagePath){var e={itemId:this.props.params.materialId};this.props.actions.removeMaterialPicture(e)}}},{key:"handleSupplierModal",value:function(e){e.preventDefault();var t=h.default.findDOMNode(this.refs.sup_add);$(t).modal("show"),this.cancelEdit()}},{key:"render",value:function(){var e=this.state.itemStateData,t=this.state.supplierDetails.map(function(e,t){return c.default.createElement("tr",{key:t},c.default.createElement("td",null,e.supplierName?e.supplierName:"-"),c.default.createElement("td",null,e.listPrice?"$"+e.listPrice:"-"),c.default.createElement("td",null,e.dealerPrice?"$"+e.dealerPrice:"-"),c.default.createElement("td",null,e.demoPrice?"$"+e.demoPrice:"-"),c.default.createElement("td",null,e.leadTimedays?e.leadTimedays:"-"),c.default.createElement("td",null,e.priceDate?(0,S.default)(e.priceDate).format("LLL"):"-"),c.default.createElement("td",null,e.supplySource?e.supplySource:"-"),c.default.createElement("td",null,c.default.createElement("span",{className:"btn btn-icon-only purple",onClick:this.editSupplier.bind(this,t)},G),"   ",c.default.createElement("span",{className:"btn btn-icon-only red",onClick:this.removeSupplier.bind(this,t)},z)))}.bind(this)),l=this.state.priceScheduleDetails.map(function(e,t){return c.default.createElement("tr",{key:t},c.default.createElement("td",null,e.startQty),c.default.createElement("td",null,e.endQty),c.default.createElement("td",null,e.price),c.default.createElement("td",null,c.default.createElement("span",{className:"btn btn-icon-only purple",onClick:this.editPriceSchedule.bind(this,t)},J),"   ",c.default.createElement("span",{className:"btn btn-icon-only red",onClick:this.removePriceSchedule.bind(this,t)},K)))}.bind(this));return c.default.createElement("div",null,c.default.createElement("div",null,c.default.createElement("div",{className:"portlet-title tabbable-line"},c.default.createElement("ul",{className:"nav nav-tabs"},c.default.createElement("li",{className:"active"},c.default.createElement("a",{href:"#item-add","data-toggle":"tab",onClick:this.setTab.bind(this,"tab1")},"Material")),c.default.createElement("li",null,c.default.createElement("a",{href:"#item-moreinfo","data-toggle":"tab",onClick:this.setTab.bind(this,"tabOther")},"More Info")),c.default.createElement("li",null,c.default.createElement("a",{href:"#item-tools","data-toggle":"tab",onClick:this.setTab.bind(this,"tabOther")},"Tools")),c.default.createElement("div",{className:"form-actions noborder text-right"},c.default.createElement(f.Link,{to:"/material/"+this.props.params.materialId,className:"btn red"},"Cancel"),"  ","tab1"==this.state.activeTabName?c.default.createElement("button",{type:"button",className:"btn blue",onClick:this.itemHandler},"Save"):""))),c.default.createElement("div",{className:"portlet light bordered",id:"update_item",ref:"update_item"},c.default.createElement("div",{className:"portlet-body"},c.default.createElement("div",{className:"tab-content"},c.default.createElement("div",{className:"tab-pane active",id:"item-add"},X,c.default.createElement("form",{role:"form",id:"createItem"},c.default.createElement("div",{className:"form-body"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-9",style:{marginLeft:"-15px"}},c.default.createElement("div",{className:"col-md-6"},c.default.createElement(L.default,{inputType:"text",parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Name",name:"item_name",htmlFor:"item_name",defaultValue:e.itemName?e.itemName:"",key:e.itemName,required:!0,ref:"item_name"})),c.default.createElement("div",{className:"col-md-6"},c.default.createElement(L.default,{inputType:"text",parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Model No",name:"item_modalNo",htmlFor:"item_modalNo",defaultValue:e.modal?e.modal:"",key:e.modal,required:!0,ref:"item_modalNo"})),c.default.createElement("div",{className:"col-md-6"},c.default.createElement(L.default,{inputType:"text",parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Part No",name:"item_partNo",htmlFor:"item_partNo",defaultValue:e.partNumber?e.partNumber:"",key:e.partNumber,required:!1,ref:"item_partNo"})),c.default.createElement("div",{className:"col-md-6"},c.default.createElement(L.default,{inputType:"text",parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Mfg",name:"item_manufacturer",htmlFor:"item_manufacturer",defaultValue:e.manufacturer?e.manufacturer:"",key:e.manufacturer,required:!0,ref:"item_manufacturer"})),c.default.createElement("div",{className:"col-md-6"},c.default.createElement(L.default,{inputType:"text",parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Category",name:"category",htmlFor:"category",defaultValue:e.itemCategory?e.itemCategory:"",key:e.itemCategory,required:!1,ref:"category"}))),c.default.createElement("div",{className:"col-md-3"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},c.default.createElement("div",{className:"fileinput fileinput-exists","data-provides":"fileinput"},c.default.createElement("div",{className:"fileinput-preview thumbnail","data-trigger":"fileinput",style:{width:200,height:150}},c.default.createElement("img",{src:this.state.imagePath?this.state.imagePath:a(1420),className:"img-responsive",alt:"Logo"})),c.default.createElement("div",null,c.default.createElement("span",{className:"btn red btn-sm btn-outline btn-file"},Z,ee,te,c.default.createElement("input",{type:"file",name:"itemFileUpload",ref:"itemFileUpload",id:"itemFileUpload",accept:"image/*",onChange:this.imageUpdateHandler})),this.state.imagePath?c.default.createElement("a",{href:"javascript:;",className:"btn red btn-sm",onClick:this.imageRemoveHandler},"Remove"):null))))),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-4"},c.default.createElement(L.default,{inputType:"number",min:0,parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Labor Hrs",name:"labourHrs",htmlFor:"labourHrs",defaultValue:e.labourHour?e.labourHour:"",key:e.labourHour,required:!1,ref:"labourHrs"})),c.default.createElement("div",{className:"col-md-4"},c.default.createElement(L.default,{inputType:"text",parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Manufacture Warranty",name:"mfgWarranty",htmlFor:"mfgWarranty",defaultValue:e.manufactureWarranty?e.manufactureWarranty:"",key:e.manufactureWarranty,required:!1,ref:"mfgWarranty"})),c.default.createElement("div",{className:"col-md-4"},c.default.createElement(L.default,{inputType:"text",parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Series",name:"series",htmlFor:"series",defaultValue:e.series?e.series:"",key:e.series,required:!1,ref:"series"})),c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},c.default.createElement(_.default,{style:{resize:"none"},type:"text",className:"form-control",ref:"item_description",name:"item_description",defaultValue:e.description?e.description:"",key:e.description,rows:3}),ae)),c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},c.default.createElement(_.default,{style:{resize:"none"},type:"text",className:"form-control",ref:"item_notes",name:"item_notes",defaultValue:e.notes?e.notes:"",key:e.notes,rows:3}),le)),c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},c.default.createElement("select",{className:"form-control edited",id:"status",ref:"status",defaultValue:e.itemStatus?e.itemStatus:"Upcoming",key:e.itemStatus},re,ie,se,ne),de)),c.default.createElement("div",{className:"col-md-6"},c.default.createElement(L.default,{inputType:"text",parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Mfg Url",name:"mfgUrl",htmlFor:"mfgUrl",defaultValue:e.mfgUrl?e.mfgUrl:"",key:e.mfgUrl,required:!1,ref:"mfgUrl"})),c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},me,c.default.createElement(R.default,{multi:!0,value:this.state.relatedItemValue,disabled:!1,name:"relatedItems",id:"relatedItems",ref:"relatedItems",options:this.state.relatedItemOptions,onChange:this.handleRelatedItemChange,onInputChange:this.onRelatedItemInputChange}))),c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},oe,c.default.createElement(R.default,{multi:!0,value:this.state.alternativeItemValue,disabled:!1,name:"alternativeItems",id:"alternativeItems",ref:"alternativeItems",options:this.state.alternativeItemOptions,onChange:this.handleAlternativeItemChange,onInputChange:this.onAlternativeItemInputChange}))),c.default.createElement("div",{className:"col-md-6"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},ue,c.default.createElement(R.default,{multi:!0,value:this.state.replacementItemValue,disabled:!1,name:"replacementItems",id:"replacementItems",ref:"replacementItems",options:this.state.replacementItemOptions,onChange:this.handleReplacementItemChange,onInputChange:this.onReplacementItemInputChange})))),c.default.createElement("div",{className:"portlet-title"},ce,c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-4 col-md-offset-10",style:{marginBottom:"10px"}},c.default.createElement("button",{onClick:this.handleSupplierModal,className:"btn green"},"Add Supplier")))),c.default.createElement(H.default,{addSupplierId:"sup_add",ref:"sup_add",handlePriceDateEvent:this.handlePriceDateEvent,priceDateDisplay:this.state.priceDateDisplay,addPriceSchedule:this.addPriceSchedule,addSupplier:this.addSupplier,priceScheduleDetails:this.state.priceScheduleDetails,priceScheduleData:l,headerText:this.state.headerText}),c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"portlet light portlet-fit portlet-datatable bordered"},c.default.createElement("div",{className:"portlet-body"},c.default.createElement("div",{className:"table-container table-responsive"},c.default.createElement("table",{className:"table table-striped table-bordered table-hover",id:"sample_3"},fe,c.default.createElement("tbody",null,t))))))))),c.default.createElement("div",{className:"tab-pane",id:"item-moreinfo"},pe,c.default.createElement("div",{className:"portlet-body"},c.default.createElement("div",{className:"tab-content"},c.default.createElement("form",{action:"#",className:"horizontal-form"},c.default.createElement("div",{className:"form-body"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-7"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},c.default.createElement("div",{className:"form-control form-control-static"},e.createdBy?e.createdBy:"-"),he)),c.default.createElement("div",{className:"col-md-5"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},c.default.createElement("div",{className:"form-control form-control-static"},e.createdBy?(0,S.default)(e.createdAt).format("LLL"):"-"),ve)),c.default.createElement("div",{className:"col-md-7"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},c.default.createElement("div",{className:"form-control form-control-static"},e.modifiedBy?e.modifiedBy:"-"),Ee)),c.default.createElement("div",{className:"col-md-5"},c.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},c.default.createElement("div",{className:"form-control form-control-static"},e.modifiedBy?(0,S.default)(e.updatedAt).format("LLL"):"-"),Ne)))))))),c.default.createElement("div",{className:"tab-pane",id:"item-tools"},c.default.createElement("div",{className:"portlet-body"},c.default.createElement("div",{className:"tab-content"},c.default.createElement("form",{action:"#",className:"horizontal-form"},c.default.createElement("div",{className:"form-body"},c.default.createElement("div",{className:"row"},c.default.createElement("div",{className:"col-md-6"},be,c.default.createElement(R.default,{disabled:this.state.disabled,value:this.state.projectValue?this.state.projectValue:"",key:this.state.projectValue?this.state.projectValue:"",placeholder:"Project",name:"",options:this.state.projectOptions,onChange:this.handleProjectChange,onInputChange:this.onInputProjectChange})))))))))))))}}]),t}(c.default.Component);t.default=(0,P.connect)(d,m)(ye)},1420:function(e,t,a){e.exports=a.p+"itemlogo.png"},1511:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),m=a(0),o=l(m),u=(a(3),a(582)),c=l(u),f=a(23),p=l(f),h=a(1),v=l(h),E=a(148),N=l(E),b=a(147);a(10);var y=o.default.createElement("label",{htmlFor:"listPrice"},o.default.createElement("span",{className:"required"},"*"),"List Price"),g=o.default.createElement("label",{htmlFor:"dealerPrice"},o.default.createElement("span",{className:"required"},"*"),"Dealer Price"),D=o.default.createElement("label",{htmlFor:"demoPrice"},"Demo Price"),S=o.default.createElement("option",{value:"Retail"},"Retail"),I=o.default.createElement("option",{value:"Reseller"},"Reseller"),_=o.default.createElement("option",{value:"Distributor"},"Distributor"),P=o.default.createElement("option",{value:"Manufacturer"},"Manufacturer"),O=o.default.createElement("label",{htmlFor:"supplySource"},"Supply source"),M=o.default.createElement("label",{htmlFor:"priceDate"},"Price Date"),C=o.default.createElement("span",{className:"input-group-btn"},o.default.createElement("button",{className:"btn default date-set calendar-shadow-none",type:"button"},o.default.createElement("i",{className:"fa fa-calendar"}))),k=o.default.createElement("div",{className:"caption"},o.default.createElement("span",{className:"caption-subject bold"},"Price schedule")),T=o.default.createElement("label",{htmlFor:"price"},"Price"),Q=o.default.createElement("i",{className:"fa fa-plus"}),R=o.default.createElement("thead",null,o.default.createElement("tr",null,o.default.createElement("th",null,"Start Qty"),o.default.createElement("th",null,"End Qty"),o.default.createElement("th",null,"Price($)"),o.default.createElement("th",null,"Actions"))),F=o.default.createElement("button",{type:"button",className:"btn dark btn-outline","data-dismiss":"modal"},"Close"),L=function(e){function t(e,a){return i(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,a))}return n(t,e),d(t,[{key:"render",value:function(){var e;return o.default.createElement("div",{id:this.props.addSupplierId,ref:this.props.addSupplierId,className:"modal fade",tabIndex:"-1","aria-hidden":"true"},o.default.createElement("div",{className:"modal-dialog modal-lg"},o.default.createElement("div",{className:"modal-content"},o.default.createElement("div",{className:"modal-header"},o.default.createElement("div",{className:"caption"},o.default.createElement("span",{className:"caption-subject bold uppercase"},this.props.headerText))),o.default.createElement("div",{className:"modal-body"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-4"},o.default.createElement(c.default,{inputType:"text",parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",id:"supplierName",title:"Name",name:"supplierName",htmlFor:"supplierName",defaultValue:"",required:!0,ref:"supplierName"})),o.default.createElement("div",{className:"col-md-4"},o.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},o.default.createElement(N.default,{mask:b.priceMask,className:"form-control",guide:!1,name:"listPrice",id:"listPrice",ref:"listPrice",htmlFor:"listPrice"}),y)),o.default.createElement("div",{className:"col-md-4"},o.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},o.default.createElement(N.default,{mask:b.priceMask,className:"form-control",guide:!1,name:"dealerPrice",id:"dealerPrice",ref:"dealerPrice",htmlFor:"dealerPrice"}),g)),o.default.createElement("div",{className:"col-md-4"},o.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},o.default.createElement(N.default,{mask:b.priceMask,className:"form-control",guide:!1,name:"demoPrice",id:"demoPrice",ref:"demoPrice",htmlFor:"demoPrice"}),D)),o.default.createElement("div",{className:"col-md-4"},o.default.createElement(c.default,{inputType:"number",min:0,parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",title:"Lead time days",name:"leadTimeDays",htmlFor:"leadTimeDays",defaultValue:"",required:!1,ref:"leadTimeDays"})),o.default.createElement("div",{className:"col-md-4"},o.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},o.default.createElement("select",{className:"form-control edited",id:"supplySource",ref:"supplySource"},S,I,_,P),O)),o.default.createElement("div",{className:"col-md-4"},o.default.createElement("div",{className:"form-group form-md-floating-label"},M,o.default.createElement(p.default,{showDropdowns:!0,singleDatePicker:!0,minDate:(0,v.default)(),onApply:this.props.handlePriceDateEvent},o.default.createElement("div",{className:"input-group date form_datetime"},o.default.createElement("input",(e={type:"text",className:"selected-date-range-btn",size:"16",readOnly:!0},r(e,"className","form-control"),r(e,"defaultValue",this.props.priceDateDisplay),r(e,"key",this.props.priceDateDisplay),r(e,"id","priceDate"),r(e,"name","priceDate"),e)),C))))),k,o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-3"},o.default.createElement(c.default,{inputType:"number",min:0,parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",id:"startQty",title:"Start Qty",name:"startQty",htmlFor:"startQty",defaultValue:"",required:!1,ref:"startQty"})),o.default.createElement("div",{className:"col-md-3"},o.default.createElement(c.default,{inputType:"number",min:0,parentDivClass:"form-group form-md-line-input form-md-floating-label",className:"form-control",id:"endQty",title:"End Qty",name:"endQty",htmlFor:"endQty",defaultValue:"",required:!1,ref:"endQty"})),o.default.createElement("div",{className:"col-md-3"},o.default.createElement("div",{className:"form-group form-md-line-input form-md-floating-label"},o.default.createElement(N.default,{mask:b.priceMask,className:"form-control",guide:!1,name:"price",id:"price",ref:"price",htmlFor:"price"}),T)),o.default.createElement("div",{className:"col-md-3",style:{marginTop:"30px"}},o.default.createElement("a",{onClick:this.props.addPriceSchedule,className:"btn btn-icon-only green"},Q))),0!=this.props.priceScheduleDetails.length?o.default.createElement("div",{className:"portlet light portlet-fit portlet-datatable bordered"},o.default.createElement("div",{className:"portlet-body"},o.default.createElement("div",{className:"table-container table-responsive"},o.default.createElement("table",{className:"table table-striped table-bordered table-hover",id:"sample_3"},R,o.default.createElement("tbody",null,this.props.priceScheduleData))))):null),o.default.createElement("div",{className:"modal-footer"},F,o.default.createElement("button",{type:"button",className:"btn green",onClick:this.props.addSupplier},"Save")))))}}]),t}(o.default.Component);t.default=L}});