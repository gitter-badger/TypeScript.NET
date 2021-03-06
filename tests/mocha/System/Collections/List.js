(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "./ICollection", "../../../../source/System/Collections/List"], factory);
    }
})(function (require, exports) {
    "use strict";
    var ICollectionTests = require("./ICollection");
    var List_1 = require("../../../../source/System/Collections/List");
    var assert = require('../../../../node_modules/assert/assert');
    var CLASS_NAME = 'List';
    ICollectionTests.StringCollection(CLASS_NAME, new List_1.default());
    ICollectionTests.NumberCollection(CLASS_NAME, new List_1.default());
    ICollectionTests.InstanceCollection(CLASS_NAME, new List_1.default());
    var list = new List_1.default([1, 2, 3, 4]);
    assert.equal(list.linq.where(function (i) { return i > 2; }).count(), 2);
});

//# sourceMappingURL=List.js.map
