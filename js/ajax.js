$.extend({

    ajaxData: function(url , type, options, headers,callbackSuc, callbackErr) {
        $.ajax({
            type: type,
            url: url,
            async: true,
            data: options,
            headers: headers,
            success: function(data) {
                if ($.isFunction(callbackSuc)) callbackSuc(data);
            },
            error: function(data) {
                if ($.isFunction(callbackErr)) callbackErr(data);
            }
        });
    },
    postWithHeaders: function(url,options,headers,callbackSuc,callbackErr) {
        $.ajaxData(url,'POST',options,headers,callbackSuc,callbackErr);
    },
    postData: function(url,options,callbackSuc,callbackErr) {
        $.ajaxData(url,'POST',options,{},callbackSuc,callbackErr);
    },
    getWithHeaders: function(url,options,headers,callbackSuc,callbackErr) {
        $.ajaxData(url,'GET',options,headers,callbackSuc,callbackErr);
    },
    getData: function(url,options,callbackSuc,callbackErr) {
        $.ajaxData(url,'GET',options,{},callbackSuc,callbackErr);
    },
})
