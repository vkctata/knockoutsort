//table sorter
ko.bindingHandlers.knockoutSort = {
    //init 
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var asc = false;
        var value = valueAccessor();
        element.style.cursor = 'pointer';
        if (value.arr.sortBy === undefined) {
            value.arr.sortBy = value.prop;
            value.arr.subscribe(function (newVal) {
                asc = !asc;
                sort();
                value.arr.sorted(newVal);
            });
        }
        //add a new observable array inside the current oberservablearray
        value.arr.sorted = ko.observableArray();
       // a generic sort function to sort on any property
        var sort = function () {
            var prop = value.arr.sortBy;
            var data = ko.utils.unwrapObservable(value.arr);
            asc = !asc;
            data.sort(function (left, right) {
                var rec1 = left;
                var rec2 = right;
                if (!asc) {
                    rec1 = right;
                    rec2 = left;
                }
                rec1 = ko.utils.unwrapObservable(rec1[prop]) || "";
                rec2 = ko.utils.unwrapObservable(rec2[prop]) || "";
                return rec1 == rec2 ? 0 : rec1 < rec2 ? -1 : 1;
            });
            value.arr.sorted(data);
        };
        element.onclick = function () {
            value.arr.sortBy = value.prop;
            sort();
        };
    }
};
