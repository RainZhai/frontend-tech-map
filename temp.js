//不重复的字母个数 ab
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
}

function getNoRepeatCharCount(str) {
    var arr = str.split('');
    var amt = 0;
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var temp = arr[i];
        for (var j = i + 1; j < len; j++) {
            if (temp == arr[j]) {
                arr[i] = '';
                arr[j] = '';
            }
        }
    }
    for (var k = 0; k < len; k++) {
        if (arr[k] != '') {
            amt++;
        }
    }
    return amt;
}
getNoRepeatCharCount('aba');

function getNoRepeatCharCount2(str) {
    var arr = str.split('');
    var arr2 = str.split('');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var temp = arr[i];
        for (var j = i + 1; j < len; j++) {
            if (temp == arr[j]) {
                arr2.remove(arr[i]);
                arr2.remove(arr[j]);
            }
        }
    }
    console.log(arr2);
    return arr2.length;
}

getNoRepeatCharCount2('aba');

function getNoRepeatCharCount3(str) {
    var arr = str.split('').sort();
    var arr2 = str.split('');
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            arr2.remove(arr[i]);
            arr2.remove(arr[i + 1]);
        }
    }
    console.log(arr2);
    return arr2.length;
}

getNoRepeatCharCount3('aba');

function getNoRepeatCharCount4(str) {
    var arr = str.split('');
    var hash = {};
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        if (hash[arr[i]]) {
            hash[arr[i]]++;
        } else {
            hash[arr[i]] = 1;
        }
    }
    console.log(hash);
    var amt = 0;
    for (var i in hash) {
        if (hash[i] == 1) {
            amt++;
        }
    }
    return amt;
}

getNoRepeatCharCount4('aba');

//获取字符串的子串
function getCombSubChar(str) {
    var arr = str.split('');
    var len = arr.length;
    var resultArr = [];
    for (var i = 0; i<len; i++) {
            combination2(arr[i], arr.slice(i+1, arr.length), resultArr)
    }
    console.log(resultArr)
}
/**
 * 计算组合
 * @param {number} m 选取个数 
 * @param {Array} arr 内容数组
 * @param {Array} resultArr 结果数组
 */
function combination(m, arr, resultArr) {
    if (m == 0) {
        return;
    }
    if (arr.length != 0) {
        if (m == 1) {
            resultArr.push(arr[0]);
        }
        combination(m - 1, arr.slice(m, arr.length), resultArr);
    }
}

function combination2(start, arr, resultArr) {
    if (arr.length != 0) {
        resultArr.push(start + arr[0]);
        combination2(start, arr.slice(1, arr.length), resultArr)
combination2(start+arr[0], arr.slice(1, arr.length), resultArr)
    } else {
        if(start.length==1) resultArr.push(start);
    }
}
getCombSubChar('sd')