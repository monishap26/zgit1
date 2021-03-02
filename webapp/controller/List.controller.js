sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("SAP.BTP.project1.controller.List", {
            handleListItemPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
                oRouter.navTo("Detail", {
                    productId: selectedProductId
                });
            }
        })
    });