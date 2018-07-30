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

//获取最大最小数，最优算法
function getMinMax(arr){
  var len = arr.length
  var min = 0
  var max = 0
  for(var i = 0;i<len;i=i+2){
    if(min=0) min = arr[i]
    if(max=0) max = arr[i+1]
    if(arr[i]<min) min= arr[i]
    if(arr[i+1]>max) max = arr[i+1]
    if(min>max){
      var temp = min
      min = max
      max= temp
    }

  }

}

//遍历数组，判断交集来更新每项的状态，1表示有交集，2表示已选中，0表示无交集，并求出最终唯一id
function getSelectItemAndId() {
    var curr = {
        state: 1,
        ids: [1, 2, 3]
    }
    var mainArr = [[{
        state: 2,
        ids: [1, 2, 3]
    }, {
        state: 1,
        ids: [1, 23]
    }], [{
        state: 1,
        ids: [1, 4, 5]
    }, {
        state: 1,
        ids: [4, 55, 77]
    }]]

    for(var i = 0; i<mainArr.length; i++){
        mainArr[i].forEach(function(item,i){
            if(intersection(curr.ids, item.ids).length>0){
                if(mainArr[i].some(function(item2){ return item2.state == 2;})){
                    item.state == 1
                }else{
                    item.state == 2
                }
            }else{
                item.state = 0;
            }
        });
    }
    console.log(mainArr)
}

function intersection(firstArray, secondArray) {
    // The logic here is to create a hashmap with the elements of the firstArray as the keys.
    // After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash
    // If it does exist, add that element to the new array.
  
    var hashmap = {};
    var intersectionArray = [];
  
    firstArray.forEach(function(element) {
      hashmap[element] = 1;
    });
  
    // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
    secondArray.forEach(function(element) {
      if (hashmap[element] === 1) {
        intersectionArray.push(element);
        hashmap[element]++;
      }
    });
  
    return intersectionArray;
  
    // Time complexity O(n), Space complexity O(n)
  }