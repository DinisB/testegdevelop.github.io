gdjs.MainCode = {};
gdjs.MainCode.localVariables = [];
gdjs.MainCode.idToCallbackMap = new Map();


gdjs.MainCode.eventsList0 = function(runtimeScene) {

};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.MainCode.eventsList0(runtimeScene);


return;

}

gdjs['MainCode'] = gdjs.MainCode;
