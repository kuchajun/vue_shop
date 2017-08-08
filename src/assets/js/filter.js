export function checkSsid (ssid) {
    var itemName = 'testssid';
    var localssid = localStorage.getItem(itemName);

    if (typeof(ssid) === 'string') {
        //  设置ssid
        if (!localssid) localStorage.setItem(itemName, ssid);
       // console.log("参数为string")
    } else {
        //  取ssid，如果有，就赋值
        if (typeof(ssid) !== 'object') ssid = {}
        if (localssid) ssid[itemName] = localssid;
    	return ssid;
    }
}	